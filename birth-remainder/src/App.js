import React, {useState} from 'react'
import './App.css';
import {people} from './data'
function App() {
  const [listPeople,setPeople] = useState(people);
  
  return (
    <div className = "App">
      <div className = "container">
        <h3>{listPeople.length} birthdays today</h3>
        {listPeople.map(item => (
           <div className = "displayPeople" key = {item.id}>
           <div className = "image">
             <img src = {item.image} alt = "People"/>
           </div>
           <div className = "info">
             <h4 className="name">{item.name}</h4>
             <p className = "old">{item.age} years old</p>
           </div>
         </div>
        ) )}
        <button className = "clear" onClick = {() => setPeople([])}>Clear All</button>
      </div>
    </div>
  );
}

export default App;
