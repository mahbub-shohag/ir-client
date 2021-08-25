import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from "react-router-dom";
function AddPermission() {
    const history = useHistory();
    const handleSubmit = (event) =>{
        event.preventDefault();
        const data = new FormData(event.target);
        var permissionName = data.get("name");
        var bodyFormData = new FormData();
        bodyFormData.append('name', permissionName);

        axios({
            method: "post",
            url: `${process.env.REACT_APP_URL}acl/add-permission`,
            data:bodyFormData,
            headers: { 'Content-Type': 'application/json',
                       Authorization: 'Bearer'+sessionStorage.getItem("token")
                    },
          })
            .then(function (response) {
              //handle success
              console.log(response);
              history.push("/permission-list");
            })
            .catch(function (response) {
              //handle error
              console.log(response);
            });

    } 

    return (
        <div className="container-fluid">
            <div className="card-signup">
                <div className="card-header page-header">
                    <span>Permission</span>
                    <Link to="/permission-list">
                    <button type="button" className="btn theme-btn btn-sm">
                        Permission List <i className="fa fa-list" aria-hidden="true"></i>
                    </button>
                    </Link>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group row">
                            <label for="username" className="col-sm-2 col-form-label">Permission Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="username" placeholder="Permissionname" name="name"/>
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
export default AddPermission;