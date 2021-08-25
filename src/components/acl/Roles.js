import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
function Roles() {  

    const [roles,setRoles] = useState([]);
    const config = {
        headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` }
    };
    useEffect(() => {
        (async () => {
            const result = await axios(
                `${process.env.REACT_APP_URL}acl/get-role-list`,
                config
            );
        console.log(result);
        let roledata = [];
        if(result.data){
            result.data.map((role, index) => (
                roledata.push(<tr key={index}>
                    <td>{role.id}</td>
                    <td>{role.name}</td>
                    <td>
                        {role.permissions.map((permission,index) => (permission.name))}
                    </td>
                </tr>)
                
            ))
        }
        setRoles(roledata);        
        })();
        }, []);

    return (
        <div>
            <div className="card">
                <div className="card-header page-header">
                Roles
                    <Link to="/add-role">
                    <button type="button" className="btn theme-btn btn-sm">
                        Add New <i className="fa fa-plus" aria-hidden="true"></i>
                    </button>
                    </Link>
                </div>
                <div className="card-body">
                <table className="table table-striped table-hover table-sm">
                    <thead>
                    <tr>
                        <th>SL</th>
                        <th>Name</th>
                        <th>Permissions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {roles}
                    </tbody>
                </table>
                </div>
            </div>
            </div>
    )
}
export default Roles;
