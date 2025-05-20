import { InputGroup, Button, Form } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function AssignmentsControl() {
  return (
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
  );
}