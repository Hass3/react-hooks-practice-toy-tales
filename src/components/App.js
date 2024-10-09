import React, { useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const[onToys, setOnToys] = useState([]);
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function onAddToy(newToy){
    const updatedToys = [...onToys, newToy]
    setOnToys(updatedToys)
  }

  function onDonateToy(donated){
    const updatedToys = onToys.filter(toy => toy.id !== donated.id)
    setOnToys(updatedToys)
  }

  function onLikeToy(liked){
    const updatedToys = onToys.map(toy=>{
      if(toy.id === liked.id){
        return liked
      }else{
        return toy
      }   
    })
    setOnToys(updatedToys)
  }



  return (
    <>
      <Header />
      {showForm ? <ToyForm onNewToy={onAddToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer onLike={onLikeToy} onDel={onDonateToy} toys = {onToys}  setToys = {setOnToys}/>
    </>
  );
}

export default App;
