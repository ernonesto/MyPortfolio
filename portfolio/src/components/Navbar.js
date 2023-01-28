import {FaBars, FaTimes} from "react-icons/fa";

function Navbar(){
    return( 
        <header>
            <h3>My Pics</h3>
            <nav>
                <a href="/#">About me</a>
                <a href="/#">My School</a>
                <a href="/#">My Experience</a>
                <a href="/#">My Linkedin</a>
                <a href="/#">My work</a>
                <button>
                    <FaTimes/>
                </button>

            </nav>
            <button>
                <FaBars/>
            </button>
        </header>
    );

}
export default Navbar;