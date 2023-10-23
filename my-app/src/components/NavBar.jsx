import react from "react";
import { NavLink } from "react-router-dom"

function NavBar () {
    return (
        <nav> 
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/favourties">Favourties</NavLink>
        </nav>
    )
}
export default NavBar