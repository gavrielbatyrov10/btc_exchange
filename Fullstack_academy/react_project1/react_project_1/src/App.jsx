import { useState } from "react";
import "./App.css";
import { puppyList } from "./data";

export default function App() {
  const [puppies, setPuppies] = useState(puppyList);
  console.log("puppyList: ", puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  // function handleClick() {
  //   setPuppies();
  // }
  const featPup = puppies.find((pup) => pup.id === featPupId);

  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);
  return (
    <div className="App">
      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
      {featPupId && <p>{featPupId}</p>}
      {puppies.map((puppy) => {
        console.log(puppy.id);
        console.log("puppy id: ", puppy.id);
        return (
          <p onClick={() => setFeatPupId(puppy.id)} key={puppy.id}>
            {puppy.name}
          </p>
        );
      })}
    </div>
  );
}
