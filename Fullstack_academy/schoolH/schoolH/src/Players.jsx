import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPlayers } from "./playersSlice";
import Card from "./Card";

export default function Players() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.players.value);
  const [details, setDetails] = useState(null);

  useEffect(() => {
    dispatch(fetchAllPlayers());
  }, [dispatch]);

  return (
    <div id="playerList">
      <AddPlayerForm />
      {details ? (
        <Card player={details} goBack setDetails={setDetails} />
      ) : (
        <>
          {Array.isArray(data) &&
            data.map((player, index) => (
              <Card
                player={player}
                setDetails={setDetails}
                fetchAllPlayers={fetchAllPlayers}
                key={`player${index}`}
              />
            ))}
        </>
      )}
    </div>
  );
}
