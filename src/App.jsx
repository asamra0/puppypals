import React, { useState } from "react";
import { puppyList } from "./data";

const App = () => {
  //JAVASCRIPT STUFF GOES HERE
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  const handleClick = (id) => {
    console.log("CLICK ME!");
    setFeatPupId(id);
  };

  const featuredPup = puppies.find((pup) => {
    return pup.id === featPupId;
  });
  console.log("featured", featuredPup);

  return (
    <div>
      <h1>Puppies</h1>
      {puppies.map((puppy) => {
        return (
          <p key={puppy.id} onClick={() => handleClick(puppy.id)}>
            {puppy.name}
          </p>
        );
      })}
      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;

// import ReactDOM from "react-dom/client"s

// const root = ReactDOM.createRoot(document.querySelector("#root"));

// root.render(<App />);
