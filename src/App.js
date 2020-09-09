// Import: Dependencies
import React, { useState } from "react";

// Import: Styling
import "./index.scss";

// Import: pages
import Home from "./components/pages/Home/Home.component";

// Import: UI
import Header from "./components/UI/Header/Header.component";
import PatientList from "./components/UI/PatientList/PatientList.component";

// Component: App
function App() {
  // State = isOpen, selectedPatient
  const [isOpen, setIsOpen] = useState(true);
  const [selectedPatient, setSelectedPatient] = useState(null);

  // Render App code
  return (
    <div className="App">
      <div className="App__header">
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div
        className="App__layout"
        style={
          !isOpen
            ? {
                gridTemplateColumns: "0 1fr",
              }
            : null
        }
      >
        <div className="App__patient-list">
          <PatientList
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setSelectedPatient={setSelectedPatient}
          />
        </div>
        <div className="App__report-container">
          <Home selectedPatient={selectedPatient} />
        </div>
      </div>
    </div>
  );
}

// Export: App
export default App;
