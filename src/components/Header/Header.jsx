import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";

export default function Header() {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpen, setMenuOpen] = useState(false);

  function menuClicked() {
    setMenuOpen(false);
  }

  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />
      {menuOpen === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => {
            setMenuOpen(true);
          }}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li onClick={menuClicked}>
            <Link
              onClick={menuClicked}
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link onClick={menuClicked} to="programs" spy={true} smooth={true}>
              Programs
            </Link>
          </li>
          <li>
            <Link onClick={menuClicked} to="reasons" spy={true} smooth={true}>
              Why us
            </Link>
          </li>
          <li>
            <Link onClick={menuClicked} to="plans" spy={true} smooth={true}>
              Plans
            </Link>
          </li>
          <li>
            <Link
              onClick={menuClicked}
              to="testimonials"
              spy={true}
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}
