import reactLogo from "../assets/react.svg"
import { Link } from "react-router-dom";

function NavBar() {
    return <header>
        <div className="flex mr-auto gap-x-2 font-semibold text-2xl">
            <img src={reactLogo} alt="React Logo" />
            React : Todo Lost
        </div>
        <ul className="hidden md:flex gap-x-6">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
    </header>
}

export default NavBar;