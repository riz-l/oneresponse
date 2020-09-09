// Import: Dependencies
import React from "react";

// Import: Styling
import "./Sbar.styles.scss";

// Import: UI
import SubPageHeader from "../../UI/subPageComponents/SubPageHeader/SubPageHeader.component";
import SubPageSubHeader from "../../UI/subPageComponents/SubPageSubHeader/SubPageSubHeader.component";
import SubPageField from "../../UI/subPageComponents/SubPageField/SubPageField.component";

// subPage: Sbar
function Sbar() {
  // Render Sbar code
  return (
    <div className="Sbar">
      <SubPageHeader icon="fas fa-laptop-medical" text="SBAR" />
    </div>
  );
}

// Export: Sbar
export default Sbar;
