import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { deleteModun, getModuns } from "../action";

function ListModunPage() {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const moduns = useSelector((state) => state.modun.moduns);
  // eslint-disable-next-line no-unused-vars
  const handleDelete = (id) => {
    deleteModun(dispatch, id);
  };

  useEffect(() => {
    getModuns(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Describe</th>
          <th>Language</th>
          <th>CreateAt</th>
          <th colSpan={2}>Action</th>
        </tr>
      </thead>
      <tbody>
        {moduns.map((modun) => {
          return (
            <tr>
              <td>{modun._id}</td>
              <td>{modun.name}</td>
              <td>{modun.describe}</td>
              {console.log(modun.language)}
              <td>{modun.language === undefined ? "undefined" : modun.language.name}</td>
              <td>{modun.createAt}</td>
              <td>
                <Link to={`/admin/modun/edit/${modun._id}`}>Edit</Link>
              </td>
              <td>
                <Button
                  onClick={(e) => {
                    handleDelete(modun._id);
                  }}
                  variant="link"
                >
                  Delete
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default ListModunPage;
