// Import: Dependencies
import React from "react";

// Import: Styling
import "./HeadingThree.styles.scss";

// subPageComponent: HeadingThree
function HeadingThree(props) {
  //Render HeadingThree code
  return (
    <div className="HeadingThree" style={{ paddingTop: `${props.paddingTop}` }}>
      <span>{props.text}</span>
    </div>
  );
}

// Export: HeadingThree
export default HeadingThree;
