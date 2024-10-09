import React, {useEffect} from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys , setToys, onDel, onLike}) {

  useEffect(()=>{
    fetch("http://localhost:3001/toys")
    .then(r=>r.json())
    .then(toys => setToys(toys))
  }, [])


  return (
    <div id="toy-collection">{toys.map(toy=>
     <ToyCard 
     key={toy.id}
     id={toy.id}
     name={toy.name}
     img={toy.image}
     likes={toy.likes}
     onDonateToy={onDel}
     toy={toy}
     onLiked = {onLike}
     />)}</div>
  );
}

export default ToyContainer;
