import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header ">
            <a className="navbar-brand" href="#">
              WebSiteName
            </a>
          </div>
          <ul className="nav-links">
            <li>
              <a href="#">Home</a>
            </li>
            {/* <li>
              <a href="#">About</a>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
