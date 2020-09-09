// Import: Dependencies
import React from "react";

// Import: Styling
import "./HeadingTwo.styles.scss";

// subPageComponent: HeadingTwo
function HeadingTwo(props) {
  //Render HeadingTwo code
  return (
    <div className="HeadingTwo">
      <span>{props.text}</span>
    </div>
  );
}

// Export: HeadingTwo
export default HeadingTwo;
