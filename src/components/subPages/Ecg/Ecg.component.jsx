// Import: Dependencies
import React from "react";

// Import: Styling
import "./Ecg.styles.scss";

// Import: UI
import SubPageHeader from "../../UI/subPageComponents/SubPageHeader/SubPageHeader.component";
import SubPageSubHeader from "../../UI/subPageComponents/SubPageSubHeader/SubPageSubHeader.component";
import SubPageField from "../../UI/subPageComponents/SubPageField/SubPageField.component";

// subPage: Ecg
function Ecg() {
  // Render Ecg code
  return (
    <div className="Ecg">
      <SubPageHeader icon="fas fa-heartbeat" text="ECG" />
    </div>
  );
}

// Export: Ecg
export default Ecg;
