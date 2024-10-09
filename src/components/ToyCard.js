import React, { useState } from "react";


function ToyCard({name, img, likes, id, onDonateToy, toy}) {
const [liked, setLike] = useState(likes)
  function onDonate(){
    fetch(`http://localhost:3001/toys/${id}`,{
      method:"DELETE"
    })
    .then(r=>r.json())
    .then(()=>onDonateToy(toy))
  }

  
  function onLike(){
    
    setLike((like)=> like +1)
     const newLike ={
      likes : liked +1
      }
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH", 
      headers : {'Content-Type': 'application/json'},
      body: JSON.stringify(newLike)
  })
  }
  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={img}
        alt={name}
        className="toy-avatar"
      />
      <p>{liked} Likes </p>
      <button onClick={onLike} className="like-btn">Like {"<3"}</button>
      <button onClick={onDonate} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
