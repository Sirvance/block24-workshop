import { useState } from 'react'
import {puppyList} from './data.js'
import './App.css'
import './index.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null)
  console.log("puppyList: ", puppyList);
  console.log(setPuppies);
  console.log(featPupId);
  console.log("puppy id");
  
  
  function handleClick(puppyId) {
setFeatPupId(puppyId)

  }

  const selectedPuppy = puppies.find((pup) => pup.id === featPupId);


  return (
    
      <div className="App">
       {puppies.map((puppy) => {
          return (
           <p onClick={() => handleClick(puppy.id)} key={puppy.id}>{puppy.name}</p>);
        })
        }
        {selectedPuppy && (
      <div>
        <h2>{puppies.find((pup) => pup.id === featPupId).name}</h2>
        <ul>
          <li>Age: {puppies.find((pup) => pup.id === featPupId).age}</li>
          <li>Email: {puppies.find((pup) => pup.id === featPupId).email}</li>
        </ul>
      </div>
        )}</div>
  );
}

export default App
