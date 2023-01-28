import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";

function Navbar(){
    const navRef = useRef();

    const showNavbar = () =>{
        navRef.current.classList.toggle("responsive_nav");
    }
    return( 
        <header>
            <h3>My Pics</h3>
            <nav ref = {navRef}>
                <a href="/#">About me</a>
                <a href="/#">My School</a>
                <a href="/#">My Experience</a>
                <a href="/#">My Linkedin</a>
                <a href="/#">My work</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes/>
                </button>

            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    );

}
export default Navbar;