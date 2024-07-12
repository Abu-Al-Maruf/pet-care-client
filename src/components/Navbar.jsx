import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navLink = (
    <>
      <NavLink to={"/"} className="text-lg font-semibold hover:text-blue-700">
        Home
      </NavLink>
      <NavLink to={"/service"} className="text-lg font-semibold hover:text-blue-700">
        Service
      </NavLink>
      <NavLink to={"/about"} className="text-lg font-semibold hover:text-blue-700">
        About
      </NavLink>
      <NavLink to={"/login"} className="text-lg font-semibold hover:text-blue-700">
        login
      </NavLink>
    </>
  );
  return (
    <div className="flex items-center justify-between p-4 bg-gray-200">
      <Link
        to={"/"}
        className="text-2xl font-semibold flex flex-col items-center"
      >
        <img className="w-16" src={logo} alt="" />
      </Link>
      <div>
        <nav className="flex gap-6 mr-5">{navLink}</nav>
      </div>
    </div>
  );
};

export default Navbar;
