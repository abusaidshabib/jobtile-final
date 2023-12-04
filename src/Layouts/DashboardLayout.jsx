import { Outlet } from "react-router-dom";
import SideBar from "../Pages/Dashboard/Shared/SideBar";
import TopNavBar from "../Pages/Dashboard/Shared/TopNavBar";

const DashboardLayout = () => {
  return (
    <div className="flex bg-main-v5 overflow-hidden w-screen">
      <div>
        <SideBar />
      </div>
      <div className="flex-grow">
        <TopNavBar />
        <div className="p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

/***
 top
 
 */
