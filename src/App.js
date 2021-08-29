import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../src/components/nav/Navbar.js';
import Footer from '../src/components/commonpages/footer/Footer.js';
import './App.css';
import IRWomanlist from './components/irwoman/IrWomanlist';
import NewEntroll from './components/commonpages/newenrollment/NewEntroll.js';
import Home from './components/pages/Home.js';
import Users from './components/acl/Users.js';
import AddUser from './components/acl/AddUser.js';
import Roles from './components/acl/Roles.js';
import AddRole from './components/acl/AddRole.js';
import Permissions from './components/acl/Permissions.js';
import AddPermission from './components/acl/AddPermission.js';
import Signin from './components/acl/Signin.js';
import Upload from './components/acl/Upload.js';
import Fgd from './components/fgd/Fgd.js';
function App() {
  return (
    <>
      <Router basename={'/ir'}>
        
        <Navbar/>

          <div className="nav-body-different"></div>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/irwoman-list" component={IRWomanlist}/>
            <Route path="/fgd-list" component={Fgd}/>
            <Route path="/new-enrollment" component={NewEntroll}/>
            <Route path="/user-list" component={Users}/>
            <Route path="/add-user" component={AddUser}/>
            <Route path="/role-list" component={Roles}/>
            <Route path="/add-role" component={AddRole}/>
            <Route path="/permission-list" component={Permissions}/>
            <Route path="/add-permission" component={AddPermission}/>
            <Route path="/signin" component={Signin}/>
            <Route path="/upload" component={Upload}/>
          </Switch>
        
        <Footer/>
      </Router>  
    </>
  );
}

export default App;
