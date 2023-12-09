import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useSelector } from "react-redux";
import { GoDownload } from "react-icons/go";
import Resume1 from "../../../resume/Template/Resume1";
import Resume2 from "../../../resume/Template/Resume2";

const ReviewResume = () => {
  const printRef = useRef();

  const resumeData = useSelector((state) => state.form);
  console.log(resumeData);
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  return (
    // <div className="bg-slate-500 max-h-screen xl:fixed xl:overflow-y-scroll grid place-content-center xl:top-0 xl:right-0 xl:bottom-0 w-1/2 lg:p-24 md:p-16 p-8 relative">
    <div className="bg-slate-500 p-8 fixed w-1/2 right-0 overflow-y-scroll min-h-screen top-0 bottom-0">
      <button
        onClick={handlePrint}
        className="py-5 w-full flex justify-end z-20"
      >
        <GoDownload className="text-2xl text-main-v3" />
      </button>
      <div className="bg-white rounded-md font-roboto">
        <div ref={printRef} className="p-8">
          {/* <Resume1 {...resumeData} /> */}
          <Resume2 {...resumeData} />
        </div>
      </div>
    </div>
  );
};

export default ReviewResume;
