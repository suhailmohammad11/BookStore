import "./NavbarStyles.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <div className="Logo">
        <h1>BookStore</h1>
      </div>
      <div className="menu">
        <Link to="/home">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;
