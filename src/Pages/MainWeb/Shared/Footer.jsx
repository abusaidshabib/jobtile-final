import { HiArrowCircleRight } from "react-icons/hi";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo from "../../../Components/Important/Logo";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="grid 2xl:grid-cols-5 md:grid-cols-3 grid-cols-2 2xl:gap-32 gap-16 bg-main-v9 2xl:p-36 lg:p-24 md:p-16 p-8 border-t border-main-v6">
      <div className="2xl:col-span-2 md:col-span-3 col-span-2 grid gap-3">
        <Logo color="text-main-v6" />
        <p className="text-xl">
          Subscribe us for news, updates immediately And Get job alerts.
        </p>
        <div className="2xl:w-96 xl:w-full h-14 subscribe_box relative">
          <label className="" htmlFor="email">
            <input
              className="w-full h-full p-3 border-2 bg-transparent rounded-lg outline-none focus:border-main-v2 focus:text-main-v6 transition duration-500"
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
            />
          </label>
          <HiArrowCircleRight className="text-4xl text-main-v2 absolute top-3 right-2" />
        </div>
        <div className="flex gap-8 text-2xl pt-8">
          <FaFacebookF />
          <AiOutlineYoutube />
          <FaLinkedinIn />
          <AiOutlineTwitter />
          <AiOutlineInstagram />
        </div>
        <p className="text-sm">
          &copy; {year},This theme provided by Abu Said Shabib
        </p>
      </div>
      <div className="text-main-v6">
        <p className="font-neural font-medium text-2xl pb-4">Services</p>
        <ul className="decoration-transparent grid gap-2">
          <li>
            <Link
              className="text-main-v6 font-normal hover:font-bold hover:text-main-v2 transition-all duration-100"
              to="/"
            >
              Create Resume/CV
            </Link>
          </li>
          <li>
            <Link
              className="text-main-v6 font-normal hover:font-bold hover:text-main-v2 transition-all duration-100"
              to="/"
            >
              Post Job
            </Link>
          </li>
          <li>
            <Link
              className="text-main-v6 font-normal hover:font-bold hover:text-main-v2 transition-all duration-100"
              to="/"
            >
              Find Jobs
            </Link>
          </li>
          <li>
            <Link
              className="text-main-v6 font-normal hover:font-bold hover:text-main-v2 transition-all duration-100"
              to="/"
            >
              Hire Talents
            </Link>
          </li>
          <li>
            <Link
              className="text-main-v6 font-normal hover:font-bold hover:text-main-v2 transition-all duration-100"
              to="/"
            >
              Courses
            </Link>
          </li>
        </ul>
      </div>
      <div className="text-main-v6">
        <p className="font-neural font-medium text-2xl pb-4">Pages</p>
        <ul className="decoration-transparent grid gap-2">
          <li>
            <Link
              className="text-main-v6 font-normal hover:font-bold hover:text-main-v2 transition-all duration-100"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="text-main-v6 font-normal hover:font-bold hover:text-main-v2 transition-all duration-100"
              to="/"
            >
              Available Jobs
            </Link>
          </li>
          <li>
            <Link
              className="text-main-v6 font-normal hover:font-bold hover:text-main-v2 transition-all duration-100"
              to="/"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              className="text-main-v6 font-normal hover:font-bold hover:text-main-v2 transition-all duration-100"
              to="/"
            >
              FAQ
            </Link>
          </li>
        </ul>
      </div>
      <div className="text-main-v6">
        <p className="font-neural font-medium text-2xl pb-4">Support</p>
        <ul className="decoration-transparent grid gap-2">
          <li>
            <Link
              className="text-main-v6 font-normal hover:font-bold hover:text-main-v2 transition-all duration-100"
              to="/"
            >
              Terms of use
            </Link>
          </li>
          <li>
            <Link
              className="text-main-v6 font-normal hover:font-bold hover:text-main-v2 transition-all duration-100"
              to="/"
            >
              Terms & conditions
            </Link>
          </li>
          <li>
            <Link
              className="text-main-v6 font-normal hover:font-bold hover:text-main-v2 transition-all duration-100"
              to="/"
            >
              Privacy
            </Link>
          </li>
          <li>
            <Link
              className="text-main-v6 font-normal hover:font-bold hover:text-main-v2 transition-all duration-100"
              to="/"
            >
              Cookie policy
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
