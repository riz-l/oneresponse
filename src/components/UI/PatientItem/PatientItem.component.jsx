// Import: Dependencies
import React from "react";

// Import: Styling
import "./PatientItem.styles.scss";

// Import: UI
import Icon from "../Icon/Icon.component";

// UI: PatientItem
function PatientItem({
  PD_Firstname,
  PD_Surname,
  PD_Gender,
  PD_DOB,
  ePR_CallSign,
}) {
  // Render PatientItem code
  return (
    <div className="PatientItem">
      <div className="PatientItem__icon">
        <Icon icon="fas fa-user-alt" />
      </div>
      <div className="PatientItem__container">
        <div className="PatientItem__name-container">
          <div className="PatientItem__name">
            <span className="PatientItem__forename">
              {PD_Firstname ? (
                PD_Firstname
              ) : (
                <span className="PatientItem__name-undisclosed">Firstname</span>
              )}
            </span>
            <span className="PatientItem__surname">
              {PD_Surname ? (
                PD_Surname
              ) : (
                <span className="PatientItem__name-undisclosed">Surname</span>
              )}
            </span>
          </div>
          <div className="PatientItem__other-container">
            <span className="PatientItem__other">
              {PD_Gender ? (
                PD_Gender
              ) : (
                <span className="PatientItem__other-undisclosed">Gender</span>
              )}
            </span>
            <span className="PatientItem__other">
              {PD_DOB ? (
                PD_DOB
              ) : (
                <span className="PatientItem__other-undisclosed">
                  Date of Birth
                </span>
              )}
            </span>
          </div>
        </div>
        <div className="PatientItem__status">
          <span>
            {ePR_CallSign ? (
              ePR_CallSign
            ) : (
              <span className="PatientItem__status-undisclosed">
                ePR CallSign
              </span>
            )}
          </span>
          <span>Status:</span>
        </div>
      </div>
    </div>
  );
}

// Export: PatientItem
export default PatientItem;
