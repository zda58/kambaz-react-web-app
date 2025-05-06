import { Link } from "react-router";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
          <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
          <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
          <div id="wd-dashboard-courses">
            <div className="wd-dashboard-course">
              <Link to="/Kambaz/Courses/1234/Home"
                    className="wd-dashboard-course-link" >
                <img src="/vite.svg" width={200} />
                <div>
                  <h5> CS1234 React JS </h5>
                  <p className="wd-dashboard-course-title">
                    Full Stack software developer  </p>
                  <button> Go </button>
                </div>
              </Link>
            </div>
            <div className="wd-dashboard-course">
            <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
                <img src="/vite.svg" width={200} />
                <div>
                  <h5> CS2345 OOD </h5>
                  <p className="wd-dashboard-course-title">
                    Full Stack software developer  </p>
                  <button> Go </button>
                </div>
              </Link>
            </div>
            <div className="wd-dashboard-course">
            <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
                <img src="/vite.svg" width={200} />
                <div>
                  <h5> CS3333 Systems </h5>
                  <p className="wd-dashboard-course-title">
                    Full Stack software developer  </p>
                  <button> Go </button>
                </div>
            </Link>
            </div>
            <div className="wd-dashboard-course">
            <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
                <img src="/vite.svg" width={200} />
                <div>
                  <h5> CS3500 Networking </h5>
                  <p className="wd-dashboard-course-title">
                    Full Stack software developer  </p>
                  <button> Go </button>
                </div>
              </Link>
            </div>
            <div className="wd-dashboard-course">
            <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
                <img src="/vite.svg" width={200} />
                <div>
                  <h5> CS3700 Distributed Systems </h5>
                  <p className="wd-dashboard-course-title">
                    Full Stack software developer  </p>
                  <button> Go </button>
                </div>
              </Link>
            </div>
            <div className="wd-dashboard-course">
            <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
                <img src="/vite.svg" width={200} />
                <div>
                  <h5> CS4200 Compilers </h5>
                  <p className="wd-dashboard-course-title">
                    Full Stack software developer  </p>
                  <button> Go </button>
                </div>
              </Link>
            </div>
            <div className="wd-dashboard-course">
            <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
                <img src="/vite.svg" width={200} />
                <div>
                  <h5> CS4500 Operating Systems </h5>
                  <p className="wd-dashboard-course-title">
                    Full Stack software developer  </p>
                  <button> Go </button>
                </div>
              </Link>
            </div>
          </div>
        </div>    
);}
