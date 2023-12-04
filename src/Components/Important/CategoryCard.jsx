/* eslint-disable react/prop-types */
import { MdOutlineAccountBalance } from "react-icons/md";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const CategoryCard = ({ category, totaljobs }) => {
  return (
    <Link className="p-4 grid place-items-center gap-4 border rounded shadow-xl">
      <MdOutlineAccountBalance className="text-main-v2 text-5xl" />
      <div className="text-center">
        <p className="text-xl font-semibold">{category}</p>
        <a className="text-sm text-main-v2" href="/">
          {totaljobs} Open Positions
        </a>
      </div>
    </Link>
  );
};

export default CategoryCard;
