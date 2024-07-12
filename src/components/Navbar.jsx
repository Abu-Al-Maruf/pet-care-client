import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const { user, logOut } = useAuth();

  const handleLogout = () => {
    logOut()
  }
  const navLink = (
    <>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? "text-lg font-semibold py-1 px-4 rounded bg-orange-400 text-white"
            : "text-lg font-semibold py-1 px-4 rounded hover:bg-orange-400 hover:text-white"
        }
      >
        Home
      </NavLink>
      <NavLink
        to={"/services"}
        className={({ isActive }) =>
          isActive
            ? "text-lg font-semibold py-1 px-4 rounded bg-orange-400 text-white"
            : "text-lg font-semibold py-1 px-4 rounded hover:bg-orange-400 hover:text-white"
        }
      >
        Services
      </NavLink>
      <NavLink
        to={"/about"}
        className={({ isActive }) =>
          isActive
            ? "text-lg font-semibold py-1 px-4 rounded bg-orange-400 text-white"
            : "text-lg font-semibold py-1 px-4 rounded hover:bg-orange-400 hover:text-white"
        }
      >
        About
      </NavLink>
      {user ? (
        <NavLink
          to={"/"}
          onClick={handleLogout}
          className="text-lg font-semibold py-1 px-4 rounded hover:bg-orange-400 hover:text-white"
        >
          Logout
        </NavLink>
      ) : (
        <NavLink
          to={"/login"}
          className={({ isActive }) =>
            isActive
              ? "text-lg font-semibold py-1 px-4 rounded bg-orange-400 text-white"
              : "text-lg font-semibold py-1 px-4 rounded hover:bg-orange-400 hover:text-white"
          }
        >
          Login
        </NavLink>
      )}
    </>
  );
  return (
    <div className="flex items-center justify-between p-4 bg-gray-200 shadow-lg">
      <Link
        to={"/"}
        className="text-2xl font-semibold flex flex-col items-center"
      >
        <img className="w-16" src={logo} alt="" />
      </Link>
      <div>
        <nav className="hidden sm:flex gap-6 mr-5 ">{navLink}</nav>
        <span className="sm:hidden flex">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </span>
      </div>
      {isOpen && (
        <nav className="flex md:hidden flex-col fixed top-0 left-0  h-screen p-10 pr-20 transition-all bg-blue-400 z-20">
          {navLink}
        </nav>
      )}
    </div>
  );
};

export default Navbar;
