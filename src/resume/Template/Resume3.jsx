/* eslint-disable react/prop-types */
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp, IoLogoLinkedin, IoMail } from "react-icons/io5";

const Resume3 = ({
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
    <div>
      <div className="grid grid-cols-5 ">
        <div className="col-span-4">
          <p className="text-4xl font-bold">
            {firstName}&nbsp;{lastName}
          </p>
          <p>{jobTitle}</p>
        </div>
        <div className="col-span-1 grid gap-1">
          {phone && (
            <p className="flex gap-3 items-center justify-end">
              <FaPhoneAlt className="text-main-v7" />
              <span>{phone}</span>
            </p>
          )}
          {email && (
            <p className="flex gap-3 items-center justify-end">
              <IoMail className="text-main-v7" />
              <span>{email}</span>
            </p>
          )}
          {address1 && (
            <p className="flex gap-3 items-center justify-end">
              <IoLocationSharp className="text-main-v7 text-lg" />
              <span>{address1}</span>
            </p>
          )}
          {linkedin && (
            <p className="flex gap-3 items-center justify-end">
              <IoLogoLinkedin className="text-main-v7 text-lg" />
              <span>{linkedin}</span>
            </p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-7">
        <div className="col-span-2 border-r border-pri-v5 grid gap-2">
          {educationData.length > 0 && (
            <div className="">
              <p className="font-bold">EDUCATION</p>
              {educationData.map((data, index) => (
                <div key={index}>
                  <p className="text-main-v7">
                    {data.startDate} {data.startDate && " | "} {data.endDate}
                  </p>
                  <p>{data.school}</p>
                  <p>{data.eduLocation}</p>
                </div>
              ))}
            </div>
          )}
          {skills.length > 0 && (
            <div className="">
              <p className="font-bold">SKILLS</p>
              <ul className="list-disc pl-5">
                {skills.map((data, index) => (
                  <li key={index}>{data?.title}</li>
                ))}
              </ul>
            </div>
          )}
          {certificate.length > 0 && (
            <div className="">
              <p className="font-bold">CERTIFICATE</p>
              {certificate.map((data, index) => (
                <div key={index}>
                  <p className="text-main-v7">{data?.certificate}</p>
                  <p>{data?.details}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="col-span-4 pl-8 grid gap-2">
          {psummary && (
            <div>
              <p className="uppercase font-bold">Career Objective</p>
              <p>{psummary}</p>
            </div>
          )}
          {experience.length > 0 && (
            <div>
              <p className="uppercase font-bold">Experience</p>
              {experience.map((data, index) => (
                <div key={index}>
                  <p>{data.jobTitle}</p>
                  <p className="text-main-v7">
                    {data.startDate} {data.startDate && " - "} {data.endDate}
                  </p>
                  <p>{data.jobDescription}</p>
                </div>
              ))}
            </div>
          )}
          {project.length > 0 && (
            <div>
              <p className="uppercase font-bold">Projects</p>
              {project?.map((data, index) => (
                <div key={index}>
                  <p>{data?.title}</p>
                  <p className="text-main-v7">{data?.about}</p>
                  <p>{data?.details}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resume3;
