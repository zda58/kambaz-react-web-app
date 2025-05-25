import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router"
import { useDispatch, useSelector } from "react-redux";
import { RoleRoute } from "./Account/ProtectedRoute";
import { useEffect, useState } from "react";
//import { addEnrollment, deleteEnrollment } from "./Courses/Enrollments/reducer";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";
import * as enrollmentClient from "./Courses/Enrollments/client"
import { setCourses } from "./Courses/reducer";

export default function Dashboard() {
  const [course, setCourse] = useState<any>({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
  });
  const dispatch = useDispatch();
  const [enrollments, setEnrollments] = useState<any[]>([]);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const [showAll, setShowAll] = useState(false);
  const fetchCourses = async () => {
    try {
      const newCourses = showAll ? await courseClient.fetchAllCourses()
        : await userClient.findMyCourses();
      dispatch(setCourses(newCourses));
      console.log(showAll, newCourses.length)
      console.log(newCourses)
    } catch (error) {
      console.error(error);
    }
  };

  const fetchEnrollments = async () => {
    try {
      const enrollments = await userClient.findMyEnrollments();
      setEnrollments(enrollments);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCourses();
    fetchEnrollments();
  }, []);

  useEffect(() => {
    fetchCourses();
  }, [showAll]);
  const addNewCourse = async () => {
    const newCourse = await userClient.createCourse(course);
    dispatch(setCourses([...courses, newCourse]));
  };
  const deleteCourse = async (courseId: string) => {
    await courseClient.deleteCourse(courseId);
    dispatch(setCourses(courses.filter((course: any) => course._id !== courseId)));
  };
  const updateCourse = async () => {
    await courseClient.updateCourse(course);
    dispatch(setCourses(courses.map((c: any) => {
      if (c._id === course._id) { return course; }
      else { return c; }
    })));
  };

  const deleteEnrollment = async (enrollmentId: string) => {
    await enrollmentClient.deleteEnrollment(enrollmentId);
    setEnrollments(enrollments.filter((enrollment) => enrollment._id !== enrollmentId));
  };

  const addEnrollment = async (courseId: string) => {
    const newEnrollment = await userClient.enrollInCourse(courseId);
    setEnrollments([...enrollments, newEnrollment])
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <RoleRoute roles={["FACULTY"]}>
        <h5>New Course
          <button className="btn btn-primary float-end"
            id="wd-add-new-course-click"
            onClick={() => addNewCourse()} > Add </button>
          <button className="btn btn-warning float-end me-2"
            onClick={() => updateCourse()} id="wd-update-course-click">
            Update
          </button>
        </h5><br />
        <br />
        <Form.Control value={course.name} className="mb-2"
          onChange={(e) => setCourse({ ...course, name: e.target.value })} />
        <Form.Control as="textarea" value={course.description} rows={3}
          onChange={(e) => setCourse({ ...course, description: e.target.value })} />
        <hr />
      </RoleRoute>
      <div className="d-flex justify-content-between">
        <h2 id="wd-dashboard-published">Published Courses ({showAll ? courses.length : courses.filter((course: any) =>
          enrollments.some(
            (enrollment: any) =>
              enrollment.user === currentUser._id &&
              enrollment.course === course._id
          )).length})
        </h2>
        <button className="btn btn-primary float-end me-2"
          onClick={() => {
            setShowAll(!showAll)
          }} id="wd-update-enrollment-click">
          Enrollments
        </button>
      </div>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.filter((course: any) => showAll || enrollments.some((enrollment) =>
            enrollment.user === currentUser._id &&
            enrollment.course === course._id))
            .map((course: any) => {
              const enrollment = enrollments.find(
                (enrollment: any) =>
                  enrollment.user === currentUser._id &&
                  enrollment.course === course._id
              );
              return (
                <Col className="wd-dashboard-course" style={{ width: "350px" }}>
                  <Card>
                    <Link to={enrollment ? `/Kambaz/Courses/${course._id}/Home` : ''}
                      className="wd-dashboard-course-link text-decoration-none text-dark" >
                      <Card.Img src={
                        course.image ? course.image : "/vite.svg"
                      } variant="top" width="100%" height={160} />
                      <Card.Body className="card-body">
                        <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                          {course.name} </Card.Title>
                        <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                          {course.description} </Card.Text>
                        <Button variant={enrollment ? "primary" : "secondary"}> Go </Button>

                        <RoleRoute roles={["FACULTY"]}>
                          <button onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }} className="btn btn-danger float-end"
                            id="wd-delete-course-click">
                            Delete
                          </button>
                          <button id="wd-edit-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                            }}
                            className="btn btn-warning me-2 float-end" >
                            Edit
                          </button>
                        </RoleRoute>
                        <button id="wd-toggle-enrollment-click"
                          onClick={(event) => {
                            event.preventDefault();
                            if (enrollment) {
                              deleteEnrollment(enrollment._id);
                            } else {
                              addEnrollment(course._id);
                            }
                          }}
                          className={`btn ${enrollment ? 'btn-danger' : 'btn-success'} me-2 float-end`} >
                          {enrollment ? 'Unenroll' : 'Enroll'}
                        </button>
                      </Card.Body>
                    </Link>
                  </Card>
                </Col>
              )
            })}
        </Row>
      </div>
    </div>
  );
}
