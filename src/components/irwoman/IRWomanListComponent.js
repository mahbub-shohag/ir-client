import React from 'react'

function IRWomanListComponent(props:any) {
    
    const {womans} = props;
    let numberrows = [];
    womans.map((participant, index) => (
        numberrows.push(<tr key={index}>
            <td>{index+1}</td>
                    <td>{participant.uid}</td>
                    <td>{participant.tlpin}</td>
                    <td>{participant.sectorid}</td>
                    <td>{participant.hhid}</td>
                    <td>{participant.NWWOMNAME}</td>
                    <td>{participant.NWHUSNAME}</td>
                    <td>{participant.mwradob}</td>
                    <td>{participant.lmp}</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    
        </tr>)
        
    ))

  return (
    <div>
        <table className="table table-striped table-hover table-sm table-chw">
            <thead>
            <tr>
                <th>SL</th>
                <th>UID</th>
                <th>TL</th>
                <th>Sector</th>
                <th>HHID</th>
                <th>Woman Name</th>
                <th>Husband  Name</th>
                <th>DOB</th>
                <th>LMP</th>
                <th>FGD Consent</th>
                <th>FGD Consent Date</th>
                <th>IDI Consent</th>
                <th>IDI Consent Date</th>
            </tr>
            </thead>
            <tbody>
                {numberrows}
            </tbody>
        </table>
    </div>
  )
}
export default IRWomanListComponent;