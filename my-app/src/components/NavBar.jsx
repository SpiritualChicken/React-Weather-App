import react from "react";
import { NavLink } from "react-router-dom"

function NavBar () {
    return (
        <nav className="navBar"> 
            <NavLink exact to="/" className="navItem">Home</NavLink>
            <NavLink to="/favourites" className="navItem">Favourites</NavLink>
        </nav>
    )
}
export default NavBar