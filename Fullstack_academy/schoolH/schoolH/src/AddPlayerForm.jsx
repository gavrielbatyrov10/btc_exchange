// AddPlayerForm.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPlayer } from "./playersSlice";
//import { addPlayer } from "./playersSlice"; // Import the addPlayer action creator

const AddPlayerForm = () => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addPlayer({
        name: e.target.name.value,
        imageUrl: e.target.imageUrl.value,
        breed: e.target.breed.value,
      })
    );
    setName("");
    setImageUrl("");
    setBreed("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Enter player's name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        name="breed"
        placeholder="Enter player's breed"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter image URL"
        name="imageUrl"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <button type="submit">Add Player</button>
    </form>
  );
};

export default AddPlayerForm;
