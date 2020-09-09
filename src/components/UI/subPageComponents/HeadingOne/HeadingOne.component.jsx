// Import: Dependencies
import React from "react";

// Import: Styling
import "./HeadingOne.styles.scss";

// Import: Components
import Icon from "../../Icon/Icon.component";

// subPageComponent: HeadingOne
function HeadingOne(props) {
  //Render HeadingOne code
  return (
    <div className="HeadingOne">
      <div className="HeadingOne__container">
        <Icon icon={props.icon} />
        <span>{props.text}</span>
      </div>
    </div>
  );
}

// Export: HeadingOne
export default HeadingOne;
