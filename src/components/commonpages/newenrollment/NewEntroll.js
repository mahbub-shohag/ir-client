import React,{useEffect,useState} from 'react';
import Loader from '../../commonpages/Loader';
import axios from 'axios';
import '../newenrollment/NewEnroll.css';
import SearchList from './SearchList';
function NewEntroll() {
    const { REACT_APP_URL} = process.env;
    const [sector,setSector] = useState([]);
    const [hhid,setHhid] = useState([]);
    const [loading,setLoading] = useState(true);
    const [persons,setPersons] = useState([]);
    const handleHHIDChange = (event) => {
        setHhid(event.target.value);
    }
    const handleSectorChange = (event) => {
        setSector(event.target.value);
    }
    const search = () =>{
        setLoading(true);
            var bodyFormData = new FormData();
            bodyFormData.append('sector', sector);
            bodyFormData.append('hhid', hhid);
            axios({
                method: "post",
                url: REACT_APP_URL+`person/search-person`,
                data:bodyFormData,
                headers: { "Content-Type": "application/json" },
              })
                .then(function (response) {
                    setPersons(response.data);
                    setLoading(false);
                })
                .catch(function (response) {
                });
    }
    return (
        <div className="container-fluid">
            <div className="card">
                <div className="card-header page-header">
                New Woman Enrollment <a target="_blank" href="https://enketo.ona.io/x/THQ7auKh"><button className="btn btn-sm btn-info btn-new">New</button></a>
                </div>
                <div className="card-body">
                        <div className="row">
                            <div className="col-md-1">Sector</div>
                            <div className="col-md-2">
                               <input type="text" onChange={handleSectorChange} className="form-control"></input>
                            </div>
                            <div className="col-md-1">HHID</div>
                            <div className="col-md-2">
                                <input type="text" onChange={handleHHIDChange} className="form-control"></input>
                            </div>
                            <div className="col-md-2"><button className="btn btn-success" onClick={search}>Search</button></div>
                        </div> 
                        <div>
                            <SearchList womans={persons}/>
                        </div>
                        
                </div>
            </div>
            </div>
    )
}
export default NewEntroll;