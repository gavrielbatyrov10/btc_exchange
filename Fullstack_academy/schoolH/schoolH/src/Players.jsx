import React, { useEffect } from "react";
import { useState } from "react";
import {
  getSinglePlayer,
  getAllPlayers,
  deletePlayer,
  addPlayer,
} from "./features/playersSlice";
import { fetchAllPlayers } from "./features/playersSlice";

import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
export default function Players() {
  const data = useSelector((store) => {
    console.log("store", store);
    if (store.players.value) {
      return store.players.value;
    }
    return store.players;
  }); //5

  const [details, setDetails] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPlayers()); //1
  }, []);
  console.log("check", data);

  return (
    <div id="playerList">
      {/*one player */}
      {details ? (
        <Card player={details} goBack setDetails={setDetails} />
      ) : (
        <>
          {/*player list all of them */}
          {data.map((player, index) => {
            return (
              <Card
                player={player}
                setDetails={setDetails}
                fetchAllPlayers={fetchAllPlayers}
                key={`player${index}`}
              />
            );
          })}
        </>
      )}
    </div>
  );
}
