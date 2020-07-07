import React from 'react'

const Layout = ({ children }) => { 
    return(
        <div className="layout">
            <nav className="navbar navbar-expand-lg bg-dark text-light">
                <div className="container d-flex w-100 justify-content-between">
                    <div>
                        <span>Back</span>
                    </div>
                    <div className="text-center">
                        <strong>Characters</strong>
                    </div>
                    <div>
                        <span>Logout</span>
                    </div>
                </div>
            </nav>
            <div className="container">
                { children }
            </div>
        </div>
    )
}


export default Layout 