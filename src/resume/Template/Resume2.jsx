import { IoPersonOutline } from "react-icons/io5";
import { SlBadge, SlGraduation, SlPuzzle } from "react-icons/sl";
import { FaDesktop } from "react-icons/fa";
import { CiFlag1 } from "react-icons/ci";
import { BiBriefcase } from "react-icons/bi";

const Resume2 = () => {
  return (
    <div className="font-roboto">
      <div>
        <p className="text-3xl font-semibold">John Smith</p>
        <p className="text-lg">IT Project Manager</p>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis et
          eaque optio perspiciatis quibusdam numquam suscipit minus odit,
          corrupti quas illum? Autem ex praesentium qui beatae culpa repellendus
          harum corporis?
        </p>
      </div>
      <div className="grid grid-cols-9 pt-5 gap-12">
        <div className="col-span-3 grid gap-2">
          <div>
            <p className="font-bold flex items-end gap-2 border-b pb-1 border-main-v7">
              <span className="bg-pri-v5 rounded-full">
                <IoPersonOutline className="text-pri-v1 p-1" size={25} />
              </span>
              Personal Info
            </p>
            <ul className=" py-2 grid gap-2">
              <li>
                <p className="font-bold">Address</p>
                <p>Poland, Me</p>
              </li>
              <li>
                <p className="font-bold">Phone</p>
                <p>774-987-4009</p>
              </li>
              <li>
                <p className="font-bold">Linkedin</p>
                <p>linkedin.com</p>
              </li>
              <li>
                <p className="font-bold">Email</p>
                <p>abusaidshabib712@gmail.com</p>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold flex items-end gap-2 border-b pb-1 border-main-v7">
              <span className="bg-pri-v5 rounded-full">
                <SlPuzzle className="text-pri-v1 p-1" size={25} />
              </span>
              Skills
            </p>
            <ul className=" pt-2 grid gap-2 py-2">
              <li className="flex gap-3">
                <p>Poland, Me</p>
                <p>Proficient</p>
              </li>
              <li>
                <p>774-987-4009</p>
              </li>
              <li>
                <p>linkedin.com</p>
              </li>
              <li>
                <p>abusaidshabib712@gmail.com</p>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold flex items-end gap-2 border-b pb-1 border-main-v7">
              <span className="bg-pri-v5 rounded-full">
                <FaDesktop className="text-pri-v1 p-1" size={25} />
              </span>
              Software
            </p>
            <ul className=" pt-2 grid gap-2 py-2">
              <li className="flex gap-3">
                <p>Poland, Me</p>
                <p>Proficient</p>
              </li>
              <li>
                <p>774-987-4009</p>
              </li>
              <li>
                <p>linkedin.com</p>
              </li>
              <li>
                <p>abusaidshabib712@gmail.com</p>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold flex items-end gap-2 border-b pb-1 border-main-v7">
              <span className="bg-pri-v5 rounded-full">
                <CiFlag1 className="text-pri-v1 p-1" size={25} />
              </span>
              Language
            </p>
            <ul className=" pt-2 grid gap-2 py-2">
              <li className="flex gap-3">
                <p>Poland, Me</p>
                <p>Proficient</p>
              </li>
              <li>
                <p>774-987-4009</p>
              </li>
              <li>
                <p>linkedin.com</p>
              </li>
              <li>
                <p>abusaidshabib712@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-6">
          <div className="">
            <p className="font-bold flex items-end gap-2 border-b pb-1 border-main-v7">
              <span className="bg-pri-v5 rounded-full">
                <BiBriefcase className="text-pri-v1 p-1" size={25} />
              </span>
              Experience
            </p>
            <div className="grid grid-cols-5 py-2 gap-5">
              <p>2006-12 - present</p>
              <div className="col-span-4">
                <p className="font-bold">Senior Project Manager</p>
                <p>Seton Hospital, Me</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat saepe aliquam recusandae repellat, voluptate non
                  nesciunt voluptatum error explicabo eum fuga optio hic iure
                  veritatis beatae quod perspiciatis quae similique!
                </p>
              </div>
            </div>
            <div className="grid grid-cols-5 py-2 gap-5">
              <p>2006-12 - present</p>
              <div className="col-span-4">
                <p className="font-bold">Senior Project Manager</p>
                <p>Seton Hospital, Me</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat saepe aliquam recusandae repellat, voluptate non
                  nesciunt voluptatum error explicabo eum fuga optio hic iure
                  veritatis beatae quod perspiciatis quae similique!
                </p>
              </div>
            </div>
            <div className="grid grid-cols-5 py-2 gap-5">
              <p>2006-12 - present</p>
              <div className="col-span-4">
                <p className="font-bold">Senior Project Manager</p>
                <p>Seton Hospital, Me</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat saepe aliquam recusandae repellat, voluptate non
                  nesciunt voluptatum error explicabo eum fuga optio hic iure
                  veritatis beatae quod perspiciatis quae similique!
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <p className="font-bold flex items-end gap-2 border-b pb-1 border-main-v7">
              <span className="bg-pri-v5 rounded-full">
                <SlGraduation className="text-pri-v1 p-1" size={25} />
              </span>
              Education
            </p>
            <div className="grid grid-cols-5 py-2 gap-5">
              <p>2006-12 - present</p>
              <div className="col-span-4">
                <p className="font-bold">Senior Project Manager</p>
                <p>Seton Hospital, Me</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat saepe aliquam recusandae repellat, voluptate non
                  nesciunt voluptatum error explicabo eum fuga optio hic iure
                  veritatis beatae quod perspiciatis quae similique!
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <p className="font-bold flex items-end gap-2 border-b pb-1 border-main-v7">
              <span className="bg-pri-v5 rounded-full">
                <SlBadge className="text-pri-v1 p-1" size={25} />
              </span>
              Certifications
            </p>
            <div className="grid grid-cols-5 py-2 gap-5">
              <p>2006-12</p>
              <p className="col-span-4">
                Seton Hospital, Me - Project Management Institute
              </p>
            </div>
            <div className="grid grid-cols-5 py-2 gap-5">
              <p>2006-12</p>
              <p className="col-span-4">
                Seton Hospital, Me - Project Management Institute
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume2;
