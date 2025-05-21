import { Col, Form, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import * as db from "../../Database"

const formatLocalDateTime = (date: string): string => {
  try {
    const dateObj = new Date(date);
    
    if (isNaN(dateObj.getTime())) {
      throw new Error();
    }

    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    const hours = String(dateObj.getHours()).padStart(2, '0');
    const minutes = String(dateObj.getMinutes()).padStart(2, '0');
    
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  } catch (error) {
    return 'invalid date';
  }
};

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignments = db.assignments;

  const assignment = assignments.find((assignment: any) => assignment._id === aid);
  
  if (!assignment) {
    return <div>Assignment not found</div>;
  }

  return (
    <div id="wd-assignments-editor">
      <Form>
        <Form.Group className="mb-3" controlId="wd-name">
          <Form.Label className="fw-bold">Assignment Name</Form.Label>
          <Form.Control defaultValue={assignment.title} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="wd-description">
          <Form.Control
            as="textarea"
            style={{ height: '150px' }}
            defaultValue={assignment.description}
          />
        </Form.Group>

        <Row className="mb-3 align-items-center">
          <Col xs={4} className="text-end pe-2">
            <Form.Label htmlFor="wd-points" className="mb-0">Points</Form.Label>
          </Col>
          <Col xs={8} md={6}>
            <Form.Group controlId="wd-points" className="mb-0">
              <Form.Control type="number" defaultValue={assignment.points} />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3 align-items-center">
          <Col xs={4} className="text-end pe-2">
            <Form.Label htmlFor="wd-group" className="mb-0">Assignment Group</Form.Label>
          </Col>
          <Col xs={8} md={6}>
            <Form.Group controlId="wd-group" className="mb-0">
              <Form.Select defaultValue={assignment.group}>
                <option value="ASSIGNMENTS">Assignments</option>
                <option value="QUIZES">Quizzes</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3 align-items-center">
          <Col xs={4} className="text-end pe-2">
            <Form.Label htmlFor="wd-display-grade-as" className="mb-0">Display Grade as</Form.Label>
          </Col>
          <Col xs={8} md={6}>
            <Form.Group controlId="wd-display-grade-as" className="mb-0">
              <Form.Select defaultValue={assignment.submissionType}>
                <option value="PERCENTAGE">Percentage</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col xs={4} className="text-end pe-2">
            <Form.Label htmlFor="wd-submission-type" className="mb-0 mt-3">Submission Type</Form.Label>
          </Col>
          <Col xs={8} md={6} className="border pb-2 pt-2">
            <Form.Group controlId="wd-submission-type" className="mb-0">
              <Form.Select defaultValue={assignment.submissionType} className="mb-2">
                <option value="ONLINE">Online</option>
                <option value="PERSON">In Person</option>
              </Form.Select>
              <Form.Label className="fw-bold">Online Entry Options</Form.Label>
              <Form.Check defaultChecked={false} id="wd-text-entry"
                label="Text Entry" />
              <Form.Check defaultChecked={false} id="wd-website-url"
                label="Website URL" />
              <Form.Check defaultChecked={false} id="wd-media-recordings"
                label="Media Recordings" />
              <Form.Check defaultChecked={false} id="wd-student-annotations"
                label="Student annotations" />
              <Form.Check defaultChecked={false} id="wd-file-uploads"
                label="File Uploads" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col xs={4} className="text-end pe-2">
            <Form.Label htmlFor="wd-assign-to" className="mb-0 mt-3">Assign</Form.Label>
          </Col>
          <Col xs={8} md={6} className="border pb-2 pt-2">
            <Form.Group controlId="wd-assign-to" className="mb-3">
              <Form.Label className="fw-bold">Assign to</Form.Label>
              <Form.Control as="select" multiple defaultValue={assignment.assignTo}>
                <option value="SEC1">Section 1</option>
                <option value="SEC2">Section 2</option>
                <option value="SEC3">Section 3</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="wd-due-date" className="mb-0">
              <Form.Label className="fw-bold">Due</Form.Label>
              <Form.Control type="datetime-local" defaultValue={formatLocalDateTime(assignment.due)}/>
            </Form.Group>
            <Row>
              <Col xs={6}>
                <Form.Group controlId="wd-available-from" className="mb-0">
                  <Form.Label className="fw-bold">Available from</Form.Label>
                  <Form.Control type="datetime-local" defaultValue={formatLocalDateTime(assignment.from)}/>
                </Form.Group>
              </Col>
              <Col xs={6}>
                <Form.Group controlId="wd-available-until" className="mb-0">
                  <Form.Label className="fw-bold">Until</Form.Label>
                  <Form.Control type="datetime-local" defaultValue={formatLocalDateTime(assignment.until)}/>
                </Form.Group>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr />
        <Row className="mb-3">
          <Col xs={4}>
          </Col>
          <Col xs={8} md={6} className="text-end">
            <Link to={`/Kambaz/Courses/${cid}/Assignments/`} id={`wd-cancel`}
              className="btn btn-secondary btn-lg me-2">Cancel</Link>
            <Link to={`/Kambaz/Courses/${cid}/Assignments/`} id={`wd-cancel`}
              className="btn btn-danger btn-lg me-2">Save</Link>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
