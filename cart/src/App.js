import React, {useState,useEffect} from 'react'
import Navbar from './components/Navbar'
import './App.css'
import CartContent from './components/CartContent'
import {listProducts} from './data'
const App = () => {
  const [products, setProducts] = useState(listProducts)
  const increAmount = (id) => {
    for(var i = 0; i< products.length ; i++){
      if(products[i].id === id)
        products[i].amount++
    }
    const newProducts = [...products];
    setProducts(newProducts)
    }
  const decreAmount = (id) => {
    for(var i = 0; i< products.length ; i++){
      if(products[i].id === id)
        products[i].amount > 0 ? (products[i].amount--) : (products[i].amount = 0)
    }
    const newProducts = [...products];
    setProducts(newProducts)
    }
  const nbProducts = products.map(item=>item.amount).reduce((acc,item)=>acc+=item)
  const deleteAll = () => setProducts([])
  return (
    <div className = "App">
      <Navbar nbProducts = {nbProducts}/>
      <CartContent 
      listProducts = {products}
      increAmount = {increAmount}
      decreAmount = {decreAmount}
      deleteAll = {deleteAll}/>
    </div>
  )
}

export default App
