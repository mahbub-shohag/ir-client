import React from 'react'
import axios from 'axios';
import { useHistory } from "react-router-dom";
 function Signin() {
    const history = useHistory();
    const handleLogin = (event) =>{
        event.preventDefault();
        const formdata = new FormData(event.target);
        const auth = {
            username: "mobile",
            password: "pin",
          };
       const data = {
        grant_type: "password",
        username:formdata.get("username"),
        password:formdata.get("password")
      };
      let u = new URLSearchParams(data).toString();

        axios({
            method: "post",
            url: `${process.env.REACT_APP_URL}oauth/token`,
            data:u,
            auth: auth,
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
          })
            .then(function (response) {
              //handle success
              console.log(response);
              sessionStorage.clear();
              sessionStorage.setItem("token",response.data.access_token);
              sessionStorage.setItem("refresh_token",response.data.refresh_token);
              handleUserDetail()
              
            })
            .catch(function (response) {
              //handle error
              console.log(response);
            });

    }

  const handleUserDetail = () =>{
    const auth = {
      username: "mobile",
      password: "pin",
    };
      axios({
          method: "get",
          url: `${process.env.REACT_APP_URL}oauth/check_token?token=`+sessionStorage.getItem("token"),
          auth:auth,
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        })
          .then(function (response) {
            sessionStorage.setItem("role",response.data.authorities[0]);
            sessionStorage.setItem("username",response.data.user_name);
            window.location.href = "/rammps/";
          })
          .catch(function (response) {
            //handle error
            console.log(response);
          });
    }

    return (
            <div className="card-login">
                <div className="card-header page-header">
                    <span>Login</span>
                </div>
                <div className="card-body">
                    <form className="form-login" onSubmit={handleLogin}>
                        <div className="input-group mb-3">
                            <span className="input-group-text"><i className="fa fa-user icon" aria-hidden="true"></i></span>
                            <input type="text" className="form-control" placeholder="Username" aria-label="Username" name="username"/>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text"><i className="fa fa-lock icon" aria-hidden="true"></i></span>
                            <input type="password" className="form-control" placeholder="Password" aria-label="Password"name="password"/>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                    </form>
                </div>
                <div className="footer-down"></div>
            </div>
            
    )
}
export default Signin;
