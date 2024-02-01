import React from "react";
import Player from "./Player";
import playersData from "./Players";
// mapping through all the elements in the array of players
const PlayersList = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {playersData.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;