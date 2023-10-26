import react from "react";
import { NavLink } from "react-router-dom"

function NavBar () {
    return (
        <nav className="navBar"> 
            <NavLink exact to="/" className="navItem">Home</NavLink>
            <NavLink to="/favourties" className="navItem">Favourties</NavLink>
        </nav>
    )
}
export default NavBar