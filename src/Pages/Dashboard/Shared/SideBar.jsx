import Logo from "../../../Components/Important/Logo";
import { GiNinjaHeroicStance } from "react-icons/gi";
import "../../../CSS/Dashboard/SideBar.css";
import { NavLink } from "react-router-dom";
import DashboardRoute from "../../../Routes/AllRoutes/DashboardRoute";
import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai";
import { GrFormSubtract } from "react-icons/gr";

const SideBar = () => {
  console.log(DashboardRoute[0].children[0]);
  return (
    <div className="main-sidebar sticky top-0 left-0 h-screen w-16 hover:w-64 z-50 transition-all delay-100 duration-500 bg-main-v3 p-3 border-r">
      <div className="flex items-center w-full">
        <GiNinjaHeroicStance className="text-5xl text-main-v1 text-center min-w-[50px]" />
        {/* <Logo css="text-main-v6 side-text" /> */}
      </div>
      <ul className="h-full overflow-hidden py-5 side-menu text-main-v6 font-medium">
        {DashboardRoute[0].children?.map((data, index) => (
          <li key={index}>
            <NavLink to={data?.path}>
              <p className="flex gap-2 items-center">
                {data?.icon}
                {data?.name}
              </p>
              <p className="pr-2">
                {/* {data?.children && <AiFillCaretRight className="text-lg" />} */}
                {data?.children && <AiFillCaretDown className="text-lg" />}
              </p>
            </NavLink>
            <ul className="">
              {data?.children?.map((data, index) => (
                <NavLink
                  to={`home/${data?.path}`}
                  key={index}
                  className="mt-1 flex gap-2 justify-start"
                >
                  <p className="flex gap-2 items-center">
                    <GrFormSubtract className="icons" />
                    {data?.name}
                  </p>
                </NavLink>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
