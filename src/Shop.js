import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';


function Shop() {

  useEffect(()=>{
  fechItems();
},[])

const [items, setItems] = useState([]);



const fechItems = async () =>{
  const data = await fetch('https://fortnite-api.theapinetwork.com/store/get'
  // , { 
  //   method: 'GET', 
  //   headers: new Headers({
  //     'Authorization': '52fe88d3-15b275a6-d381cbbb-a894f0c0'
  //   })
  // }
  );
  const items = await data.json();
  console.log(items.data);
  setItems(items.data);
};

  return (
    <div>
      <h1>Shop page</h1>
      {items.map(item =>(
        <h1 key={item.itemId}>
          <Link to={`shop/${item.itemId}`}>{item.item.name}</Link>
        </h1>
      ))}
    </div>
  );
}

export default Shop;