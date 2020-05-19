import React, {useState} from 'react';
import Tweet from './Tweet';

function App(){
  // const [users] = useState([
  //   {name: 'Ernestas', message:'I am Ernestas', likes:10},
  //   {name: 'Kamile', message:'I am Kamile, my first letter', likes:11},
  //   {name: 'Rima', message:'I am Rima, here is my message', likes: 12}
  // ]);

  const users = [
    {name: 'Ernestas', message:'I am Ernestas', likes:10},
    {name: 'Kamile', message:'I am Kamile, my first letter', likes:11},
    {name: 'Rima', message:'I am Rima, here is my message', likes: 12}
  ];  

  
  return(
    <div className="app">
      {users.map(user => (
        <Tweet name={user.name} message={user.message} likes={user.likes} />
      ))}
    </div>
  );
}

export default App;