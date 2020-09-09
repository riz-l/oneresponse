// Import: Dependencies
import React from "react";
import { NavLink } from "react-router-dom";

// Import: Styling
import "./ReportHeader.styles.scss";

// Import: Components
import Icon from "../Icon/Icon.component";

// UI: ReportHeader
function ReportHeader() {
  //Render ReportHeader code
  return (
    <div className="ReportHeader">
      <ul className="ReportHeader__options">
        <NavLink
          activeStyle={{
            borderTop: "3px solid #569fd3",
          }}
          className="ReportHeader__option"
          to="/sbar"
        >
          <Icon icon="fas fa-laptop-medical" />
          <li>SBAR</li>
        </NavLink>
        <NavLink
          activeStyle={{ borderTop: "3px solid #569fd3" }}
          className="ReportHeader__option"
          to="/patient-report"
        >
          <Icon icon="fas fa-file-medical-alt" />
          <li>Report</li>
        </NavLink>
        <NavLink
          activeStyle={{ borderTop: "3px solid #569fd3" }}
          className="ReportHeader__option"
          to="/notes"
        >
          <Icon icon="fas fa-sticky-note" />
          <li>Notes</li>
        </NavLink>
        <NavLink
          activeStyle={{ borderTop: "3px solid #569fd3" }}
          className="ReportHeader__option"
          to="/media"
        >
          <Icon icon="fas fa-camera" />
          <li>Media</li>
        </NavLink>
        <NavLink
          activeStyle={{ borderTop: "3px solid #569fd3" }}
          className="ReportHeader__option"
          to="/ecg"
        >
          <Icon icon="fas fa-heartbeat" />
          <li>ECG</li>
        </NavLink>
        <NavLink
          activeStyle={{ borderTop: "3px solid #569fd3" }}
          className="ReportHeader__option"
          to="/diagnosis-of-death"
        >
          <Icon icon="fas fa-procedures" />

          <li>DoD</li>
        </NavLink>
      </ul>
    </div>
  );
}

// Export: ReportHeader
export default ReportHeader;
