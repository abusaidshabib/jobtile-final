import {
  IoCopyOutline,
  IoLocationOutline,
  IoSearchOutline,
  IoSettingsOutline,
} from "react-icons/io5";

/* eslint-disable react/no-unescaped-entities */
const SearchSection = () => {
  return (
    <div
      className="2xl:p-36 lg:p-24 md:p-16 p-8 bg-pri-v4 text-main-v5"
      id="search"
    >
      <form className="grid lg:grid-cols-3 grid-cols-1 gap-8">
        <div className="bg-pri-v5 flex items-center justify-center rounded">
          <label htmlFor="search" className="p-4">
            <IoSearchOutline className="text-2xl" />
          </label>
          <input
            type="text"
            name="search"
            id="search"
            className="w-full bg-transparent placeholder:text-main-v5 2xl:text-lg lg:text-base outline-none border-main-v2"
            placeholder="Job title or keywords"
          />
        </div>
        <div className="bg-pri-v5 flex items-center justify-center rounded">
          <label htmlFor="location" className="p-4">
            <IoLocationOutline className="text-2xl" />
          </label>
          <select
            className="w-full bg-transparent placeholder:text-main-v5 2xl:text-lg lg:text-base outline-none border-main-v2"
            name="location"
            id="location"
          >
            <option>All Location</option>
            <option value="">Dhaka</option>
            <option value="">Dinajpur</option>
            <option value="">Khulna</option>
          </select>
        </div>
        <div className="bg-pri-v5 flex items-center justify-center rounded">
          <label htmlFor="category" className="p-4">
            <IoCopyOutline className="text-2xl" />
          </label>
          <select
            className="w-full bg-transparent placeholder:text-main-v5 2xl:text-lg lg:text-base outline-none border-main-v2"
            name="category"
            id="category"
          >
            <option>All Category</option>
            <option value="">Category 1</option>
            <option value="">Category 2</option>
            <option value="">Category 3</option>
          </select>
        </div>
        <div className="bg-pri-v5 flex items-center justify-center rounded">
          <label htmlFor="searchLocations" className="p-4">
            <IoLocationOutline className="text-2xl" />
          </label>
          <input
            type="text"
            name="searchLocations"
            id="searchLocations"
            className="w-full bg-transparent placeholder:text-main-v5 2xl:text-lg lg:text-base outline-none border-main-v2"
            placeholder="Locations"
          />
        </div>
        <div className="bg-pri-v5 flex items-center justify-center rounded">
          <label htmlFor="searchType" className="p-4">
            <IoSettingsOutline className="text-2xl" />
          </label>
          <input
            type="text"
            name="searchType"
            id="searchType"
            className="w-full bg-transparent placeholder:text-main-v5 2xl:text-lg lg:text-base outline-none border-main-v2"
            placeholder="All Type"
          />
        </div>
        <input
          className="w-full text-main-v5 rounded capitalize col-span-1 bg-main-v2 hover:bg-main-v1 hover:text-main-v3 hover:font-semibold transition-all delay-200 duration-500 py-4 font-medium"
          type="submit"
          value="Find jobs"
        />
      </form>
    </div>
  );
};

export default SearchSection;
