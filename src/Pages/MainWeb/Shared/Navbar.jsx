import Logo from "../../../Components/Important/Logo";
import { TfiWorld } from "react-icons/tfi";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuStatus, setMenuStatus] = useState(false);

  return (
    <div className="relative">
      <nav className="bg-white px-5 grid md:grid-cols-2 grid-cols-3 h-16 items-center shadow-lg">
        <button
          onClick={() => setMenuStatus(true)}
          className="text-2xl block md:hidden"
        >
          <FiMenu className="text-2xl block md:hidden" />
        </button>
        <Logo css="text-center md:text-start" />
        <div className="flex gap-3 justify-end items-center">
          <Link to="/create-resume" className="text-lg font-semibold">
            Resume
          </Link>
          <Link className="border border-pri-v4 py-2 px-4 font-bold text-sm hover:bg-main-v2 transition-all delay-100 duration-300 hidden md:block">
            Log in
          </Link>
          <Link className="border-2 border-pri-v4 py-2 px-4 font-bold text-sm text-white bg-pri-v4 hidden md:block">
            Sign Up
          </Link>
          <button className="border border-main-v1 hover:bg-main-v2 transition-all delay-100 duration-300 p-3 md:px-3">
            <TfiWorld className="text-lg font-bold" />
          </button>
        </div>
      </nav>
      <div
        className={`fixed h-screen translate-all top-0 left-0 duration-1000 flex w-full ${
          menuStatus ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="h-full bg-white p-5 min-w-[248px] shadow-lg shadow-main-v1 flex flex-col gap-5 text-lg font-medium">
          <li className="flex justify-center">
            <button
              className="p-3 shadow-lg rounded-full border"
              onClick={() => setMenuStatus(false)}
            >
              <AiOutlineClose />
            </button>
          </li>
          <li>
            <Link className="" to="/login">
              Login
            </Link>
          </li>
          <li className="border-b-2 pb-5 border-main-v1">
            <Link className="" to="/register">
              Register
            </Link>
          </li>
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="">CV/Resume</Link>
          </li>
          <li>
            <Link to="">Hire</Link>
          </li>
          <li>
            <Link to="">Terms and Condition</Link>
          </li>
        </ul>
        <div
          className={`w-full translate-all duration-100 delay-100 flex-grow ${
            menuStatus ? "backdrop-blur-sm bg-transparent" : ""
          }`}
          onClick={() => setMenuStatus(false)}
        ></div>
      </div>
    </div>
  );
};

export default Navbar;
