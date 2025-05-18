import { ListGroup } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";

export default function Modules() {
  return (
    <div>
      <ModulesControls /><br /><br /><br /><br />
      <ListGroup className="rounded-0" id="wd-modules">
        <ListGroup.Item className="wd-module p-0 mb-5 sf-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />Week 1<ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />Learning Objectives<LessonControlButtons />
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />Introduction to the Course<LessonControlButtons />
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />Learn what is Web Development<LessonControlButtons />
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />Lesson 1<LessonControlButtons />
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />Lesson 2<LessonControlButtons />
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
        <ListGroup.Item className="wd-module p-0 mb-5 sf-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
          <BsGripVertical className="me-2 fs-3" />Week 2<ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroup.Item className="wd-lesson p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />Introduction to CSS<LessonControlButtons />
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />Styling colors and dimensions<LessonControlButtons />
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />Lesson 1<LessonControlButtons />
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />Lesson 2<LessonControlButtons />
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
