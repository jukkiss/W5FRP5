import Header from "./Header";
import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-center">
          <Header />
          <PageLinks parentClass="nav-link" />
          {/* Add NavLink for Add Tour */}
          <NavLink to="/addtour" className="nav-link">
            Add Tour
          </NavLink>
          <SocialLinks />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;