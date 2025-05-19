import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <Form.Control id="wd-username" placeholder="username" className="mb-2"/>
      <Form.Control id="wd-password" placeholder="password" type="password" className="mb-2"/>
      <Link id="wd-signin-btn" to="/Kambaz/Account/Profile" className="btn btn-primary w-100 mb-2">Sign up</Link>
      <Link id="wd-signup-link" to="/Kambaz/Account/Signin">Signin</Link>
    </div>
  );
}
