import { Link } from "react-router-dom";
import "../../../CSS/Categories.css";
import CategoryCard from "../../../Components/Important/CategoryCard";

const CategorySection = () => {
  let jobs = [
    { category: "Healthcare & Medical", totaljobs: 125000 },
    { category: "Information Technology", totaljobs: 180000 },
    { category: "Finance", totaljobs: 75000 },
    { category: "Education", totaljobs: 90000 },
    { category: "Engineering", totaljobs: 60000 },
    { category: "Hospitality & Tourism", totaljobs: 35000 },
    { category: "Sales & Marketing", totaljobs: 120000 },
    { category: "Ux/ui", totaljobs: 25000 },
  ];

  return (
    <Link to="" className="2xl:px-36 lg:px-24 md:px-16 px-8 bg-main-v9">
      <div className="">
        <p className="text-base font-semibold font-primary tracking-wider text-center pb-2">
          JOBS LIVE TODAY
        </p>
        <p className="text-center text-4xl font-bold">
          Browse Jobs By <span className="text-pri-v6">Category</span>
        </p>
      </div>
      <div className="lg:pt-24 md:pt-16 pt-8 grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {jobs.slice(0, 5).map((data, index) => (
          <CategoryCard key={index} {...data} />
        ))}
      </div>
    </Link>
  );
};

export default CategorySection;
