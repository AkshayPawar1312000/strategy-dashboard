import React from "react";
import StrategyCard from "./StrategyCard";
import "./StrategyList.css";

//The StrategyList component aggregates and displays strategies, showing each unique strategy with its occurrence count, by using the StrategyCard component.
const StrategyList = ({ strategies }) => {
  const strategyCount = strategies.reduce((acc, strategy) => {
    //So, acc is the object that accumulates the counts of each unique strategy in the strategies array.
    acc[strategy] = (acc[strategy] || 0) + 1; // increments the count of the current strategy in the acc object, initializing it to 1 if it doesn't exist yet.
    return acc;
  }, {});

  return (
    <div className="strategy-list">
      {Object.keys(strategyCount).map((name) => (
        <StrategyCard key={name} name={name} count={strategyCount[name]} />
      ))}
    </div>
  );
};

export default StrategyList;
