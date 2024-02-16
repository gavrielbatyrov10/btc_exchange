import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
export default function App() {
  const [count, setCount] = useState(0);
  const [selectedContactId, setSelectedContactId] = useState(null);

  useEffect(() => {
    console.log("Hello from useEffect");
  }, [count]);
  return (
    <>
      ContactList setSelectedContactId={setSelectedContactId}
      {selectedContactId ? <div>Selected Contact View</div> : <ContactList />}
    </>
  );
}
