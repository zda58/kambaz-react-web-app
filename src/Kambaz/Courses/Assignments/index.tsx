import { ListGroup, Nav } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import { LuNotebookText } from "react-icons/lu";
import AssignmentsControl from "./AssignmentsControl";
import * as db from "../../Database"
import { useParams } from "react-router";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;

  return (
    <div id="wd-assignments">
      <AssignmentsControl />
      <ListGroup className="rounded-0" id="wd-modules">
        <ListGroup.Item className="wd-module p-0 mb-5 sf-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />ASSIGNMENTS<ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            {assignments.filter((assignment: any) => assignment.course === cid).map((assignment: any) => (
              <ListGroup.Item className="wd-lesson d-flex justify-content-between align-items-center p-3 ps-1">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <LuNotebookText color="green" className="me-2 fs-3" />
                  <div>
                    <Nav.Link href={`#/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                      className="wd-assignment-link fw-bold">{assignment._id}</Nav.Link>
                    <span className="text-danger">Multiple Modules </span> |
                    <span className="fw-bold"> Not available until May 6 at 12:00am </span> |<br />
                    <span className="fw-bold"> Due </span> May 13 at 11:59pm | 100pts
                  </div>
                </div>
                <div>
                  <LessonControlButtons />
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
