
import React from 'react';
import { Link } from 'react-router'

const Nav = props=>
<nav className="navbar navbar-inverse navbar-static-top">
 <div className="container-fluid">
    <div className="navbar-header ">
      <a href="http://ga.co" className="navbar-brand"><img alt="Brand" src="/images/GA_logo.png" className="headerLogo" /></a>
    </div>

    <p className="navbar-text gaDisplayFont"><Link to="/todo">React To-Do Demo</Link></p>
    <p className="navbar-text navbar-right navbar-last">Signed in as <Link to="/login" className="navbar-link"> Guest </Link> <span className="glyphicon glyphicon-user"></span></p>

    <a href="https://github.com/ga-wdi-exercises/react_to-do"><img className="githubBanner" src="https://camo.githubusercontent.com/365986a132ccd6a44c23a9169022c0b5c890c387/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f7265645f6161303030302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png" /></a>
  </div>
</nav>

export default Nav;
