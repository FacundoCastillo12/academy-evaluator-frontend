import React from 'react';
import { ILink } from './Navbar';
import Link from 'next/link';

type INavLinksProps = {
  links: ILink[];
};
const NavLinks = ({ links }: INavLinksProps) => {
  return (
    <>
      {links.map((link) => (
        <li key={link.to}>
          <Link href={link.to} data-cy={link.name}>
            {link.name}
          </Link>
        </li>
      ))}
    </>
  );
};

export default NavLinks;
