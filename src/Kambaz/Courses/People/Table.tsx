import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import * as userClient from "../../Account/client"

export default function PeopleTable() {
  const { cid } = useParams();
  const [people, setPeople] = useState<any[]>([])
  const [enrollments, setEnrollments] = useState<any[]>([]);
  const fetchEnrollments = async () => {
    try {
      const enrollments = await userClient.findMyEnrollments();
      setEnrollments(enrollments);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    setPeople([]);
    fetchEnrollments();
  }, []);
  return (
    <div id="wd-people-table">
      <Table striped>
        <thead>
          <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
        </thead>
        <tbody>
          {people
            .filter((person) =>
              enrollments.some((enrollment) => enrollment.user === person._id && enrollment.course === cid)
            )
            .map((user: any) => (
              <tr key={user._id}>
                <td className="wd-full-name text-nowrap">
                  <FaUserCircle className="me-2 fs-1 text-secondary" />
                  <span className="wd-first-name">{user.firstName}</span>
                  <span className="wd-last-name">{user.lastName}</span>
                </td>
                <td className="wd-login-id">{user.loginId}</td>
                <td className="wd-section">{user.section}</td>
                <td className="wd-role">{user.role}</td>
                <td className="wd-last-activity">{user.lastActivity}</td>
                <td className="wd-total-activity">{user.totalActivity}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>);
}