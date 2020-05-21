import React, {useState, useEffect} from 'react';
import './App.css';


function Item({ match }) {
   
  useEffect(()=>{
      fetchItem();
      //console.log(match);
},[]);

const [item, setItem] = useState([]);



const fetchItem = async () =>{
  const fetchItem = await fetch(``);
  const item = await fetchItem.json();
  setItem(item);
  console.log(item);
};

  return (
    <div>
        <h1>{item.name}</h1>
    </div>
  );
}

export default Item;