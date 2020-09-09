// Import: Dependencies
import React from "react";

// Import: Styling
import "./Notes.styles.scss";

// Import: UI
import SubPageHeader from "../../UI/subPageComponents/SubPageHeader/SubPageHeader.component";
import SubPageSubHeader from "../../UI/subPageComponents/SubPageSubHeader/SubPageSubHeader.component";
import SubPageField from "../../UI/subPageComponents/SubPageField/SubPageField.component";

// subPage: Notes
function Notes() {
  // Render Notes code
  return (
    <div className="Notes">
      <SubPageHeader icon="fas fa-sticky-note" text="Notes" />
    </div>
  );
}

// Export: Notes
export default Notes;
