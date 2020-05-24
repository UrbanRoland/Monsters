import React from "react";

const MonstersList = ({ property }) => {
  const { name } = property;
  return (
    <div className="element">
      <p>{name}</p>
    </div>
  );
};

export default MonstersList;
