import { Link } from "react-router-dom"
import "./navbar.css"

function Navbar() {
  return (
    <div className="navbar">
        <div className="navContainer">
          <Link to={"/"} className="text-none">
          <span className="logo">yunBooking</span>
          </Link>
            
            <div className="navItems">
              {/* <Link to={"http://localhost:5173/login/"}>
                <button className="navButton">Register</button>
              </Link> */}
              <Link to={"http://localhost:5174/login/"}>
                <button className="navButton">ADMIN</button>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar

