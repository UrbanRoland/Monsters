import React from "react";
import PropTypes from "prop-types";

const ChosenElements = ({ property }) => {
  const { id, name, image } = property;
  return (
    <div id={`elements-${id}`} className="element">
      <img src={image} alt="element" />
      <p>{name}</p>
    </div>
  );
};
ChosenElements.prototype = {
  property: PropTypes.object.isRequired,
};
export default ChosenElements;
