import { MdOutlineDashboardCustomize } from "react-icons/md";
import DashboardLayout from "../../Layouts/DashboardLayout";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import { CgProfile } from "react-icons/cg";
import DashProfile from "../../Pages/Dashboard/DashProfile";
import Applications from "../../Pages/Dashboard/SubMenu/Dashboard/Applications";
import DashStatics from "../../Pages/Dashboard/SubMenu/Dashboard/DashStatics";

const DashboardRoute = [
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        name: "Dashboard",
        path: "home",
        element: <Dashboard />,
        icon: <MdOutlineDashboardCustomize className="icons" />,
        children: [
          {
            name: "home",
            path: "home",
            element: <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi fugiat saepe cupiditate minima eligendi? Nobis aspernatur iste porro, exercitationem facilis asperiores quidem cupiditate quasi non quisquam mollitia eveniet doloremque odit.</p>,
          },
          {
            name: "Application",
            path: "applications",
            element: <Applications />,
          },
          {
            name: "Statics",
            path: "statics",
            element: <DashStatics />,
          },
        ],
      },
      {
        name: "Profile",
        path: "profile",
        element: <DashProfile />,
        icon: <CgProfile className="icons" />,
      },
    ],
  },
];

export default DashboardRoute;
