import React from 'react';
import NavLinks from './NavLinks';
import Link from 'next/link';

export interface ILink {
  name: string;
  to: string;
}
const Navbar = () => {
  const links: ILink[] = [
    {
      name: 'Homepage',
      to: '/',
    },
    {
      name: 'Evalautor',
      to: '/evaluator',
    },
  ];
  return (
    <header className="navbar bg-base-300">
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost text-xl">
          Academy Evaluator
        </Link>
      </div>
      <nav className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavLinks links={links} />
        </ul>
      </nav>

      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <button type="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </button>
          <ul className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-36">
            <NavLinks links={links} />
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
