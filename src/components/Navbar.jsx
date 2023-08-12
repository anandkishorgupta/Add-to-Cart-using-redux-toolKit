import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
const Navbar = () => {
  const { cart } = useSelector((state) => state)
  return (
    <div>
      <nav className="flex flex-row justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to={"/"}>
          <div className="ml-5">
            <img src={Logo} alt="" className="w-40 object-contain" />
          </div>
        </NavLink>
        <div className="flex items-center font-medium text-slate-100 mr-5  gap-x-6 relative">
          <NavLink to={"/"}>
            <p>Home</p>
          </NavLink>
          <NavLink to={"/cart"}>
            <FaShoppingCart  className="text-2xl"/>
            {
              cart.length > 0 &&
              <span className=" absolute -right-2  -top-1 bg-green-600 text-xs w-5 h-5 rounded-full animate-bounce flex justify-center items-center">{cart.length}</span>
            }
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
