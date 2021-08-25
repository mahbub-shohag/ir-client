import React from 'react'

 function Footer() {
    if (window.location.pathname === '/rammps/signin') return null; 
    return (
            <footer>
                <div className="row text-center">
                    <div className="col-12">
                        <hr className="light-100"/>
                        <h5>&copy; All rights reserved | <span className="jivita-green">JiVit<span className="jivita-red">A</span> Bangladesh</span></h5>
                    </div>
                </div>
            </footer>
    )
}
export default Footer;