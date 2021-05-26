import React, {useState} from 'react'
import Categories from './Categories'
import {listMenu} from './data'
import './App.css';
import MenuItem from './MenuItem';
const categories = ['All', ...new Set(listMenu.map(item => item.category))]
const App = () => {
  const [menuItems,setMenuItems] = useState(listMenu)
  const [currentCate, setCurrentCate] = useState('All')
  const filerMenu = (category) => {
    if(category === 'All'){
      setMenuItems(listMenu)
    }
    else{
    const newMenuItems = listMenu.filter(item => item.category === category)  
    setMenuItems(newMenuItems)
    }
  }
  return (
    <div className = "App">
      <section className= "menu-section">
        <h1>Our Menu</h1>
        <Categories categories = {categories} filterMenu = {filerMenu}/>
        <div className="section-center">
          <MenuItem menu = {menuItems} />
        </div>
      </section>
    </div>
  )
}

export default App
