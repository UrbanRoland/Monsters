import React from "react";
import PropTypes from "prop-types";
import "../css/elementsStyle.css";
const ChosenElements = ({ property }) => {
  const { id, name, image } = property;
  return (
    <div id={`elements-${id}`} className="element">
      <img src={image} alt="element" />
      <p className="elementName">{name}</p>
    </div>
  );
};
ChosenElements.prototype = {
  property: PropTypes.object.isRequired,
};
export default ChosenElements;
