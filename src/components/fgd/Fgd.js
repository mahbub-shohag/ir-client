import React,{useEffect,useState} from 'react'
import axios from 'axios';
import Select from "react-dropdown-select";
import Loader from '../commonpages/Loader';
import FgdListComponent from '../fgd/FgdListComponent';
function Fgd() {
    const { REACT_APP_URL} = process.env;
    const [loading,setLoading] = useState(true);
    const [selectedTlpin,setSelectedTlpin] = useState([]);
    const [numbers,setNumbers] = useState([]);
    const [womans,setWomans] = useState([]);
    const tlpins = [
            {"label":"ALL TLPIN","value":""},{"label":"TLPIN-04","value":4},{"label":"TLPIN-05","value":5},{"label":"TLPIN-06","value":6},{"label":"TLPIN-07","value":7},,{"label":"TLPIN-08","value":8},
            {"label":"TLPIN-09","value":9},{"label":"TLPIN-10","value":10},{"label":"TLPIN-11","value":11},{"label":"TLPIN-12","value":12},{"label":"TLPIN-13","value":13},
            {"label":"TLPIN-14","value":14},{"label":"TLPIN-15","value":15},{"label":"TLPIN-16","value":16},{"label":"TLPIN-17","value":17},{"label":"TLPIN-18","value":18},
            {"label":"TLPIN-19","value":19},{"label":"TLPIN-20","value":20},{"label":"TLPIN-21","value":21},{"label":"TLPIN-22","value":22},{"label":"TLPIN-23","value":23},
            {"label":"TLPIN-24","value":24},{"label":"TLPIN-25","value":25},{"label":"TLPIN26","value":"26"},{"label":"TLPIN-27","value":27},{"label":"TLPIN-28","value":28},
            {"label":"TLPIN-29","value":29},{"label":"TLPIN-30","value":30},{"label":"TLPIN-31","value":31},{"label":"TLPIN-32","value":32},{"label":"TLPIN-33","value":33},
            {"label":"TLPIN-34","value":34},{"label":"TLPIN-35","value":35},{"label":"TLPIN-36","value":36},{"label":"TLPIN-37","value":37},{"label":"TLPIN-38","value":38},
            {"label":"TLPIN-39","value":39},{"label":"TLPIN-40","value":40}
        ];
    const config = {
        headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` }
    };
    const handleTlpinChange = (tlpin) =>{
        setSelectedTlpin(tlpin);
        handleSearch(tlpin[0].value);
    }

    const handleRefresh = () =>{
        let tlpin = "";
        if(selectedTlpin.length==1){
            tlpin = selectedTlpin[0].value;
        }
        handleSearch(tlpin);
    }

    useEffect(() => {
        (async () => {
            var bodyFormData = new FormData();
            bodyFormData.append("tlpin", "");
            axios({
                method: "post",
                url: REACT_APP_URL+`irwoman/get-all-irwoman`,
                data:bodyFormData,
                headers: { "Content-Type": "application/json" },
              })
                .then(function (response) {  
                    setWomans(response.data);
                    //setLoading(false);
                })
                .catch(function (response) {
                });             
        })();
        }, []);

        const handleSearch = (tlpin) =>{
            //setLoading(true);
            var bodyFormData = new FormData();
            bodyFormData.append('tlpin', tlpin);
            axios({
                method: "post",
                url: REACT_APP_URL+`irwoman/get-all-irwoman`,
                data:bodyFormData,
                headers: { "Content-Type": "application/json" },
              })
                .then(function (response) {
                    setNumbers(response.data);
                    //setLoading(false);
                })
                .catch(function (response) {
                });
    
        } 

        // if(loading){
        //     return (<Loader/>)        
        // }

    return (
        <div className="container-fluid">
            <div className="card">
                <div className="card-header page-header">
                IR Woman List <button onClick={handleRefresh} className="btn btn-primary btn-sm refresh-btn">Refresh  <i className="fa fa-refresh" aria-hidden="true"></i></button>
                <div className="tlpinSearch">
                <Select
                    placeholder="Choose TLPIN"
                    className="form-control"
                    options={tlpins}
                    values={selectedTlpin}
                    required
                    name="name"
                    onChange={(value) => handleTlpinChange(value)}
                />
                </div>
                </div>
                <div className="card-body">
                    <FgdListComponent womans={womans}/>
                </div>
            </div>
            </div>
    )
}
export default Fgd;