/* eslint-disable react/prop-types */
import { IoPersonOutline } from "react-icons/io5";
import { SlBadge, SlGraduation, SlPuzzle } from "react-icons/sl";
import { FaDesktop } from "react-icons/fa";
import { CiFlag1 } from "react-icons/ci";
import { BiBriefcase } from "react-icons/bi";

const Resume2 = ({
  personalData,
  educationData,
  skills,
  languageData,
  webLink,
  experience,
  project,
  certificate,
}) => {
  const {
    firstName,
    lastName,
    jobTitle,
    psummary,
    address1,
    address2,
    phone,
    email,
    github,
    linkedin,
  } = personalData;

  return (
    <div className="font-roboto">
      <div>
        <p className="text-3xl font-semibold">
          {firstName}&nbsp;{lastName}
        </p>
        <p className="text-lg">{jobTitle}</p>
        <p className="">{psummary}</p>
      </div>
      <div className="grid grid-cols-9 pt-5 gap-12">
        <div className="col-span-3 grid gap-2">
          {personalData && (
            <div>
              <p className="font-bold flex items-end gap-2 border-b pb-1 border-main-v7">
                <span className="bg-pri-v5 rounded-full">
                  <IoPersonOutline className="text-pri-v1 p-1" size={25} />
                </span>
                Personal Info
              </p>
              <ul className=" py-2 grid gap-2">
                {address1 && (
                  <li>
                    <p className="font-bold">Address</p>
                    <p>{address1}</p>
                  </li>
                )}
                {phone && (
                  <li>
                    <p className="font-bold">Phone</p>
                    <p>{phone}</p>
                  </li>
                )}
                {email && (
                  <li>
                    <p className="font-bold">Email</p>
                    <p>{email}</p>
                  </li>
                )}
                {linkedin && (
                  <li>
                    <p className="font-bold">Linkedin</p>
                    <p>{linkedin}</p>
                  </li>
                )}
                {github && (
                  <li>
                    <p className="font-bold">Github</p>
                    <p>{github}</p>
                  </li>
                )}
              </ul>
            </div>
          )}
          {skills.length > 0 && (
            <div>
              <p className="font-bold flex items-end gap-2 border-b pb-1 border-main-v7">
                <span className="bg-pri-v5 rounded-full">
                  <SlPuzzle className="text-pri-v1 p-1" size={25} />
                </span>
                Skills
              </p>
              <ul className=" pt-2 grid gap-2 py-2">
                {skills.map((data, index) => (
                  <li className="flex gap-3" key={index}>
                    <span>{data?.title}</span>
                    {data?.title && " - "}
                    <span>{data?.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {languageData.length > 0 && (
            <div>
              <p className="font-bold flex items-end gap-2 border-b pb-1 border-main-v7">
                <span className="bg-pri-v5 rounded-full">
                  <CiFlag1 className="text-pri-v1 p-1" size={25} />
                </span>
                Language
              </p>
              <ul className=" pt-2 grid gap-2 py-2">
                {languageData?.map((data, index) => (
                  <li className="flex gap-3" key={index}>
                    <span>{data?.language}</span>
                    {data?.language && " - "}
                    <span>{data?.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="col-span-6">
          {experience.length > 0 && (
            <div className="">
              <p className="font-bold flex items-end gap-2 border-b pb-1 border-main-v7">
                <span className="bg-pri-v5 rounded-full">
                  <BiBriefcase className="text-pri-v1 p-1" size={25} />
                </span>
                Experience
              </p>
              {experience.map((data, index) => (
                <div key={index}>
                  <div className="grid grid-cols-5 py-2 gap-5">
                    <p>
                      {data.startDate} {data.startDate && " - "} {data.endDate}
                    </p>
                    <div className="col-span-4">
                      <p className="font-bold">{data.jobTitle}</p>
                      <p>
                        {data.company}
                        {data.jobLocation && ", "}
                        {data.jobLocation}
                      </p>
                      <p>{data.jobDescription}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {educationData.length > 0 && (
            <div className="">
              <p className="font-bold flex items-end gap-2 border-b pb-1 border-main-v7">
                <span className="bg-pri-v5 rounded-full">
                  <SlGraduation className="text-pri-v1 p-1" size={25} />
                </span>
                Education
              </p>
              {educationData.map((data, index) => (
                <div className="grid grid-cols-5 py-2 gap-5" key={index}>
                  <p>
                    {data.startDate} {data.startDate && " - "} {data.endDate}
                  </p>
                  <div className="col-span-4">
                    <p className="font-bold">{data.degree}</p>
                    <p>
                      {" "}
                      {data.school}
                      {data.school && ", "} {data.eduLocation}
                    </p>
                    <p>{data.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          {certificate.length > 0 && (
            <div className="">
              <p className="font-bold flex items-end gap-2 border-b pb-1 border-main-v7">
                <span className="bg-pri-v5 rounded-full">
                  <SlBadge className="text-pri-v1 p-1" size={25} />
                </span>
                Certifications
              </p>
              <div className="pt-2"></div>
              {certificate.map((data, index) => (
                <div key={index} className="grid grid-cols-5 gap-5">
                  <p className="col-span-4">
                    {data?.certificate} - {data?.details}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resume2;
