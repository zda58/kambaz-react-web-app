import CourseNavigation from "./Navigation";
import { Navigate, Route, Routes } from "react-router";
import Home from "./Home"
import Modules from "./Modules"
import Assignments from "./Assignments"
import AssignmentEditor from "./Assignments/Editor";
import PeopleTable from "./People/Table";

export default function Courses() {
  return (
    <div id="wd-courses">
      <h2>Course 1234</h2>
      <div className="d-flex">
        <CourseNavigation />
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Piazza" element={<h2>Piazza</h2>} />
            <Route path="Zoom" element={<h2>Zoom</h2>} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="Quizzes" element={<h2>Quizzes</h2>} />
            <Route path="Grades" element={<h2>Grades</h2>} />
            <Route path="People" element={<PeopleTable />} />
          </Routes>
        </div></div>
    </div>
  );
}
