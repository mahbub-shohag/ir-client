import React from 'react'
import axios from 'axios';
 function Upload() {
    const {REACT_APP_URL} = process.env;
    const upload = (event) =>{
        event.preventDefault();
        var fd = new FormData();
        var files = document.getElementById('file').files[0];
        fd.append('file',files);

        axios({
            method: "post",
            url: REACT_APP_URL+`transaction/import`,
            data:fd,
            headers: { "Content-Type": "undefined" },
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

    return (
        <div className="container">
            <div className="card">
                <div className="card-header">Upload Participant</div>
                <form className="form" onSubmit={upload}>
                    <div className="form-group">
                        <label className="control-label">File</label>
                        <input type="file" id="file" className="form-control"/>
                        <button className="btn btn-primary">Upload</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Upload;