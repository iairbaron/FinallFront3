import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from './utils/ThemeContext'
import img from "../images/DH.png"

const Navbar = () => {
  const { theme,changeTheme } = useContext(ThemeContext) 

  const navbarClass = theme === 'dark' ? 'navbar-dark' : 'navbar-light'

  const styles = {

    link: {
      color: theme === 'dark' ? '#fff' : '#000',
      textDecoration: 'none',
      margin: '0 10px',
      fontSize: '18px',
      fontWeight: 'bold',
    },

  }

  return (
    <nav style={{width:"100vw", height:"100px", display:"flex",justifyContent:"space-around"}} >
      <img src={img} style={ {width:"20vw"}}/>
      <div style={{display:"flex", alignItems:"center"}}>
      <Link to='/' style={styles.link}>Inicio</Link>
      <Link to='/favs' style={styles.link}>Favoritos</Link>
      <Link to='/Contact' style={styles.link}> Contacto</Link>
      <button onClick={changeTheme}>Change theme</button>

      
      
      </div>
    </nav>
  )
}

export default Navbar
