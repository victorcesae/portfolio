import React, { useState } from "react";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const MenuList = ({
  active,
  setActive,
  isToSmallDevice = false,
  setMenuToggle,
}: {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
  isToSmallDevice?: boolean;
  setMenuToggle: React.Dispatch<React.SetStateAction<boolean>>;
}) => (
  <ul
    className={`list-none ${
      isToSmallDevice
        ? "flex justify-end items-start flex-col gap-4"
        : "hidden sm:flex flex-row gap-10"
    }`}
  >
    {navLinks.map((link) => (
      <li
        key={link.id}
        className={`${
          active === link.title ? "text-white" : "text-secondary"
        } hover:text-white ${
          isToSmallDevice ? "text-16px" : "text-[18px]"
        } font-medium cursor-pointer`}
        onClick={() => {
          setActive(link.title);
          if (isToSmallDevice) setMenuToggle(false);
        }}
      >
        <a href={`#${link.id}`}>{link.title}</a>
      </li>
    ))}
  </ul>
);
const Navbar = () => {
  const [active, setActive] = useState("");
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <nav
      className={`
      ${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary
    '`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-cover" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Victor&nbsp;
            <span className="sm:block hidden">| FullStack Developer</span>
          </p>
        </Link>
        <MenuList
          active={active}
          setActive={setActive}
          setMenuToggle={setMenuToggle}
        />
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={menuToggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setMenuToggle(!menuToggle)}
          />
          <div
            className={`${
              !menuToggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <MenuList
              active={active}
              setActive={setActive}
              setMenuToggle={setMenuToggle}
              isToSmallDevice={true}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
