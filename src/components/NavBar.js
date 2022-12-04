import React from "react";
import { Link } from "react-router-dom";

let NavBar = () => {
    return <React.Fragment>

        <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
            <div className="container">
             <Link to={'/'} className="navbar-brand">Home Page</Link>
                <div className="Collapse navbar-collapse">
                    <ul className="navbar-nav">
                        {/* <li className="nav-item">
                            <Link to={'/adminlist'} className="nav-link"  >Admin List</Link>
                        </li> &nbsp; &nbsp; &nbsp;
                        <li className="nav-item">
                            <Link to={'/user'} className="nav-link">User</Link>
                        </li> &nbsp; &nbsp; &nbsp;
                        <li className="nav-item">
                            <Link to={'/kart'} className="nav-link">Cart</Link>
                        </li> &nbsp; &nbsp; &nbsp; */}
                    </ul>

                </div> 
            </div>
        </nav>

    </React.Fragment>
}

export default NavBar;