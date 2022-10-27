/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Badge, Card, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useOutletContext } from "react-router-dom";
import { getModuns } from "../../module/action";

function IndexPage() {
  const dispatch = useDispatch();
  const moduns = useSelector((state) => state.modun.moduns);
  // eslint-disable-next-line no-unused-vars
  const [searchOptions, setSearchOptions] = useOutletContext();

  useEffect(() => {
    getModuns(dispatch);
  }, []);

  // find moduns by tags array [].every()
  const findModunsByTags = () => {
    // create findresult = []
    var findResult = moduns;
    // loop search tags array
    // begin for searchOptions.tags
    for (let i = 0; i < searchOptions.tags.length; i++) {
      const tagObj = searchOptions.tags[i];
      //begin for moduns
      let newFindResult = findResult.filter((modun) => {
        // conver modun tags to string and ss
        const modunTagObjectToArrayName = (modun) => {
          let arrTemp = [];
          for (let j = 0; j < modun.tags.length; j++) {
            const element = modun.tags[j];
            arrTemp.push(element.name);
          }
          return arrTemp;
        };
        let tagsText = modunTagObjectToArrayName(modun).toString();
        return tagsText.includes(tagObj.name);
      });
      // end for searchOptions.tags
      findResult = newFindResult;
    }
    return findResult;
  };

  const tagsComponent = (tags) =>
    tags.map((val) => (
      <Badge style={{ margin: "0 2px" }} bg="secondary">
        {val.name} x
      </Badge>
    ));

  return (
    <ListGroup>
      {findModunsByTags().map((obj) => (
        <ListGroup.Item style={{ border: "none" }}>
          <Card style={{ width: "100%" }}>
            <Card.Body>
              <Card.Title>
                <Link to={"/p/" + obj._id}>{obj.name}</Link>
              </Card.Title>
              {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
              <Card.Text>{obj.describe}</Card.Text>
              <div className="w-100 mb-2">{tagsComponent(obj.tags)}</div>
              <div>
                <small>
                  <em>Create At: {obj.createAt}</em>
                </small>
              </div>
            </Card.Body>
          </Card>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default IndexPage;
