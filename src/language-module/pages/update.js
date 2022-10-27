import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateLanguage } from "../action";

function UpdateLanguageModulePage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const language = useSelector((state) =>
    // eslint-disable-next-line eqeqeq
    state.language.languages.find((language) => language._id == id)
  );
  console.log(language);
  // eslint-disable-next-line no-unused-vars
  const [inputs, setInputs] = useState({ name: language.name, describe: language.describe });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // eslint-disable-next-line no-unused-vars
  const handleSubmit = (e) => {
    e.preventDefault();
    updateLanguage(dispatch, id, inputs);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          value={inputs.name}
          name="name"
          type="text"
          onChange={handleChange}
          placeholder="Enter name"
        />
        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Describe</Form.Label>
        <Form.Control
          value={inputs.describe}
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

export default UpdateLanguageModulePage;
