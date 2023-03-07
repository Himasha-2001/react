import React from "react";

function NavBar() {
  return (
    <nav
      className="nav"
      role="navigation"
      aria-label="main navigation"
      style={{ backgroundColor: "#F0EBEB" }}
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          {" "}
        </a>
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <a className="navbar-item has-text-warning-dark">Home</a>
          <a className="navbar-item has-text-warning-dark">About</a>
          <a className="navbar-item has-text-warning-dark">Portfolio</a>
          <a className="navbar-item has-text-warning-dark">Experience</a>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link has-text-warning-dark">Contact</a>
            <div
              className="navbar-dropdown"
              style={{ backgroundColor: "#F0EBEB" }}
            >
              <a className="navbar-item has-text-warning-dark is-times-newromem">
                Address
              </a>
              <a className="navbar-item has-text-warning-dark is-cambria">
                e-mail
              </a>
              <a className="navbar-item has-text-warning-dark is-cambria">
                Contact-no
              </a>
              <hr className="navbar-divider" />
              <a className="navbar-item has-text-warning-dark is-cambria">
                Report an issue
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
