import reactLogo from "../assets/react.svg"
import { Link, NavLink } from "react-router-dom";

function NavBar() {

    // func ไว้เช็คว่าเรา click link อันนี้อยู่ ก็คือปรับเเต่ง style ให้ link (Active link)
    // ที่เขียนข้างล่างนี้คือถ้าเราอยู่หน้าไหนที่เรากดหน้านั้นจะเป็นกรอบสีน้ำเงิน highlight คำอยู่
    // อันนี้เขียนแบบ arrow func ปล. จะเขียนเเบบบ func ธรรมดาก็ได้ 
    const activeLink = ( {isActive} )=> 
        isActive 
           ? "bg-blue-700 bg-opacity-60 rounded px-3 py-2"
           : "hover:bg-blue-700 hover:bg-opacity-20 rounded px-3 py-2";
    

    return (
        <header>
            <div className="flex mr-auto gap-x-2 font-semibold text-2xl">
                <Link to="/">
                    <img src={reactLogo} alt="React Logo" />
                </Link>
                React : Todo List
            </div>
            <ul className="hidden md:flex gap-x-6">
                <li>
                    <NavLink to="/" className={activeLink}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={activeLink}>About</NavLink>
                </li>
            </ul>
        </header>
    )

}

export default NavBar;