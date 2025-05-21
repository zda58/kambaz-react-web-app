import { ListGroup, Nav } from "react-bootstrap";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import { LuNotebookText } from "react-icons/lu";
import AssignmentsControl from "./AssignmentsControl";
import * as db from "../../Database"
import { useParams } from "react-router";
import { FaTrash } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";

const formatDate = (date: Date) => {

  const month = date.toLocaleString('default', { month: 'long' });
  const day = date.getDate();

  let hours = date.getHours();
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${month} ${day} at ${hours}:${minutes}${ampm}`;
};

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;
  return (
    <div id="wd-assignments">
      <AssignmentsControl />
      <ListGroup className="rounded-0" id="wd-modules">
        <ListGroup.Item className="wd-module p-0 mb-5 sf-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />ASSIGNMENTS
            <div className="float-end">
              <GreenCheckmark />
              <BsPlus />
              <IoEllipsisVertical className="fs-4" />
            </div>
          </div>
          <ListGroup className="wd-lessons rounded-0">
            {assignments.filter((assignment: any) => assignment.course === cid).map((assignment: any) => {
              const fromDate = new Date(assignment.from);
              const dueDate = new Date(assignment.due);
              return (
                <ListGroup.Item className="wd-lesson d-flex justify-content-between align-items-center p-3 ps-1">
                  <div className="d-flex align-items-center">
                    <BsGripVertical className="me-2 fs-3" />
                    <LuNotebookText color="green" className="me-2 fs-3" />
                    <div>
                      <Nav.Link href={`#/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                        className="wd-assignment-link fw-bold">{assignment._id}</Nav.Link>
                      <span className="text-danger">Multiple Modules </span> |
                      <span className="fw-bold"> Not available until {formatDate(fromDate)} </span> |
                      <br />
                      <span className="fw-bold"> Due </span> {formatDate(dueDate)} | {assignment.points}pts
                    </div>
                  </div>
                  <div>
                    <LessonControlButtons />
                  </div>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
