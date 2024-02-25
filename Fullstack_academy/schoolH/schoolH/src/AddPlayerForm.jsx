// Form component
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPlayer } from "./features/playersSlice";

const AddPlayerForm = () => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPlayer({ name, imageUrl }));
    setName("");
    setImageUrl("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter player's name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <button type="submit">Add Player</button>
    </form>
  );
};

export default AddPlayerForm;
