export default function Modules() {
  return (
    <div>
      <button>Collapse</button>
      <button>View Progress</button>
      <select id="wd-module-header-action">
        <option value="PUBLISH_ALL">Publish All</option>
      </select>
      <button>+ Module</button>
      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">Learn what is Web Development</li>
              </ul>
            </li>
            <li className="wd-reading">
              <span className="wd-title">READING</span>
              <ul className="wd-content">
                <li className="wd-content-item">MERN Chapter 1 - Building React User Interfaces</li>
              </ul>
            </li>
            <li className="wd-slides">
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to Web Development</li>
                <li className="wd-content-item">Creating an HTTP server with Node.js</li>
                <li className="wd-content-item">Creating a React Application</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 1, Lecture 2 - Formatting User Interfaces with HTML</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Learn how to create user interfaces with HTML</li>
                <li className="wd-content-item">Deploy the assignment to Netlify</li>
              </ul>
            </li>
            <li className="wd-reading">
              <span className="wd-title">READING</span>
              <ul className="wd-content">
                <li className="wd-content-item">MERN Chapter 1 - Building React User Interfaces</li>
              </ul>
            </li>
            <li className="wd-slides">
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to HTML and the DOM</li>
                <li className="wd-content-item">Formatting Web content with Headings</li>
                <li className="wd-content-item">Formatting content with lists and tables</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 2, Lecture 1 - Styling Web Pages with CSS</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to CSS</li>
                <li className="wd-content-item">Styling colors and dimensions</li>
              </ul>
            </li>
            <li className="wd-reading">
              <span className="wd-title">READING</span>
              <ul className="wd-content">
                <li className="wd-content-item">MERN Chapter 2 - Styling Web Pages with CSS</li>
              </ul>
            </li>
            <li className="wd-slides">
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to Cascading Style Sheets</li>
                <li className="wd-content-item">Styling with Colors</li>
                <li className="wd-content-item">Rotating content and Gradient Background</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
