import { BsChatLeftText } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";
import { SlSettings } from "react-icons/sl";

const TopNavBar = () => {
  return (
    <nav className="sticky top-0 z-40 flex flex-row flex-wrap items-center justify-between bg-main-v3 p-2 backdrop-blur-xl px-8 w-full">
      <p className="main-v6 font-secondary md:text-4xl text-3xl leading-loose font-medium tracking-wide text-center">
        {useLocation().pathname}
      </p>
      <div className="flex gap-4 items-center text-xl font-bold">
        <BsChatLeftText />
        <IoIosNotificationsOutline />
        <SlSettings />
        <div className="w-12 h-12">
          <img
            src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
            alt=""
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;
