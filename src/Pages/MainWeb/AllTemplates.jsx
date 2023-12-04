import image1 from "../../assets/resume/1.jpg";
import image2 from "../../assets/resume/2.jpg";
import image3 from "../../assets/resume/1.jpg";
import image4 from "../../assets/resume/2.jpg";
import image5 from "../../assets/resume/1.jpg";
import { Link } from "react-router-dom";

const AllTemplates = () => {
  const images = [image1, image2, image4, image3, image5];
  return (
    <div className="grid grid-cols-3 gap-10 2xl:p-36 lg:p-24 md:p-16 p-8">
      {images?.map((img, index) => (
        <Link to="/edit-resume" key={index} className="relative">
          <div className="w-full bg-slate-100 p-8" key={index}>
            <img
              className="w-full h-full hover:shadow-2xl shadow-black"
              src={img}
              alt=""
            />
          </div>
          <div className="pt-5">
            <p className="text-2xl font-young">Job-winning resume templates</p>
            <p className="">
              Each resume template is expertly designed and follows the exact
              “resume rules” hiring managers look for. Stand out and get hired
              faster with field-tested resume templates.
            </p>
          </div>
          <button className="absolute top-1/3 right-1/3 bg-blue-700 text-main-v2 px-6 py-3 rounded-md">
            Use This Template
          </button>
        </Link>
      ))}
    </div>
  );
};

export default AllTemplates;
