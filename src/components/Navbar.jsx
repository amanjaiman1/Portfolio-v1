import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { github } from "../assets";
import { linkedin } from "../assets"
import { cv } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} backdrop-blur-lg w-full flex items-center py-5 fixed top-0 z-20 `}
    >
      <div className=" w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[15px] font-bold cursor-pointer flex">
      
            <span className="sm:block hidden">| &nbsp; Full Stack Developer</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((Link) => (
            <li
              key={Link.id}
              className={`${
                active === Link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[17px]
             font-medium cursor-pointer `}
              onClick={() => setActive(Link.title)}
            >
              <a href={`#${Link.id}`}> {Link.title}</a>
            </li>
          ))}
        </ul>

        <div className="absolute inset-0 justify-end sm:block hidden mt-80
          m-4 ">

          <div
            onClick={() => window.open
            ("https://github.com/amanjaiman1", "blank")}
            className=" w-10 h-10 rounded-full
            flex justify-center items-center cursor-pointer "
          >
          <img
           src={github}
           alt="github"
           className="w-8 h-8 object-contain" />
          </div> &nbsp; &nbsp;

          <div
            onClick={() => window.open
            ("https://www.linkedin.com/in/aman-jaiman-b4a36b199/", "blank")}
            className=" w-10 h-10 rounded-full
            flex justify-center items-center cursor-pointer "
          >
           <img
            src={linkedin}
            alt="linkedin"
            className="w-7 h-7 object-contain "  />
          </div> &nbsp;&nbsp;

          <div
            onClick={() => window.open
            ("https://drive.google.com/file/d/1AJM3LBr9OCP8S7XSVsu9If18p_BswldH/view?usp=share_link", "blank")}
            className=" w-10 h-10 rounded-full
            flex justify-center items-center cursor-pointer "
          >
           <img
            src={cv}
            alt="linkedin"
            className="w-7 h-7 object-contain "  />
          </div>

        </div>

        <div
          className="sm:hidden flex flex-1 justify-end
       items-center "
        >
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${ !toggle
               ? "hidden"
               : "flex"
            }  p-6 black-gradient absolute top-20 
               right-0 mx-4 my-2 min-[140px] z-0 rounded-xl`}
          >
            <ul
              className="list-none flex justify-end items-start
        flex-col gap-4"
            >
              {navLinks.map((Link) => (
                <li
                  key={Link.id}
                  className={`${
                    active === Link.title ? "text-white" : "text-secondary"
                  } font-poppins text-[16px]
                    cursor-pointer font-medium `}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(Link.title);
                  }}
                >
                  <a href={`#${Link.id}`}> {Link.title}</a>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
