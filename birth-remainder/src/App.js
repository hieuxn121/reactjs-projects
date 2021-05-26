import React, {useState, useEffect} from 'react'
import './App.css';
import {people} from './data'
import Loading from './Loading'
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [listPeople,setPeople] = useState(people);
  const [loading, setLoading] = useState(true)
  const deleteItem = (id) => {
    const newPeople = listPeople.filter(item => item.id !== id)
    console.log(newPeople)
    setPeople(newPeople)
  }
  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setPeople(listPeople)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  useEffect(() => {
    fetchTours()
  }, [])
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  return (
    <div className = "App">
      <div className = "container">
        <h3>{listPeople.length} birthdays today</h3>
        {listPeople.map((item,key) => (
           <div className = "displayPeople" key = {item.id}>
           <div className = "image">
             <img src = {item.image} alt = "People"/>
           </div>
           <div className = "info">
             <h4 className="name">{item.name}</h4>
             <p className = "old">{item.age} years old</p>
             <button onClick = {()=>deleteItem(item.id)}>Delete</button>
           </div>
         </div>
        ) )}
        {listPeople.length > 0 ? 
        <button className = "clear" onClick = {() => setPeople([])}>Clear All</button>: 
        <button className = "clear" onClick = {() => setPeople(people) }>Refresh</button> 
        }
      </div>
    </div>
  );
}

export default App;
