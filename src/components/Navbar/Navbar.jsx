import Navbar1 from "./Navbar1"
import Navbar2 from "./Navbar2"
import Navbar3 from "./Navbar3"

const Navbar = () => {
  return (
    <div className="sticky top-[0px] z-[5]">
      <Navbar2 />
      <Navbar3 />
    </div>
  )
}

export default Navbar









/* import "./Navbar.css";
import { useRef } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

import logo from "/images/logo.png";

const Navbar = () => {
  const navLinkRef = useRef();

  const showMenu = () => {
    if (navLinkRef.current) {
      navLinkRef.current.style.right = "0";
    }
  };

  const hideMenu = () => {
    if (navLinkRef.current) {
      navLinkRef.current.style.right = "-200px";
    }
  };

  return (
    <nav className="border border-[red]">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>

      <div className="nav-links" id="navLinks" ref={navLinkRef}>
        <FontAwesomeIcon icon={faTimes} className="fas" onClick={hideMenu} />

        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/course">COURSE</Link>
          </li>
          <li>
            <Link to="/faculty">FACULTIES</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>

      <FontAwesomeIcon icon={faBars} className="fas" onClick={showMenu} />
    </nav>
  );
};

export default Navbar;
 */