import React from "react"
import {Link} from "react-router-dom"

const Navbar=()=>{
    return(
    <nav className="navbar bg-dark">
    <h1>
      <Link to="/"><i className="fas fa-code"></i> Developers Community</Link>
    </h1>
    <ul>
      <li><Link to="/!">Developers</Link></li>
      <li><Link to="/Register">Register</Link></li>
      <li><Link to="/Login">Login</Link></li>
    </ul>
    </nav>
    )
}

export default Navbar