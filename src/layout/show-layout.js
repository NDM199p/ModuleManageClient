import { Badge, Button, Col, Container, Form, ListGroup, Row } from "react-bootstrap";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import {} from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTags } from "../tag/action";
import { getLanguages } from "../language-module/action";
import { getModuns } from "../module/action";

function ShowModunLayout() {
  const dispatch = useDispatch();
  const tags = useSelector((state) => state.tag.tags);
  const languages = useSelector((state) => state.language.languages);
  const [input, setInput] = useState("");
  const [searchOptions, setSearchOptions] = useState({ tags: [] });
  const location = useLocation();

  useEffect(() => {
    getTags(dispatch);
    getModuns(dispatch);
    getLanguages(dispatch);
    console.log(location);
    console.log(window.history);
  }, []);

  return (
    <Container>
      <Row className="w-100">
        <Col className="col-3">
          <p>
            <a
              onClick={() => {
                console.log(window.history);
                window.history.back();
              }}
            >
              revert
            </a>
          </p>
        </Col>
        <Col>
          <Outlet context={[searchOptions, setSearchOptions]} />
        </Col>
      </Row>
    </Container>
  );
}

export default ShowModunLayout;
