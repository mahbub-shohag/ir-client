import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
function AddUser() {
    const config = {
        headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` }
    };
    const handleSubmit = (event) =>{
        event.preventDefault();
        const data = new FormData(event.target);
        var profile = {};
        profile.firstName = data.get("firstName");
        profile.lastName = data.get("lastName");
        profile.email = data.get("email");
        profile.username = data.get("username");
        profile.password = data.get("password");
        profile.contactNo = data.get("contactNo");
        profile.roleId = data.get("roleId");
        
        var bodyFormData = new FormData();
        bodyFormData.append('signupdata', JSON.stringify(profile));

        axios({
            method: "post",
            url: `${process.env.REACT_APP_URL}acl/signup`,
            data:bodyFormData,
            headers: { 'Content-Type': 'application/json',
            Authorization: 'Bearer'+sessionStorage.getItem("token")
            },
          })
            .then(function (response) {
              
                //handle success
              console.log(response);
            })
            .catch(function (response) {
              //handle error
              console.log(response);
            });

    }

    const [roles,setRoles] = useState([]);
        useEffect(() => {
            (async () => {
            const result = await axios(
                `${process.env.REACT_APP_URL}acl/get-role-list`,config
            );
            console.log(result.data);
            setRoles(result.data);     
            })();
            }, []);

        let roleList = roles.length > 0
            && roles.map((role, i) => {
            return (
                <option key={i} value={role.id}>{role.name}</option>
            )
        }, this);  
    return (
        <>
            <div className="card-signup">
                <div className="card-header page-header">
                    <span>Create New User</span>
                    <Link to="/user-list">
                    <button type="button" className="btn theme-btn btn-sm">
                        User List <i className="fa fa-list" aria-hidden="true"></i>
                    </button>
                    </Link>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group row">
                            <label for="username" className="col-sm-2 col-form-label">User Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="username" placeholder="Username" name="username"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                            <input type="email" className="form-control" id="inputEmail3" placeholder="Email" name="email"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputPassword3" placeholder="Password" name="password"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="exampleFormControlSelect1" className="col-sm-2 col-form-label">Role</label>
                            <div className="col-sm-10">
                            <select className="form-control" name="roleId">
                            {roleList}
                            </select>
                            </div>
                        </div>
                        <div className="row">
                            <input type="submit" className="btn btn-primary btn-block btn-signup" value="Submit"/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default AddUser;