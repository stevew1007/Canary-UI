/* eslint-disable react/prop-types */
import { BsDiscord } from "react-icons/bs";
import { GiHummingbird } from "react-icons/gi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import PropTypes from "prop-types";

const SideBar = () => {
  return (
    <div className="fixed top-3 m-0 flex h-full w-20 flex-col items-center bg-gray-900 text-secondary shadow-lg">
      <SideBarIcon
        index={0}
        icon={<GiHummingbird size="32" />}
        tooltip="Settings"
        // highlighted={true}
        selected={true}
      />
      <Divider />
      <SideBarIcon
        index={1}
        icon={<BsDiscord size="32" />}
        highlighted={true}
      />
      <SideBarIcon
        index={2}
        icon={<AiOutlineUsergroupAdd size="32" />}
        tooltip="Add a ORG"
      />
    </div>
  );
};

const SideBarIcon = ({
  index,
  icon,
  tooltip = "tooltip",
  highlighted = false,
  selected = false,
}) => (
  <div className="group flex h-16 w-16 flex-row align-middle">
    <Indicators highlighted={highlighted} selected={selected} />
    <button
      className={`${selected ? "sidebar-icon-selected" : "sidebar-icon"}`}
      id={index}
      onClick={(element) => {
        // setSelection();
        console.log(element.element);
      }}
    >
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{tooltip}</span>
    </button>
  </div>
);

SideBarIcon.prototype = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string,
};

const Divider = () => (
  <hr className="mx-3 w-16 rounded-full border border-gray-800 bg-gray-800" />
);

const Indicators = ({ highlighted = false, selected = false }) => {
  // console.log(highlighted);
  // if (highlighted === true) {
  //   return (
  //     <hr
  //       className="align-center my-auto h-1 rounded-r-md border-2
  //  border-white bg-white transition-all duration-100 ease-in-out
  // group-hover:h-4"
  //     />
  //   );
  // }
  // return (
  //   <hr
  //     className="align-center my-auto h-1 rounded-r-md border-2 border-gray-900
  //       bg-gray-900 transition-all duration-100 ease-in-out group-hover:h-4
  //  group-hover:border-white group-hover:bg-white"
  //   />
  // );
  return (
    <div className="fixed left-0 flex h-16 flex-col">
      <hr
        className={`my-auto h-1 rounded-r-md border-2 transition-all duration-100 ease-in-out ${
          selected ? "h-10 border-white bg-white" : `group-hover:h-4`
        } ${
          highlighted
            ? "border-white bg-white"
            : "border-gray-900 bg-gray-900 group-hover:border-white group-hover:bg-white"
        } `}
      />
    </div>
  );
};
//   if (highlight === true) {
//     return (
//       <hr
//         className="align-center my-auto h-1 rounded-r-md border-2
//    border-white bg-white transition-all duration-100 ease-in-out
//   group-hover:h-4"
//       />
//     );
//   } else {
//     return (
//       <hr
//         className="align-center my-auto h-1 rounded-r-md border-2 border-gray-900
//         bg-gray-900 transition-all duration-100 ease-in-out group-hover:h-4
//    group-hover:border-white group-hover:bg-white"
//       />
//     );
//   }
// };

export default SideBar;
