import React from 'react'
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from 'axios';
function AddRole() {
    const history = useHistory();
    const handleSubmit = (event) =>{
        event.preventDefault();
        const data = new FormData(event.target);
        var roleName = data.get("name");
        var permissionList = [871];
        var bodyFormData = new FormData();
        
        
        bodyFormData.append("permissions",permissionList);
        axios({
            method: "post",
            url: `${process.env.REACT_APP_URL}acl/add-role`,
            data:bodyFormData,
            headers: { 'Content-Type': 'application/json',
                       Authorization: 'Bearer'+sessionStorage.getItem("token")
                    },
          })
            .then(function (response) {
              //handle success
              history.push("/role-list");
            })
            .catch(function (response) {
              //handle error
              console.log(response);
            });

    }
    return (
        <div className="container">
            <div className="card-signup">
                <div className="card-header page-header">
                    <span>Role</span>
                    <Link to="/role-list">
                    <button type="button" className="btn theme-btn btn-sm">
                        Role List <i className="fa fa-list" aria-hidden="true"></i>
                    </button>
                    </Link>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group row">
                            <label for="username" className="col-sm-2 col-form-label">Role Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="username" placeholder="Name" name="name"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="exampleFormControlSelect1" className="col-sm-2 col-form-label">Permission</label>
                            <div className="col-sm-10">
                            <select className="form-control" id="exampleFormControlSelect1">
                            <option>WRITE</option>
                            <option>READ</option>
                            </select>
                            </div>
                        </div>
                        <div className="row">
                            <input type="submit" className="btn btn-primary btn-block btn-signup" onclick="alert('Submission successful!')" value="Submit"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AddRole;