import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const links = [
    {
      name: "Home",
      route: "/",
    },
    { name: "About", route: "/" },
    { name: "Contact", route: "/contact" },
  ];

  return (
    <header>
      <div className="flex justify-between px-12 py-3 items-center">
        <div>
          <h1 className="text-sm">THAD-LEO INTEGRATED CONCEPT</h1>
        </div>
        <div className="flex justify-between items-center">
          {links.map((link, i) => (
            <Link
              to={link.route}
              className="text-sm px-3 text-gray-800"
              key={i}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
