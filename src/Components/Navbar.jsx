import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/globalContext'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal)
  console.log(state.navbgColor)
  return (
    <nav className={state.bgFlag}>
      <Link  to="/Home" style={{fontSize:"23px"}}>
        <span style={{color:"red"}} className='title'>D</span>
          H Odonto
      </Link>
      <div>
        <Link to="/Home">Home</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Favs">Favs</Link>
      <button onClick={()=> dispatch({type:state.bgFlag})}>{state.bgFlag=== "dark" ? "🌇": "🌃"}</button>
      </div>
    </nav>
  )
}

export default Navbar