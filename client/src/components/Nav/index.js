import React from "react";

function Nav() {
  return (
    <nav className="bg-blue-100 fixed-top">
      <a className="navbar-brand" href="/">
        Search
      </a>
      <a className="navbar-brand" href="/books/saved">
        Saved Books
      </a>
    </nav>
  );
}

export default Nav;