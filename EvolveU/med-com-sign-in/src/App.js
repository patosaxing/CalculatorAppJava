import React from 'react'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import {Route, Link} from 'react-router-dom'


function App() 
{

    return (
      <div className="App">
        <div className= "main">
          <Route exact path = "/home" compontent = {Home}/>
          <Route exact path= "/login" component = {Login}/>
          <Route exact path = "/register" component = {Register}/>
        </div>
      </div>
    );
  }
  
  
  export default App