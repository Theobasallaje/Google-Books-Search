import React from "react";
import './Nav.scss'

function Nav() {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          {/* <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg> */}
          <svg className="booksLogo" xmlns="http://www.w3.org/2000/svg" width="42.735" height="42.735"><path d="M19.191 40.649c0 .752.643 1.4 1.395 1.4h5.927c.753 0 1.365-.648 1.365-1.4v-1.582H19.19l.001 1.582zM6.329 6.392H1.363C.611 6.392 0 7.057 0 7.809v2.473h7.65V7.808c.001-.751-.569-1.416-1.321-1.416zM.001 40.649c0 .752.611 1.4 1.363 1.4H6.33c.752 0 1.322-.648 1.322-1.4V16.116H.002L.001 40.649zM14.98 6.392h-3.044c-.752 0-1.302.666-1.302 1.418v4.027h5.705V7.81c-.001-.752-.607-1.418-1.359-1.418zM10.633 40.649c0 .752.55 1.4 1.302 1.4h3.044c.752 0 1.358-.648 1.358-1.4V14.56h-5.705l.001 26.089zM26.513.686h-5.927c-.752 0-1.395.604-1.395 1.356v30.412h8.688V2.042A1.36 1.36 0 0026.513.686zM36.963 7.208a1.36 1.36 0 00-1.579-1.102l-4.889.87a1.363 1.363 0 00-1.103 1.579L29.826 11l7.57-1.347-.433-2.445zM42.714 39.542l-4.306-24.209-7.57 1.346 4.307 24.209c.131.74.838 1.234 1.58 1.104l4.887-.871a1.365 1.365 0 001.102-1.579z"/></svg>
          <span className="font-semibold text-xl tracking-light">Google Books Search</span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a href="/" className="block lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Search
            </a>
            <a href="/books/saved" className="block lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Saved Books
            </a>
          </div>
          Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
        </div>
      </nav>
      {/* <nav className="bg-blue-100 fixed-top">
      <a className="navbar-brand" href="/">
        Search
      </a>
      <a className="navbar-brand" href="/books/saved">
        Saved Books
      </a>
    </nav> */}
    </>
  );
}

export default Nav;