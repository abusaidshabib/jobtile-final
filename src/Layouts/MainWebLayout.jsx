import { Outlet } from "react-router-dom";
import Navbar from "../Pages/MainWeb/Shared/Navbar";
import Footer from "../Pages/MainWeb/Shared/Footer";
import EventNav from "../Pages/MainWeb/Shared/EventNav";

const MainWebLayout = () => {
  return (
    <div className="font-primary bg-main-v3">
      <div className="absolute top-0 w-full z-10 ">
        <EventNav />
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainWebLayout;
