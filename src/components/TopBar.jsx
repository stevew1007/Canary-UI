import { FaSearch, FaHashtag, FaRegBell, FaUserCircle } from "react-icons/fa";
import { VerticalFull } from "./Devider";
import { PiHash } from "react-icons/pi";
// import useDarkMode from "../../hooks/useDarkMode";

const TopBar = () => {
  return (
    <div className="flex h-12 w-auto flex-col">
      <div
        className="m-0 flex h-12 w-auto flex-row items-center 
        justify-between bg-gray-700 bg-opacity-90 shadow-lg"
      >
        <Title />
        <Search />
        <BellIcon />
        <UserCircle />
        <VerticalFull />
      </div>
      <VerticalFull />
    </div>
  );
};

// const ThemeIcon = () => {
//   //   const [darkTheme, setDarkTheme] = useDarkMode();
//   //   const handleMode = () => setDarkTheme(!darkTheme);
//   return (
//     <span onClick={handleMode}>
//       {darkTheme ? (
//         <FaSun size="24" className="top-navigation-icon" />
//       ) : (
//         <FaMoon size="24" className="top-navigation-icon" />
//       )}
//     </span>
//   );
// };

const Search = () => (
  <div className="search">
    <input className="search-input" type="text" placeholder="Search..." />
    <FaSearch size="18" className="my-auto text-secondary" />
  </div>
);
const BellIcon = () => <FaRegBell size="24" className="top-navigation-icon" />;
const UserCircle = () => (
  <FaUserCircle size="24" className="top-navigation-icon" />
);
const HashtagIcon = () => <FaHashtag size="20" className="" />;
const Title = ({ text = "Title-Block" }) => (
  <div className="m-0 flex h-12 justify-normal p-0">
    <PiHash
      size="22"
      className="mr-autoitems-center my-auto ml-5 text-gray-400"
    />
    <h3 className="mr-autoitems-center my-auto ml-2 align-middle text-lg font-bold tracking-wider text-white">
      {text}
    </h3>
  </div>
);

export default TopBar;
