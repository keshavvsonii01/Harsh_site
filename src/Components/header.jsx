import React from "react";
import "../css/header.css";

export const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <div className="Header">
                <div className="logo">
                  <a className="navbar-brand" href="">
                    <img className="header-logo" src="./images/2.png" />
                  </a>
                </div>

                <div className="navigate">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        Home
                      </a>
                      <a className="nav-link" href="#services">
                        Our Services
                      </a>
                      <a className="nav-link" href="#team">
                        Our Team
                      </a>
                      <a className="nav-link" href="#work">
                        Our Work
                      </a>
                      <a className="nav-link" href="#blog">
                        Blog
                      </a>
                    </div>
                    <button className="header_btn">
                      <span href="">Request a Free Quote</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
