import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { deleteLanguage, getLanguages } from "../action";

function ListLanguageModulePage() {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const languages = useSelector((state) => state.language.languages);
  // eslint-disable-next-line no-unused-vars
  const handleDelete = (id) => {
    deleteLanguage(dispatch, id);
  };

  useEffect(() => {
    getLanguages(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Describe</th>
          <th>CreateAt</th>
          <th colSpan={2}>Action</th>
        </tr>
      </thead>
      <tbody>
        {languages.map((language) => {
          return (
            <tr>
              <td>{language._id}</td>
              <td>{language.name}</td>
              <td>{language.describe}</td>
              <td>{language.createAt}</td>
              <td>
                <Link to={`/admin/language/edit/${language._id}`}>Edit</Link>
              </td>
              <td>
                <Button
                  onClick={(e) => {
                    handleDelete(language._id);
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

export default ListLanguageModulePage;
