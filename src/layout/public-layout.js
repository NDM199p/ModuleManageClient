import { Badge, Col, Container, Form, ListGroup, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import {} from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTags } from "../tag/action";
import { getLanguages } from "../language-module/action";

function PublicLayout() {
  const dispatch = useDispatch();
  const tags = useSelector((state) => state.tag.tags);
  const languages = useSelector((state) => state.language.languages);
  const [input, setInput] = useState("");
  const [searchOptions, setSearchOptions] = useState({ tags: [] });

  useEffect(() => {
    getTags(dispatch);
    getLanguages(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterTags = () => {
    const results = tags.filter((tag) => tag.name.includes(input, 0));
    return results;
  };

  const addTagToSearchOptions = (id) => {
    // find tag id
    const tagObject = tags.find((tag) => tag._id === id);
    // add to sreach options
    setSearchOptions({ tags: [...searchOptions.tags, tagObject] });
  };

  const removeTagFromSearchOptions = (id) => {
    setSearchOptions({ tags: searchOptions.tags.filter((obj) => obj._id !== id) });
  };

  const tagElements = filterTags().map((val, index) => (
    <Badge
      style={{ margin: "0 2px" }}
      onClick={() => addTagToSearchOptions(val._id)}
      bg="secondary"
    >
      {val.name} x
    </Badge>
  ));

  const languageListItems = languages.map((language) => (
    <ListGroup.Item key={language._id} style={{ border: "none" }}>
      <Link to={`/${language._id}`}>{language.name}</Link>
    </ListGroup.Item>
  ));

  const tagSearchElements = searchOptions.tags.map((val, index) => (
    <Badge
      style={{ margin: "0 2px" }}
      bg="secondary"
      onClick={() => {
        removeTagFromSearchOptions(val._id);
      }}
    >
      {val.name} x
    </Badge>
  ));

  return (
    <Container>
      <Row className="w-100">
        <Col className="col-3">
          <h3>Languages</h3>
          <hr />
          <ListGroup>
            <ListGroup.Item key={"all"} style={{ border: "none" }}>
              <Link to={"/"}>All language</Link>
            </ListGroup.Item>
            {languageListItems}
          </ListGroup>

          <br />
          <h3>Tags</h3>
          <hr />
          <p>Finds:</p>
          <div className="w-100 border rounded mb-2 p-2">{tagSearchElements}</div>
          <p>Search input:</p>
          <div>
            <Form.Control
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
              type="text"
              placeholder="Normal text"
            />
          </div>
          <p>Search results:</p>
          <div className="w-100 border rounded mb-2 p-2 ">{tagElements}</div>
        </Col>
        <Col>
          <Outlet context={[searchOptions, setSearchOptions]} />
        </Col>
      </Row>
    </Container>
  );
}

export default PublicLayout;
