import { Link } from "react-router-dom";
import "../../../CSS/JobSection.css";
import { FaApple, FaRss } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const JobSections = () => {
  const jobs = [
    {
      title: "Swift 3 developer",
      experience: "2 years",
      salary: "$2000 - $2500 / month",
      address: "1628 2nd Ave New York",
      type: "Internship",
      skype: "https://react-icons.github.io/react-icons/",
    },
    {
      title: "Swift 3 developer",
      experience: "2 years",
      salary: "$2000 - $2500 / month",
      address: "1628 2nd Ave New York",
      type: "Internship",
      skype: "https://react-icons.github.io/react-icons/",
    },
    {
      title: "Swift 3 developer",
      experience: "2 years",
      salary: "$2000 - $2500 / month",
      address: "1628 2nd Ave New York",
      type: "Internship",
      skype: "https://react-icons.github.io/react-icons/",
    },
    {
      title: "Swift 3 developer",
      experience: "2 years",
      salary: "$2000 - $2500 / month",
      address: "1628 2nd Ave New York",
      type: "Internship",
      skype: "https://react-icons.github.io/react-icons/",
    },
  ];

  return (
    <div className="2xl:p-36 lg:p-24 md:p-16 p-8">
      <div className="grid gap-5 place-items-center justify-between items-center md:flex">
        <div className="flex gap-5">
          <p>Showing 1 - 9 of 10 results </p>
          <span className="flex items-center text-orange-600 font-semibold">
            <FaRss className="text-lg" /> &nbsp; RSS Feed
          </span>
        </div>
        <div className="flex gap-5 items-center">
          <select
            name=""
            id=""
            className="border-2 p-2 px-5 border-gray-300 rounded"
          >
            <option value="Default">Default</option>
            <option value="">Value1</option>
            <option value="">Value2</option>
            <option value="">Value3</option>
          </select>
          <select
            name=""
            id=""
            className="border-2 p-2 px-5 border-gray-300 rounded"
          >
            <option value="Default">9 Per Page</option>
            <option value="">Value1</option>
            <option value="">Value2</option>
            <option value="">Value3</option>
          </select>
        </div>
      </div>{" "}
      <div className="grid gap-5 pt-8 md:grid-cols-1 sm:grid-cols-2 grid-cols-1">
        {jobs.map((data, index) => (
          <div key={index} className="border p-8 rounded md:flex grid gap-5 md:gap-0 md:justify-between md:text-left text-center items-center hover:border-l-4 hover:border-main-v2 text-main-v2 transition-all duration-300 delay-100 shadow-lg hover:shadow-none">
            <div className="md:flex gap-5 grid md:justify-center place-items-center">
              <FaApple className="text-5xl text-main-v6" />
              <div>
                <p className="font-semibold text-main-v2">{data?.title}</p>
                <p className="font-semibold text-main-v2">
                  Experience: <span className="text-sm">{data?.experience}</span>
                </p>
                <div className="text-sm flex justify-between gap-2 text-main-v7">
                  <Link className="text-pri-v6" to={data?.skype}>
                    Skype
                  </Link>
                  <p>{data?.salary}</p>
                </div>
              </div>
            </div>
            <div className="grid gap-2">
              <div className="flex gap-2 text-main-v7 text-sm items-center md:justify-start justify-center">
                <IoLocationOutline className="text-lg" />
                <p>{data?.address}</p>
              </div>
              <div className="flex gap-2 md:justify-start justify-center">
                <p className="text-main-v1 font-semibold">
                  {/* SVG removed as it was not provided */}
                </p>
                <a className="text-pri-v6 font-medium" href="/">
                  {data?.type}
                </a>
              </div>
            </div>
            <Link
              className="text-sm py-3 px-5 border rounded-full shadow-xl hover:shadow-none font-semibold hover:bg-main-v6 hover:text-main-v3 text-main-v6 transition-all duration-300 delay-100 md:block hidden"
              href="/"
            >
              Apply Now
            </Link>
            <Link
              className="text-pri-v6 font-semibold underline md:hidden"
              href="/"
            >
              Browse Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobSections;
