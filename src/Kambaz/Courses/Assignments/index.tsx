import { Button, Form, InputGroup, ListGroup, Nav } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { FaMagnifyingGlass, FaPlus } from "react-icons/fa6";
import LessonControlButtons from "../Modules/LessonControlButtons";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import { LuNotebookText } from "react-icons/lu";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <InputGroup className="w-25">
          <InputGroup.Text>
            <FaMagnifyingGlass />
          </InputGroup.Text>
          <Form.Control id="wd-search-assignment" placeholder="Search..." />
        </InputGroup>
        <span>
          <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-module-btn">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Assignment
          </Button>
          <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-add-module-btn">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Group
          </Button>
        </span>
      </div>
      <ListGroup className="rounded-0" id="wd-modules">
        <ListGroup.Item className="wd-module p-0 mb-5 sf-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />ASSIGNMENTS<ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroup.Item className="wd-lesson d-flex justify-content-between align-items-center p-3 ps-1">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <LuNotebookText color="green" className="me-2 fs-3" />
                <div>
                  <Nav.Link href="#/Kambaz/Courses/1234/Assignments/123"
                    className="wd-assignment-link fw-bold">A1</Nav.Link>
                  <span className="text-danger">Multiple Modules </span> |
                  <span className="fw-bold"> Not available until May 6 at 12:00am </span> |<br />
                  <span className="fw-bold"> Due </span> May 13 at 11:59pm | 100pts
                </div>
              </div>
              <div>
                <LessonControlButtons />
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson d-flex justify-content-between align-items-center p-3 ps-1">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <LuNotebookText color="green" className="me-2 fs-3" />
                <div>
                  <Nav.Link href="#/Kambaz/Courses/1234/Assignments/123"
                    className="wd-assignment-link fw-bold">A2</Nav.Link>
                  <span className="text-danger">Multiple Modules </span> |
                  <span className="fw-bold"> Not available until May 13 at 12:00am </span> |<br />
                  <span className="fw-bold"> Due </span> May 20 at 11:59pm | 100pts
                </div>
              </div>
              <div>
                <LessonControlButtons />
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson d-flex justify-content-between align-items-center p-3 ps-1">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <LuNotebookText color="green" className="me-2 fs-3" />
                <div>
                  <Nav.Link href="#/Kambaz/Courses/1234/Assignments/123"
                    className="wd-assignment-link fw-bold">A3</Nav.Link>
                  <span className="text-danger">Multiple Modules </span> |
                  <span className="fw-bold"> Not available until May 20 at 12:00am </span> |<br />
                  <span className="fw-bold"> Due </span> May 27 at 11:59pm | 100pts
                </div>
              </div>
              <div>
                <LessonControlButtons />
              </div>
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
        <ListGroup.Item className="wd-module p-0 mb-5 sf-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />QUIZZES<ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroup.Item className="wd-lesson d-flex justify-content-between align-items-center p-3 ps-1">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <LuNotebookText color="green" className="me-2 fs-3" />
                <div>
                  <Nav.Link href="#/Kambaz/Courses/1234/Assignments/123"
                    className="wd-assignment-link fw-bold">Q1</Nav.Link>
                  <span className="text-danger">Multiple Modules </span> |
                  <span className="fw-bold"> Not available until May 13 at 12:00am </span> |<br />
                  <span className="fw-bold"> Due </span> May 13 at 11:59pm | 29pts
                </div>
              </div>
              <div>
                <LessonControlButtons />
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson d-flex justify-content-between align-items-center p-3 ps-1">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <LuNotebookText color="green" className="me-2 fs-3" />
                <div>
                  <Nav.Link href="#/Kambaz/Courses/1234/Assignments/123"
                    className="wd-assignment-link fw-bold">Q2</Nav.Link>
                  <span className="text-danger">Multiple Modules </span> |
                  <span className="fw-bold"> Not available until May 15 at 12:00am </span> |<br />
                  <span className="fw-bold"> Due </span> May 20 at 11:59pm | 23pts
                </div>
              </div>
              <div>
                <LessonControlButtons />
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson d-flex justify-content-between align-items-center p-3 ps-1">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <LuNotebookText color="green" className="me-2 fs-3" />
                <div>
                  <Nav.Link href="#/Kambaz/Courses/1234/Assignments/123"
                    className="wd-assignment-link fw-bold">Q3</Nav.Link>
                  <span className="text-danger">Multiple Modules </span> |
                  <span className="fw-bold"> Not available until May 20 at 12:00am </span> |<br />
                  <span className="fw-bold"> Due </span> May 26 at 11:59pm | 32pts
                </div>
              </div>
              <div>
                <LessonControlButtons />
              </div>
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
        <ListGroup.Item className="wd-module p-0 mb-5 sf-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />EXAMS<ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroup.Item className="wd-lesson d-flex justify-content-between align-items-center p-3 ps-1">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <LuNotebookText color="green" className="me-2 fs-3" />
                <div>
                  <Nav.Link href="#/Kambaz/Courses/1234/Assignments/123"
                    className="wd-assignment-link fw-bold">X1</Nav.Link>
                  <span className="text-danger">Multiple Modules </span> |
                  <span className="fw-bold"> Not available until May 29 at 12:00am </span> |<br />
                  <span className="fw-bold"> Due </span> Jun 4 at 11:59pm | 100pts
                </div>
              </div>
              <div>
                <LessonControlButtons />
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson d-flex justify-content-between align-items-center p-3 ps-1">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <LuNotebookText color="green" className="me-2 fs-3" />
                <div>
                  <Nav.Link href="#/Kambaz/Courses/1234/Assignments/123"
                    className="wd-assignment-link fw-bold">X2</Nav.Link>
                  <span className="text-danger">Multiple Modules </span> |
                  <span className="fw-bold"> Not available until Jun 19 at 12:00am </span> |<br />
                  <span className="fw-bold"> Due </span> Jun 25 at 11:59pm | 100pts
                </div>
              </div>
              <div>
                <LessonControlButtons />
              </div>
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
        <ListGroup.Item className="wd-module p-0 mb-5 sf-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />Final Project<ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroup.Item className="wd-lesson d-flex justify-content-between align-items-center p-3 ps-1">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <LuNotebookText color="green" className="me-2 fs-3" />
                <div>
                  <Nav.Link href="#/Kambaz/Courses/1234/Assignments/123"
                    className="wd-assignment-link fw-bold">X1</Nav.Link>
                  <span className="text-danger">Multiple Modules </span> <br />
                  <span className="fw-bold"> Due </span> Jun 22 at 11:59pm | 100pts
                </div>
              </div>
              <div>
                <LessonControlButtons />
              </div>
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
