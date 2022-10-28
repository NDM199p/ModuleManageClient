import { useState } from "react";
import { Badge, Button, Col, Form, Row } from "react-bootstrap";
import { addModun } from "../action";
import { useDispatch, useSelector } from "react-redux";
import CustomEditor from "../components/custom-editor";

function CreateModunPage() {
  const dispatch = useDispatch();
  const languages = useSelector((state) => state.language.languages);
  // eslint-disable-next-line no-unused-vars
  const [inputs, setInputs] = useState({ tags: [] });
  const [tagInput, setTagInput] = useState("");

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // eslint-disable-next-line no-unused-vars
  const handleSubmit = (e) => {
    e.preventDefault();
    addModun(dispatch, inputs);
  };

  const removeTagsByIndex = (index) => {
    // eslint-disable-next-line eqeqeq
    const arr = [...inputs.tags];
    arr.splice(index, 1);
    setInputs((prev) => ({ ...prev, tags: arr }));
  };

  const handleContentChange = (event, editor) => {
    setInputs((prev) => ({ ...prev, content: editor.getData() }));
  };

  const selectLanguageOptions = languages.map((language) => (
    <option value={language._id}>{language.name}</option>
  ));

  const inputTagSelected = inputs.tags.map((tag, index) => (
    <Badge onClick={() => removeTagsByIndex(index)} bg="secondary">
      {tag.name} x
    </Badge>
  ));

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control name="name" type="text" onChange={handleChange} placeholder="Enter name" />
        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Language</Form.Label>
        <Form.Select name="language" onChange={handleChange} aria-label="Default select example">
          <option>Open this select menu</option>
          {selectLanguageOptions}
        </Form.Select>
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

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Content</Form.Label>
        <CustomEditor data={inputs.content ? inputs.content : ""} onChange={handleContentChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Tags</Form.Label>
        <div className="w-100 border rounded mb-2 p-2">{inputTagSelected}</div>
        <Row>
          <Col>
            <Form.Control
              name="content"
              type="text"
              value={tagInput}
              onChange={(e) => {
                setTagInput(e.target.value);
              }}
              placeholder="Enter email"
            />
          </Col>
          <Col>
            <Button
              onClick={() => {
                setInputs((prev) => ({ ...prev, tags: [...inputs.tags, { name: tagInput }] }));
                setTagInput("");
              }}
            >
              Add
            </Button>
          </Col>
        </Row>
        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default CreateModunPage;
