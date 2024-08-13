import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import React from "react";
import data from "./data";


function App() {
  const cards = data.map(obj => {
    return <Card 
      key={obj.id}
      obj={obj}
    />
  })

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="card-list">
        {cards}
      </div>
    </div>
  );
}

export default App;
