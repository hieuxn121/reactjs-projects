import React from 'react'
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import About from './pages/About'
import DetailCocktail from './pages/DetailCocktail'
import Home from './pages/Home'
import Error from './pages/Error'
import Navbar from './components/Navbar'
import './App.css'
const App = () => {
  return (
    <BrowserRouter>
    <div className = "App">
      <Navbar/>
      <div className ="container">
        <Switch>
          <Route exact path = "/" component = {Home}/>
          <Route path = "/about" component = {About}/>
          <Route path = "/cocktail/:id" component = {DetailCocktail}/>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </div>
      </div>
    </BrowserRouter>
  )
}

export default App
