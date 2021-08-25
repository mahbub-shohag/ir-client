import React from 'react'
import logo from '../../asset/images/logo.ico';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../asset/css/style.css';
import '../../asset/fonts/font-awesome-4.7.0/css/font-awesome.css';
import ".../../../node_modules/jquery/dist/jquery.min.js";
import "../../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import '../../../node_modules/popper.js';
import './Navbar.css'
import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom';
function Navbar() {
    const username =sessionStorage.getItem("username");
    //const role = sessionStorage.getItem("role");
    const role = "ROLE_ADMIN";

    const signout = () =>{
        sessionStorage.clear();
        window.location.href = "/rammps/";
    }
    return (
            <nav className="navbar navbar-expand-lg bg-light navbar-light sticky-top theme-color">
                <div className="navbar-brand">
                    <Link  to="/" title="JiVitA">
                    <img src={logo} />    
                    <h1>IR</h1>
                    </Link>
                </div>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ml-auto">
                    
                    {role == "ROLE_ADMIN" || role == "ROLE_FGD" ? (
                    <li className="nav-item">
                        <Link className="nav-link" to="new-enrollment"><i className="fa fa-wpforms" aria-hidden="true"></i> New Enrolement</Link>
                    </li>
                    ):(null)}
    

                    {role == "ROLE_ADMIN" || role == "ROLE_FGD" ? (
                    <li className="nav-item">
                        <Link className="nav-link" to="fgd-list"><i className="fa fa-list-ol" aria-hidden="true"></i> FGD LIST</Link>
                    </li>
                    ):(null)}
    

                    {role == "ROLE_ADMIN" || role == "ROLE_CHW" ? (
                    <li className="nav-item">
                        <Link className="nav-link" to="irwoman-list"><i className="fa fa-female" aria-hidden="true"></i> IR WOMAN LIST</Link>
                    </li>
                    ):(null)}

                    {/* {role == "ROLE_ADMIN" || role == "ROLE_CALLER" ? (
                    <li className="nav-item">
                        <Link className="nav-link" to="participant-list"><i className="fa fa-female" aria-hidden="true"></i> Caller List</Link>
                    </li>
                    ):(null)} */}

                    {role == "ROLE_ADMIN" ? (
                    <li className="nav-item dropdown">
                        <a className="nav-link" to="#" id="navbardrop" data-toggle="dropdown"><i className="fa fa-key" aria-hidden="true"></i> ACL <i className="fa fa-caret-down" aria-hidden="true"></i>
                        </a>
                        <div className="dropdown-menu">
                        <Link className="dropdown-item" to="caller-tlpin-allocation"><i className="fa fa-link" aria-hidden="true"></i> Caller-TLPIN</Link>
                        <Link className="dropdown-item" to="user-list"><i className="fa fa-user" aria-hidden="true"></i> User</Link>
                        <Link className="dropdown-item" to="role-list"><i className="fa fa-tasks" aria-hidden="true"></i> Role</Link>
                        <Link className="dropdown-item" to="permission-list"><i className="fa fa-lock" aria-hidden="true"></i> Permission</Link>
                        <Link className="dropdown-item" to="upload"><i className="fa fa-upload" aria-hidden="true"></i> Upload Participants</Link>
                        </div>
                    </li>
                    ):(null)}    

                    {username == undefined ? (    
                    <li>
                        <Link className="nav-link" to="/signin"><i className="fa fa-sign-in"></i> Signin</Link>
                    </li>
                    ):
                    <li>
                        <button className="btn btn-sm" onClick={signout}>Signout</button>
                    </li>
                    }
                    </ul>
                </div> 
            </nav>
            
    )
}
export default Navbar;   