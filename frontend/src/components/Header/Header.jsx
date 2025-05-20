import { Link, NavLink } from 'react-router';
import ThemeSwitcher from './ThemeSwitcher';

function Header() {
  return (
    <div className="navbar bg-blue-500 dark:bg-black shadow-sm lg:px-[10%] relative top-0 border-b-2 border-black dark:border-blue-500 rounded-b-xl">
      {/* Mobile View */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><NavLink to="/">Home</NavLink></li>
            <li>
              <NavLink to="/services">Services</NavLink>
              {/* <ul className="p-2">
                <li><Link>Submenu 1</Link></li>
                <li><Link>Submenu 2</Link></li>
              </ul> */}
            </li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>
        <Link to="/" className="xl:text-3xl text-xl font-bold text-amber-300 dark:text-white">SimpliLearn</Link>
      </div>

      {/* Desktop View */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className='text-xl'>
            <NavLink
              to="/"
              className={({ isActive }) => `text-xl ${isActive ? "text-black border-b-2 border-black dark:text-amber-300 dark:border-b-2 dark:border-amber-300" : "text-white"}`}
            >
              Home
            </NavLink>
          </li>
          <li>
            {/* <details> */}
            <NavLink
              to="/services"
              className={({ isActive }) => `text-xl ${isActive ? "text-black border-b-2 border-black dark:text-amber-300 dark:border-b-2 dark:border-amber-300" : "text-white"}`}
            >
              Services
            </NavLink>
            {/* <ul className="p-2">
                <li><Link>Submenu 1</Link></li>
                <li><Link>Submenu 2</Link></li>
              </ul> */}
            {/* </details> */}
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => `text-xl ${isActive ? "text-black border-b-2 border-black dark:text-amber-300 dark:border-b-2 dark:border-amber-300" : "text-white"}`}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => `text-xl ${isActive ? "text-black border-b-2 border-black dark:text-amber-300 dark:border-b-2 dark:border-amber-300" : "text-white"}`}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ThemeSwitcher />
      </div>
    </div>
  )
}

export default Header
Header