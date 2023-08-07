import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <NavLink to={"/"}>
          <img src={Logo} alt="" className="w-40 object-contain" />
        </NavLink>
        <div>
          <NavLink to={"/"}>
            <p>Home</p>
          </NavLink>
          <NavLink to={"/cart"}>
            <FaShoppingCart />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
