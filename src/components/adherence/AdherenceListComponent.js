import React from 'react'

function AdherenceListComponent(props:any) {
    
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
                    <td><a target="_blank" href={"https://enketo.ona.io/x/R2KU93rE?d[UID]=" + participant.uid + "&d[NWWOMNAME]=" + participant.NWWOMNAME+"&d[NWHUSNAME]="+participant.NWHUSNAME+ "&d[SECTORID]="+participant.sectorid+"&d[HHID]="+participant.hhid+"&d[TLPIN]="+participant.tlpin+"&d[MAUZ]="+participant.mauz+"&d[UNI]="+participant.uni}><button type="button" className="btn btn-participants btn-sm">Mobile Adherence<i className="fa fa-external-link" aria-hidden="true"></i></button></a></td>
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
                <th>Interview</th>
            </tr>
            </thead>
            <tbody>
                {numberrows}
            </tbody>
        </table>
    </div>
  )
}
export default AdherenceListComponent;