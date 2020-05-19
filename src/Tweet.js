import React from 'react';
import './App.css';

function Tweet({name, message, likes}){
    return(
        <div className="tweet">
            <h1>{name}</h1>
            <p>{message}</p>
            <h3>{"likes: "+likes}</h3>
        </div>
    );
}

export default Tweet;