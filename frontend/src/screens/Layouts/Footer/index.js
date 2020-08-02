import React from 'react'

const Footer = () => {
    return(

        <footer className="page-footer" role="contentinfo">
            <div className="d-flex align-items-center flex-1 text-muted">
                <span className="hidden-md-down fw-700">2020 © Hati by&nbsp;<span className="text-primary fw-500" title="hati.com" target="_blank">Hati.com</span></span>
            </div>
            <div>
                <ul className="list-table m-0">
                    <li><a href="intel_introduction.html" className="text-secondary fw-700">About</a></li>
                    <li className="pl-3"><a href="info_app_licensing.html" className="text-secondary fw-700">License</a></li>
                    <li className="pl-3"><a href="info_app_docs.html" className="text-secondary fw-700">Documentation</a></li>
                </ul>
            </div>
        </footer>

    )
}


export default Footer