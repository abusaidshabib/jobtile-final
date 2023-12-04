import { useState } from "react";
import { formFields } from "../../../../Json/resumeForm";
import { useDispatch } from "react-redux";
import { setPersonal } from "../../../../app/features/resume/formSlice";

const PersonalDetails = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  dispatch(setPersonal(formData));

  return (
    <div className="grid grid-cols-2 gap-5">
      {formFields.map((field) => (
        <div key={field.name} className={`mb-4 ${field.class}`}>
          <label
            htmlFor={field.name}
            className="block text-lg text-gray-700 font-semibold"
          >
            {field.label}
          </label>
          {field.class == "" ? (
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              value={formData[field.name] || ""}
              onChange={handleFieldChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          ) : (
            <div>
              <p className="text-sm">
                Write 2-4 short & energetic sentences to interest the reader!
                Mention your role, experience & most importantly - your biggest
                achievements, best qualities and skills.
              </p>
              <textarea
                onChange={handleFieldChange}
                name={field.name}
                id={field.name}
                cols="30"
                rows="10"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                value={formData[field.name] || ""}
              ></textarea>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PersonalDetails;
