import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { webLinks } from "../../../../Json/resumeForm";
import { useDispatch } from "react-redux";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IoAdd } from "react-icons/io5";
import { modifyWebLink } from "../../../../utils/ModifyData";
import { setWebLinks } from "../../../../app/features/resume/formSlice";

const WebsiteLinks = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const [totalFields, setTotalFields] = useState([{ id: 1, dataOpen: false }]);

  const handleFieldChange = (e, id) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [`${name}_${id}`]: value }));
  };

  const toggleSection = (id) => {
    setTotalFields((prevTotalFields) =>
      prevTotalFields.map((field) =>
        field.id === id ? { ...field, dataOpen: !field.dataOpen } : field
      )
    );
  };

  const deleteSection = (id) => {
    setTotalFields((prevTotalFields) =>
      prevTotalFields.filter((field) => field.id !== id)
    );

    setFormData((prevData) => {
      const newData = { ...prevData };
      Object.keys(newData).forEach((key) => {
        if (key.endsWith(`_${id}`)) {
          delete newData[key];
        }
      });
      return newData;
    });
  };

  useEffect(() => {
    dispatch(setWebLinks(modifyWebLink(formData)));
  }, [formData, dispatch]);

  return (
    <div className="grid gap-8">
      {totalFields.map((field) => (
        <div className="flex justify-between items-center" key={field.id}>
          <div className="border-2 p-8 rounded-lg w-full">
            <div className="w-full flex justify-between items-center">
              <p className="text-2xl font-semibold">Web title</p>
              <IoIosArrowDown
                className={`text-xl ${field.dataOpen && "rotate-180"}`}
                onClick={() => toggleSection(field.id)}
              />
            </div>
            {field.dataOpen && (
              <div className="grid grid-cols-2 gap-5 pt-8">
                {webLinks.map((formField) => (
                  <div key={formField.name} className={`${formField.class}`}>
                    <label
                      htmlFor={formField.name}
                      className="block text-lg text-gray-700 font-semibold"
                    >
                      {formField.label}
                    </label>
                    {formField.class === "" ? (
                      <input
                        type={formField.type}
                        id={`${formField.name}_${field.id}`}
                        name={formField.name}
                        value={formData[`${formField.name}_${field.id}`] || ""}
                        onChange={(e) => handleFieldChange(e, field.id)}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                      />
                    ) : (
                      <textarea
                        onChange={(e) => handleFieldChange(e, field.id)}
                        name={formField.name}
                        id={`${formField.name}_${field.id}`}
                        cols="30"
                        rows="10"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        value={formData[`${formField.name}_${field.id}`] || ""}
                      ></textarea>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="p-8">
            <MdOutlineDeleteOutline
              className="text-3xl text-red-600 cursor-pointer"
              onClick={() => deleteSection(field.id)}
            />
          </div>
        </div>
      ))}
      <div>
        <button
          onClick={(e) => {
            e.preventDefault();
            setTotalFields((prevTotalFields) => [
              ...prevTotalFields,
              { id: prevTotalFields.length + 1, dataOpen: false },
            ]);
          }}
          className="flex items-center text-lg font-semibold p-4 border-2 rounded-lg"
        >
          <IoAdd />
          &nbsp;
          <span>Add More</span>
        </button>
      </div>
    </div>
  );
};

export default WebsiteLinks;
