import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const EventNav = () => {
  const [eventStatus, setEventStatus] = useState(true);

  return (
    <div
      className={`text-center py-2 px-8 bg-pri-v4 text-white relative ${
        eventStatus ? "block" : "hidden"
      }`}
    >
      <p>
        Our dedicated <b>support</b> team is ready to assist you with any
        questions or concerns.
      </p>
      <button
        className="absolute right-3 top-3"
        onClick={() => setEventStatus(!eventStatus)}
      >
        <AiOutlineClose />
      </button>
    </div>
  );
};

export default EventNav;
