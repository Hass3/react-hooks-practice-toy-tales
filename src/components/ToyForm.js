import React, {useState} from "react";

function ToyForm({onNewToy}) {
  const[name, setName] = useState('')
  const[image, setImg] = useState('')

  function handleSubmit(e){
    e.preventDefault()
    const newToy ={
      name: name,
      image: image
    }
    
    fetch("http://localhost:3001/toys", {
      method:"POST" ,
      headers : {'Content-Type': 'application/json'},
      body : JSON.stringify(newToy)
  })
    .then(r=> r.json())
    .then(toy=> onNewToy(toy))
    setName('');
    setImg('');
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={name}
          onChange={e=> setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={image}
          onChange={e=> setImg(e.target.value)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
