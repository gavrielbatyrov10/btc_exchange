import React from "react";

export default function Card({ player, goBack, setDetails, fetchAllPlayers }) {
  console.log("card", player);
  const { id, name, imageUrl, alt } = player; //0, 1, 2, 3
  const detailsHandler = (player) => {
    setDetails(player);
  };

  const deleteHandler = async (playerId) => {
    try {
      const response = await fetch(API_URL + "/players/" + playerId, {
        method: "DELETE",
      });
      const result = await response.json();
      fetchAllPlayers();
    } catch (err) {
      console.error(
        `Whoops, trouble removing player #${playerId} from the roster!`,
        err
      );
    }
  };

  return (
    <div className={"card"}>
      <h4> {name}</h4>
      <img src={imageUrl} alt={alt} />
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
