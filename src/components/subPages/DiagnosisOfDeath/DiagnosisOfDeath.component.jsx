// Import: Dependencies
import React from "react";

// Import: Styling
import "./DiagnosisOfDeath.styles.scss";

// Import: UI
import SubPageHeader from "../../UI/subPageComponents/SubPageHeader/SubPageHeader.component";
import SubPageSubHeader from "../../UI/subPageComponents/SubPageSubHeader/SubPageSubHeader.component";
import SubPageField from "../../UI/subPageComponents/SubPageField/SubPageField.component";

// subPage: DiagnosisOfDeath
function DiagnosisOfDeath() {
  // Render DiagnosisOfDeath code
  return (
    <div className="DiagnosisOfDeath">
      <SubPageHeader icon="fas fa-procedures" text="Diagnosis Of Death" />
    </div>
  );
}

// Export: DiagnosisOfDeath
export default DiagnosisOfDeath;
