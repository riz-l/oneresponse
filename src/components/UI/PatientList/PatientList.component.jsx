// Import: Dependencies
import React, { useState, useEffect } from "react";

// Import: Styling
import "./PatientList.styles.scss";

// Import: UI
import PatientItem from "../PatientItem/PatientItem.component";

// UI: PatientList
function PatientList({ isOpen, setSelectedPatient }) {
  // State = loading, patients
  const [loading, setLoading] = useState(true);
  const [patients, setPatients] = useState([]);

  // When PatientList renders
  // Fetch data from OneResponse API
  // If successful, patients === OneResponse API data, loading === false
  // If unsuccessful, catch error
  useEffect(() => {
    async function getPatientList() {
      setLoading(true);
      try {
        const oneResponseAPI =
          "https://cad-message-to-trust-test.azurewebsites.net/PatientDetails";
        const response = await fetch(oneResponseAPI);
        const data = await response.json();
        setPatients(data);
      } catch (error) {
        throw new Error("Patient list unavailable");
      }
      setLoading(false);
    }

    getPatientList();
  }, []);

  // If 'loading' === true, render loading message
  if (loading) {
    return (
      <div className="PatientList">
        <div className="PatientList__render-message">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  // Maps PD_Firstname's, PD_Surname's and Master_ePR_ID's from state
  const patientListRender = patients.map(
    ({ Master_ePR_ID, ...otherPatientListProps }) => (
      <div
        key={Master_ePR_ID}
        onClick={() => setSelectedPatient(Master_ePR_ID)}
      >
        <PatientItem {...otherPatientListProps} />
      </div>
    )
  );

  // Render Home code
  return (
    <div>
      <div
        className="PatientList"
        style={!isOpen ? { transform: "translateX(-100%)" } : null}
      >
        <div className="PatientList__wrapper">
          <span className="PatientList__header">
            Patients Created in last 72hrs
          </span>
          <span className="PatientList__lead">
            Please select from the list below:
          </span>
        </div>
        {patientListRender}
      </div>
    </div>
  );
}

// Export: PatientList
export default PatientList;
