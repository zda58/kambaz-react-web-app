export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments"
        id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button> </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <a href="#/Kambaz/Courses/1234/Assignments/123"
            className="wd-assignment-link" >
            A1 - ENV + HTML
          </a>
          <br />
          Multiple Modules | <b>Not available until</b> May 6 at 12:00am |
          <br />
          <b>Due</b> May 13 at 11:59pm | 100pts</li>
        <li className="wd-assignment-list-item">
          <a href="#/Kambaz/Courses/1234/Assignments/123"
            className="wd-assignment-link" >
            A2 - CSS + BOOTSTRAP
          </a>
          <br />
          Multiple Modules | <b>Not available until</b> May 13 at 12:00am |
          <br />
          <b>Due</b> May 20 at 11:59pm | 100pts
        </li>
        <li className="wd-assignment-list-item">
          <a href="#/Kambaz/Courses/1234/Assignments/123"
            className="wd-assignment-link" >
            A3 - JAVASCRIPT + REACT
          </a>
          <br />
          Multiple Modules | <b>Not available until</b> May 20 at 12:00am |
          <br />
          <b>Due</b> May 27 at 11:59pm | 100pts
        </li>
      </ul>
      <h3 id="wd-assignments-title">
        QUIZZES 10% of Total <button>+</button> </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <a href="#/Kambaz/Courses/1234/Assignments/123"
            className="wd-assignment-link" >
            Q1 - HTML
          </a>
          <br />
          Multiple Modules | <b>Not available until</b> May 13 at 12:00am |
          <br />
          <b>Due</b> May 13 at 11:59pm | 29pts</li>
        <li className="wd-assignment-list-item">
          <a href="#/Kambaz/Courses/1234/Assignments/123"
            className="wd-assignment-link" >
            Q2 - CSS
          </a>
          <br />
          Multiple Modules | <b>Not available until</b> May 15 at 12:00am |
          <br />
          <b>Due</b> May 20 at 11:59pm | 23pts
        </li>
        <li className="wd-assignment-list-item">
          <a href="#/Kambaz/Courses/1234/Assignments/123"
            className="wd-assignment-link" >
            Q3 - CSS
          </a>
          <br />
          Multiple Modules | <b>Not available until</b> May 20 at 12:00am |
          <br />
          <b>Due</b> May 26 at 11:59pm | 32pts
        </li>
      </ul>
      <h3 id="wd-assignments-title">
        EXAMS 20% of Total <button>+</button> </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <a href="#/Kambaz/Courses/1234/Assignments/123"
            className="wd-assignment-link" >
            X1 - A1-A3
          </a>
          <br />
          Multiple Modules | <b>Not available until</b> May 29 at 12:00am |
          <br />
          <b>Due</b> Jun 4 at 11:59pm | 100pts</li>
        <li className="wd-assignment-list-item">
          <a href="#/Kambaz/Courses/1234/Assignments/123"
            className="wd-assignment-link" >
            X2 - A4-A6
          </a>
          <br />
          Multiple Modules | <b>Not available until</b> Jun 19 at 12:00am |
          <br />
          <b>Due</b> Jun 25 at 11:59pm | 100pts
        </li>
      </ul>
      <h3 id="wd-assignments-title">
        PROJECT 30% of Total <button>+</button> </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <a href="#/Kambaz/Courses/1234/Assignments/123"
            className="wd-assignment-link" >
            Final Project
          </a>
          <br />
          Multiple Modules
          <br />
          <b>Due</b> Jun 22 at 11:59pm | 100pts</li>
      </ul>
    </div>
  );
}
