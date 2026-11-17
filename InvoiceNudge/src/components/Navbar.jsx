
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>InvoiceNudge</h1>
      <div>
        <Link to="/">Board</Link>
        <Link to="/add">+ Add Invoice</Link>
      </div>
    </nav>
  );
}

export default Navbar;
