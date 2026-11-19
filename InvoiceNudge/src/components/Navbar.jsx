
import { NavLink } from "react-router-dom";


function Navbar() {
  const links = ["home", "board", "add"];
  return (
    <nav className="navbar">
      <h1>InvoiceNudge</h1>

      <div className="nav-links">
        {links.map((link) => (
          <NavLink
            key={link}
            to={link === "home" ? "/" : `/${link}`}
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"
            }
          >
            {link}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
