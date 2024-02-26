import React from "react";
import { deletePlayer } from "./playersSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Card({
  player,
  goBack,
  details,
  setDetails,
  fetchAllPlayers,
}) {
  console.log("card", player);
  const dispatch = useDispatch();
  const { id, name, imageUrl, cohortId, alt } = player; //0, 1, 2, 3
  const detailsHandler = (player) => {
    setDetails(player);
  };

  const deleteHandler = async (playerId) => {
    console.log("click");
    dispatch(deletePlayer(playerId));
  };

  return (
    <div className={"card"}>
      <h4> {name}</h4>
      <img src={imageUrl} alt={alt} />
      {details && <p>{cohortId}</p>}

      {goBack ? (
        <button onClick={() => setDetails(null)}>go back</button>
      ) : (
        <>
          <button onClick={() => detailsHandler(player)}>Details</button>
          <button onClick={() => deleteHandler(id)}>Delete</button>
        </>
      )}
    </div>
  );
}
