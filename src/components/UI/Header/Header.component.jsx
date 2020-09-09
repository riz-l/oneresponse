// Import: Dependencies
import React from "react";
import { Link } from "react-router-dom";

// Import: Styling
import "./Header.styles.scss";

// Import: UI
import Logo from "../Logo/Logo.component";
import UserDetails from "../UserDetails/UserDetails.component";

// UI: Header
function Header({ isOpen, setIsOpen }) {
  // Render Header code
  return (
    <div className="Header">
      <div className="Header__primary">
        <div className="Header__logo-container">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="Header__userdetails-containter">
          <UserDetails />
        </div>
      </div>
      <div className="Header__secondary">
        <div
          className="Header__patient-list-toggle"
          onClick={() => {
            setIsOpen((isOpen) => !isOpen);
          }}
        >
          <div className="Header__patient-list-icon-container">
            <div
              className={`${
                isOpen
                  ? `Header__icon-first-child-open`
                  : `Header__icon-first-child-closed`
              }`}
            />
            <div
              className={`${
                isOpen
                  ? `Header__icon-second-child-open`
                  : `Header__icon-second-child-closed`
              }`}
            />
            <div
              className={`${
                isOpen
                  ? `Header__icon-third-child-open`
                  : `Header__icon-third-child-closed`
              }`}
            />
          </div>
          <span>Patient List</span>
        </div>
        <span>Emergency Department</span>
      </div>
    </div>
  );
}

// Export: Header
export default Header;
