import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPlayers } from "./playersSlice";
import Card from "./Card";
import AddPlayerForm from "./AddPlayerForm";

export default function Players() {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    //console.log("state", state);
    return state.players.players;
  });
  const [details, setDetails] = useState(null);

  //console.log("data", data);
  useEffect(() => {
    dispatch(fetchAllPlayers());
  }, [dispatch]);

  return (
    <div id="playerList">
      {!details && <AddPlayerForm />}

      {details ? (
        <Card
          player={details}
          goBack
          details={details}
          setDetails={setDetails}
        />
      ) : (
        <>
          {Array.isArray(data) &&
            data.map((player, index) => (
              <Card
                player={player}
                setDetails={setDetails}
                details={details}
                fetchAllPlayers={fetchAllPlayers}
                key={`player${index}`}
              />
            ))}
        </>
      )}
    </div>
  );
}
