import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
function Users() {
    const [users,setUsers] = useState();
    const config = {
        headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` }
    };
    useEffect(() => {
        (async () => {
            const result = await axios(
                `${process.env.REACT_APP_URL}acl/get-user-list`,
                config
            );
        console.log(result);
        let userdata = [];
        if(result.data){
            result.data.map((user, index) => (
                userdata.push(<tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                        {
                            user.roles.map((role,index) => (
                                role.name
                            )) 
                        }
                        </td>
                </tr>)
                
            ))
        }
        setUsers(userdata);        
        })();
        }, []);
    return (
        <div>
            <div className="card">
                <div className="card-header page-header">
                User List
                    <Link to="/add-user">
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
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users}
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    )
}
export default Users;
