import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
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
