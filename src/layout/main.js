import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { getLanguages } from "../language-module/action";

function MainLayout() {
  const dispatch = useDispatch();
  useEffect(() => {
    getLanguages(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Outlet />;
}

export default MainLayout;
