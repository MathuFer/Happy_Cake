import { Link } from "react-router-dom";
import "../assets/css/nav.css"

export default function Nav() {
    return(
        <header>
            <nav>
                <Link to='/' style={{textDecoration:'none', color: 'white', fontSize:'1.3rem'}}  > 🏠 Home </Link>
                <Link to='/contacto' style={{textDecoration:'none', color: 'white', fontSize:'1.3rem'}} > 📓 Contacto </Link>
            </nav>
            <div>
                <h1>Happy Cake 🎂</h1>
            </div>
        </header>
    )
}