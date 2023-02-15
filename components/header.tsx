import { useEffect, useRef } from "react";

export const Header = () => {
  return (
    <>
      <div className="nav">
        <ul className="navList">
          <li className="navLi intro selected">
            <a href="#intro">intro</a>
          </li>
          <li className="navLi skills">
            <a href="#skills">skills</a>
          </li>
          <li className="navLi profile">
            <a href="#profile">profile</a>
          </li>
          <li className="navLi projects">
            <a href="#projects">projects</a>
          </li>
          <li className="navLi contact">
            <a href="#contact">contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};
