import React from "react";
import { Link, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Assets/style.css";

const styles = {
  navbar: {
    padding: "8px",
    backgroundColor: "teal",
    textEmphasisColor: "white",
    color: "white",
    fontFamily: "serif",
  }
};

function NavTabs() {
  const location = useLocation();

  return (
    <nav classname="navbar navbar-expand-lg navbar-light bg-light">
      <a classname="navbar-brand" href="index.html">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"} style={styles.navbar}>
          Violet Valencia Cortes-Rios
        </Link>
      </a>
      <button classname="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span classname="navbar-toggler-icon"></span>
      </button>
      <div classname="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact
        </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
            >
              About
        </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/portfolio"
              className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
            >
              Portfolio
        </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavTabs;
