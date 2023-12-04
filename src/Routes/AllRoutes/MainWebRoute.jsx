import MainWebLayout from "../../Layouts/MainWebLayout";
import AllTemplates from "../../Pages/MainWeb/AllTemplates";
import CreateResume from "../../Pages/MainWeb/CreateResume";
import EditResume from "../../Pages/MainWeb/EditResume";
import Homepage from "../../Pages/MainWeb/HomePage";
import TemplatePage from "../../Pages/MainWeb/TemplatePage";

const MainWebRoute = [
  {
    path: "/",
    element: <MainWebLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/home",
        element: <Homepage />,
      },
      {
        path: "/create-resume",
        element: <CreateResume />,
      },
      {
        path: "/template",
        element: <TemplatePage />,
        children: [
          {
            path: "",
            element: <AllTemplates />,
          },
        ],
      },
    ],
  },
  {
    path: "/edit-resume",
    element: <EditResume />,
  },
];

export default MainWebRoute;
