import React from 'react';
import { Link } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import '../country.css';

const Navigation = props => {
  return (
    <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
                <Link className="navbar-brand" to="/">Country App</Link>
            </div>
            <div className="collapse navbar-collapse show">
                <ul className="nav navbar-nav">
                    <li><Link to="/countries">Countries</Link></li>
                    <li><Link to="/continents">Continents</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
      </nav>
      <div className="container-fluid">
          {props.children}
      </div>
    </div>
  );
};

export default Navigation;