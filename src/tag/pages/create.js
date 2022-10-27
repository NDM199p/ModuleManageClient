import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { addLanguage } from "../action";
import { useDispatch } from "react-redux";

function CreateLanguageModulePage() {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // eslint-disable-next-line no-unused-vars
  const handleSubmit = (e) => {
    e.preventDefault();
    addLanguage(dispatch, inputs);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control name="name" type="text" onChange={handleChange} placeholder="Enter name" />
        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Describe</Form.Label>
        <Form.Control
          name="describe"
          type="text"
          onChange={handleChange}
          placeholder="Enter email"
        />
        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default CreateLanguageModulePage;
