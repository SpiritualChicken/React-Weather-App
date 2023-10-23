import react from "react";
import { Link } from "react-router-dom"

function NavBar () {
    return (
        <nav> 
            <Link exact to="/">Home</Link>
            <Link to="/favourties">Favourties</Link>
        </nav>
    )
}
export default NavBar