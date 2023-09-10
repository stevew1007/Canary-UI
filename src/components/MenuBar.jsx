/* eslint-disable react/prop-types */
import { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { FaChevronDown, FaChevronRight, FaInfoCircle } from "react-icons/fa";
import { PiHash } from "react-icons/pi";
import { RiAccountPinBoxFill } from "react-icons/ri";

const account = [
  {
    icon: <FaInfoCircle />,
    text: "Basic Info",
    active: true,
  },
  {
    icon: <RiAccountPinBoxFill />,
    text: "My Account",
  },
];

const org = [
  {
    text: "My ORG",
  },
  {
    text: "New ORG",
  },
];

// const random = ["variants", "plugins"];

const MenuBar = ({ title }) => {
  return (
    <div className="ml-20 mt-3 h-auto w-80 overflow-auto rounded-tl-xl bg-gray-800 shadow-lg">
      <ChannelBlock title={title} />
      <Divider />
      <div className="m-0 flex flex-col items-center">
        <Menu header="PROFILE" list={account} />
        <Menu header="ORG" list={org} />
        {/* <Menu header="Random" list={random} /> */}
      </div>
    </div>
  );
};

const Menu = ({ header, list }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="m-0 w-full px-2 pb-2 transition duration-300 ease-in-out">
      <div
        onClick={() => setExpanded(!expanded)}
        className="mx-0 flex cursor-pointer flex-row items-center justify-evenly text-gray-500"
      >
        <ChevronIcon expanded={expanded} />
        <div className="w-full cursor-default text-xs font-medium text-neutral-400 transition-all hover:text-white">
          {header}
        </div>
      </div>
      {expanded &&
        list &&
        list.map((element) => (
          <MenuSubItem
            key={element.text}
            icon={element.icon}
            text={element.text}
            highlighted={element.active}
          />
        ))}
    </div>
  );
};

const ChevronIcon = ({ expanded }) => {
  const chevClass = "text-accent text-opacity-80 my-auto mr-1";
  return expanded ? (
    <FaChevronDown size="10" className={chevClass} />
  ) : (
    <FaChevronRight size="10" className={chevClass} />
  );
};

const MenuSubItem = ({ icon, text, highlighted = false }) => (
  <div
    className="group mx-1 mb-2 mt-2 flex h-10 w-auto items-center 
  rounded-md bg-gray-800 transition-all duration-100 ease-in-out hover:bg-gray-600"
  >
    <div className="ml-2">
      {icon != undefined && (
        <div size="20" className="mr-1 text-gray-400">
          {icon}
        </div>
      )}
      {icon === undefined && (
        <PiHash size="20" className="mr-1 text-gray-400" />
      )}
    </div>
    <div
      className={`ml-2 cursor-pointer font-medium tracking-wide ${
        highlighted
          ? "text-highlight"
          : " group-hover:text-highlight text-neutral-400 transition-all duration-100 ease-in-out"
      }`}
    >
      {text}
    </div>
  </div>
);

const ChannelBlock = ({ title = "Titles" }) => (
  <div className="m-0 flex h-12 items-center justify-center p-0">
    <h3 className="my-auto ml-5 mr-auto align-middle text-lg font-bold tracking-wider text-white">
      {title}
    </h3>
  </div>
);

const Divider = () => (
  <hr className="border-1 mb-5 border-gray-900 bg-gray-900 shadow-lg" />
);

export default MenuBar;
