import { createBrowserRouter } from "react-router-dom";
import CreateLanguageModulePage from "./language-module/pages/create";
import ListLanguageModulePage from "./language-module/pages/list";
import UpdateLanguageModulePage from "./language-module/pages/update";
import MainLayout from "./layout/main";
import PublicLayout from "./layout/public-layout";
import ShowModunLayout from "./layout/show-layout";
import CreateModunPage from "./module/pages/create";
import ListModunPage from "./module/pages/list";
import ShowModunsPage from "./module/pages/public/show";
import UpdateModunPage from "./module/pages/update";
import IndexPage from "./public/pages";

export default createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [{ index: true, element: <IndexPage /> }],
  },
  {
    path: "/p",
    element: <ShowModunLayout />,
    children: [
      {
        path: ":id",
        element: <ShowModunsPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <MainLayout />,
    children: [
      {
        path: "languages",
        element: <ListLanguageModulePage />,
      },
      {
        path: "language/create",
        element: <CreateLanguageModulePage />,
      },
      {
        path: "language/edit/:id",
        element: <UpdateLanguageModulePage />,
      },
      {
        path: "moduns",
        element: <ListModunPage />,
      },
      {
        path: "modun/create",
        element: <CreateModunPage />,
      },
      {
        path: "modun/edit/:id",
        element: <UpdateModunPage />,
      },
    ],
  },
]);
