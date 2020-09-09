// Import: Dependencies
import React from "react";

// Import: Styling
import "./Media.styles.scss";

// Import: UI
import SubPageHeader from "../../UI/subPageComponents/SubPageHeader/SubPageHeader.component";
import SubPageSubHeader from "../../UI/subPageComponents/SubPageSubHeader/SubPageSubHeader.component";
import SubPageField from "../../UI/subPageComponents/SubPageField/SubPageField.component";

// subPage: Media
function Media() {
  // Render Media code
  return (
    <div className="Media">
      <SubPageHeader icon="fas fa-camera" text="Media" />
    </div>
  );
}

// Export: Media
export default Media;
