import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getLanguages } from "../../../language-module/action";
import { getTags } from "../../../tag/action";
import { getModuns } from "../../action";
import "./show.css";

function ShowModunsPage() {
  const { id } = useParams();
  const modun = useSelector((state) => state.modun.moduns.find((obj) => obj._id == id));
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    modun && setLoading(true);
  }, [modun]);

  return loading ? (
    <div>
      <h1>{modun.name}</h1>
      <h2>Describe</h2>
      <p>{modun.describe}</p>
      <h2>Content</h2>
      {<div className="ck-contentDocDoc" dangerouslySetInnerHTML={{ __html: modun.content }} />}
    </div>
  ) : (
    ""
  );
}

export default ShowModunsPage;
