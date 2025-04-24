import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="section-container">
      <nav className="nav-container">
        <div className="logo-container">
          <Link>Logo</Link>
        </div>
        <div className="nav-items-info">
          <ul>
            <Link>
              <li>Home</li>
            </Link>
            <Link>
              <li>About</li>
            </Link>
            <Link>
              <li>Contact</li>
            </Link>
            <Link>
              <li>Movies</li>
            </Link>
          </ul>
          </div>
          <div className="nav-sign-options">
            <ul>
            <Link >
              <li>Login</li>
            </Link>
            <Link>
              <li>Sign Up</li>
            </Link>
            </ul>
          </div>
        
      </nav>
    </section>
  );
};

export default Navbar;
