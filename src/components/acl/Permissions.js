import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
function Permissions() {

    const [permissions,setPermissions] = useState([]);
    const [permission,setPermission] = useState("");
    const [loading,setLoading] = useState(true);

    const config = {
        headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` }
    };

    useEffect(() => {
        (async () => {
        const result = await axios(
            `${process.env.REACT_APP_URL}acl/get-permission-list`,
            config
        );
        let permissiondata = [];
        if(result.data){
            result.data.map((permission, index) => (
                permissiondata.push(<tr key={index}>
                    <td>{permission.id}</td>
                    <td>{permission.name}</td>
                </tr>)
                
            ))
        }
        setPermissions(permissiondata);   
        setLoading(false);     
        })();
    }, []);


    return (
        <div>
            <div className="card">
                <div className="card-header page-header">
                Permission
                    <Link to="/add-permission">
                    <button type="button" className="btn theme-btn btn-sm">
                        Add New <i className="fa fa-list" aria-hidden="true"></i>
                    </button>
                    </Link>
                </div>
                <div className="card-body">
                <table className="table table-striped table-hover table-sm">
                    <thead>
                    <tr>
                        <th>SL</th>
                        <th>Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    {permissions}
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    )
}
export default Permissions;
