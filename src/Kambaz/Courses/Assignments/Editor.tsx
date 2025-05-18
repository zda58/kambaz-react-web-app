import { Col, Form, Row } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <Form>
        <Form.Group className="mb-3" controlId="wd-name">
          <Form.Label className="fw-bold">Assignment Name</Form.Label>
          <Form.Control defaultValue="A1 - ENV + HTML" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="wd-description">
          <Form.Control
            as="textarea"
            style={{ height: '150px' }}
            defaultValue="The assignment is available online Submit a link to the landing page of
            awfeeaw
            fww
            fafefeafwefefewaaefwafewnaefwuaefwuafeulefwlunfneluw"
          />
        </Form.Group>

        <Row className="mb-3 align-items-center">
          <Col xs={4} className="text-end pe-2">
            <Form.Label htmlFor="wd-points" className="mb-0">Points</Form.Label>
          </Col>
          <Col xs={8} md={6}>
            <Form.Group controlId="wd-points" className="mb-0">
              <Form.Control type="number" defaultValue={100} />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3 align-items-center">
          <Col xs={4} className="text-end pe-2">
            <Form.Label htmlFor="wd-group" className="mb-0">Assignment Group</Form.Label>
          </Col>
          <Col xs={8} md={6}>
            <Form.Group controlId="wd-group" className="mb-0">
              <Form.Select defaultValue="ASSIGNMENTS">
                <option value="ASSIGNMENTS">Assignments</option>
                <option value="QUIZES">Quizzes</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3 align-items-center">
          <Col xs={4} className="text-end pe-2">
            <Form.Label htmlFor="wd-display-grade-as" className="mb-0">Display Grade as</Form.Label>
          </Col>
          <Col xs={8} md={6}>
            <Form.Group controlId="wd-display-grade-as" className="mb-0">
              <Form.Select defaultValue="PERCENTAGE">
                <option value="PERCENTAGE">Percentage</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3 align-items-center">
          <Col xs={4} className="text-end pe-2">
            <Form.Label htmlFor="wd-submission-type" className="mb-0">Submission type</Form.Label>
          </Col>
          <Col xs={8} md={6} className="border pb-2 pt-2">
            <Form.Group controlId="wd-submission-type" className="mb-0">
              <Form.Select defaultValue="ONLINE">
                <option value="ONLINE">Online</option>
              </Form.Select>
              
            </Form.Group>
          </Col>
        </Row>

        <table>
          <tr>
            <td align="center" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select defaultValue="ONLINE" id="wd-submission-type">
                <option value="ONLINE">Online</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="left" valign="top" style={{ paddingLeft: '0px' }}>
              Online Entry Options<br />
              <input type="checkbox" name="check-genre" id="wd-text-entry" />
              <label htmlFor="wd-text-entry">Text Entry</label><br />

              <input type="checkbox" name="check-genre" id="wd-website-url" />
              <label htmlFor="wd-website-url">Website URL</label><br />

              <input type="checkbox" name="check-genre" id="wd-media-recordings" />
              <label htmlFor="wd-media-recordings">Media Recordings</label><br />

              <input type="checkbox" name="check-genre" id="wd-student-annotation" />
              <label htmlFor="wd-student-annotation">Student Annotation</label><br />

              <input type="checkbox" name="check-genre" id="wd-file-upload" />
              <label htmlFor="wd-file-upload">File Uploads</label>
            </td>
          </tr>
          <tr>
            <td align="center" valign="top">
              <label htmlFor="wd-assign-to">Assign To</label>
            </td>
            <td>
              <input id="wd-assign-to" defaultValue={'Everyone'} />
            </td>
          </tr>
          <tr>
            <td align="center" valign="top">
              <label htmlFor="wd-due-date">Due Date</label>
            </td>
            <td>
              <input type="date"
                defaultValue="2000-01-21"
                id="wd-due-date" /><br />
            </td>
          </tr>
          <tr>
            <td align="center" valign="top">
              <label htmlFor="wd-available-from">Available From</label>
            </td>
            <td>
              <input type="date"
                defaultValue="2000-01-21"
                id="wd-available-from" /><br />
            </td>
            <td align="center" valign="top">
              <label htmlFor="wd-available-until">Until</label>
            </td>
            <td>
              <input type="date"
                defaultValue="2000-01-21"
                id="wd-available-until" /><br />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <button type="button"
                id="wd-cancel"> Cancel</button>
              <button type="button"
                id="wd-save"> Save</button>
            </td>
          </tr>
        </table>
      </Form>
    </div>
  );
}
