import React from "react";
import "./StrategyCard.css";

//The StrategyCard component displays the name of a strategy along with the count of its occurrences,
//properly pluralizing "Strategy" based on the count.
const StrategyCard = ({ name, count }) => {
  return (
    <div className="strategy-card">
      <h3>{name}</h3>
      <p>
        {count} {count > 1 ? "Strategies" : "Strategy"}
      </p>
    </div>
  );
};

export default StrategyCard;
