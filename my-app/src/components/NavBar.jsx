import react from "react";
import { NavLink } from "react-router-dom"

function NavBar () {
    return (
        <nav className="navBar"> 
            <NavLink exact to="/" className="navItem">Home</NavLink>
            <NavLink to="/favourites" className="navItem">favourites</NavLink>
        </nav>
    )
}
export default NavBar