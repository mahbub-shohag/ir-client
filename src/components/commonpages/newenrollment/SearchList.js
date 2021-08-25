import React from 'react'

function SearchList(props:any) {
    const {womans} = props;
    let numberrows = [];
    womans.map((participant, index) => (
        numberrows.push(<tr key={index}>
            <td>{index+1}</td>
                    <td>{participant.uid}</td>
                    <td>{participant.tlpincd}</td>
                    <td>{participant.sectorid}</td>
                    <td>{participant.hhid}</td>
                    <td>{participant.personname}</td>
                    <td>{participant.spousename}</td>
                    <td><a target="_blank" href={"https://enketo.ona.io/x/THQ7auKh?d[UID]=" + participant.uid + "&d[NWWOMNAME]=" + participant.personname+ "&d[NWHUSNAME]=" + participant.spousename + "&d[SECTORID]="+participant.sectorid+"&d[HHID]="+participant.hhid+"&d[TLPIN]="+participant.tlpincd+"&d[SECTORID]="+participant.Sector+"&d[HHID]="+participant.HHID+"&d[TLPIN]="+participant.TLPIN}><button type="button" className="btn btn-participants btn-sm">IRRF <i className="fa fa-external-link" aria-hidden="true"></i></button></a></td>
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
                <th>IRRF</th>
            </tr>
            </thead>
            <tbody>
                {numberrows}
            </tbody>
        </table>
    </div>
  )
}
export default SearchList;