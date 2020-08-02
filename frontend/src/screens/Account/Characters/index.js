import React from 'react';
import { Link } from 'react-router-dom'
import Menu from '../../Layouts/Menu'
import Header from '../../Layouts/Header'
import Footer from '../../Layouts/Footer'

const Characters = () => {
    return (
        <>
        <div className="page-wrapper">
            <div className="page-inner">

                <Menu />

                <div className="page-content-wrapper">

                    <Header />

                    <main id="js-page-content" role="main" className="page-content">
                        <ol className="breadcrumb page-breadcrumb">
                        <Link to="/"><li className="breadcrumb-item">HatiAAC/ </li></Link>
                            <li className="breadcrumb-item active">Account</li>
                            <li className="position-absolute pos-top pos-right d-none d-sm-block"><span className="js-get-date"></span></li>
                        </ol>
                        <div className="subheader">
                            <h1 className="subheader-title">
                                <i className='subheader-icon fal fa-plus-circle'></i> Account Management
                                <small>
                                    Account Page
                                </small>
                            </h1>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-xl-3 order-lg-1 order-xl-1">
                           
                                <div className="card mb-g rounded-top">
                                    <div className="row no-gutters row-grid">
                                        <div className="col-12">
                                            <div className="d-flex flex-column align-items-center justify-content-center p-4">
                                                <img src="img/demo/avatars/avatar-admin-lg.png" className="rounded-circle shadow-2 img-thumbnail" alt="" />
                                                <h5 className="mb-0 fw-700 text-center mt-3">
                                                    Pedro Giampietro
                                                    <small className="text-muted mb-0">Rio de Janeiro, Brasil</small>
                                                </h5>
                                                
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="text-center py-3">
                                                <h5 className="mb-0 fw-700">
                                                    31
                                                    <small className="text-muted mb-0">Premium Account</small>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="text-center py-3">
                                                <h5 className="mb-0 fw-700">
                                                    371
                                                    <small className="text-muted mb-0">Premium Points</small>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="p-3 text-center">
                                            <Link to="/account/changepassword" className="btn-link font-weight-bold">Change Password</Link> <span className="text-primary d-inline-block mx-3"></span>
                                                <br />
                                            <Link to="/account/changeemail" className="btn-link font-weight-bold">Change E-Mail</Link> <span className="text-primary d-inline-block mx-3"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                          
                                <div className="card mb-g">
                                    <div className="row row-grid no-gutters">
                                        <div className="col-12">
                                            <div className="p-3">
                                                <h2 className="mb-0 fs-xl">
                                                    Characters
                                                </h2>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                        <Link to="/account/characters/view/:id">
                                                <span className="profile-image rounded-circle d-block m-auto" style={{  
                                                backgroundImage: `url("https://www.tibiawiki.com.br/images/e/e4/Outfit_Citizen_Male.gif")`,
                                                backgroundSize: 'cover',
                                                }}></span>
                                                <span className="d-block text-truncate text-muted fs-xs mt-1">Oliver Kopyov</span>
                                            </Link>
                                        </div>
                                        <div className="col-4">
                                        <Link to="/account/characters/view/:id">
                                                <span className="profile-image rounded-circle d-block m-auto" style={{  
                                                backgroundImage: `url("https://www.tibiawiki.com.br/images/e/e4/Outfit_Citizen_Male.gif")`,
                                                backgroundSize: 'cover',
                                                }}></span>
                                                <span className="d-block text-truncate text-muted fs-xs mt-1">Oliver Kopyov</span>
                                            </Link>
                                        </div>
                                        <div className="col-4">
                                            <Link to="/account/characters/view/:id">
                                                <span className="profile-image rounded-circle d-block m-auto" style={{  
                                                backgroundImage: `url("https://www.tibiawiki.com.br/images/e/e4/Outfit_Citizen_Male.gif")`,
                                                backgroundPosition: 'center',
                                                backgroundSize: 'cover',
                                                backgroundRepeat: 'no-repeat'
                                                }}></span>
                                                <span className="d-block text-truncate text-muted fs-xs mt-1">Oliver Kopyov</span>
                                            </Link>
                                        </div>
                        
                                     
                                       
                                        <div className="col-12">
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6 order-lg-3 order-xl-2">
                          
                             
                               

                                <div className="card mb-g">
                                    
                                    <div className="card-body py-0 px-4 border-faded border-right-0 border-bottom-0 border-left-0">
                                        <div className="d-flex flex-column align-items-center">
                                                ainda vou pensar em algo aqui
                                        </div>
                                    </div>
                                </div>
                              
                            </div>
                            <div className="col-lg-6 col-xl-3 order-lg-2 order-xl-3">
                              
                                <div className="card mb-2">
                                    <div className="card-body">
                                        <Link to="/account/characters/create">
                                            <div className='icon-stack display-3 flex-shrink-0'>
                                                <i className="fal fa-circle icon-stack-3x opacity-100 color-primary-400"></i>
                                                <i className="fas fa-graduation-cap icon-stack-1x opacity-100 color-primary-500"></i>
                                            </div>
                                            <div className="ml-3">
                                                <strong>
                                                    Create Character
                                                </strong>
                                                <br />
                                                Você ainda pode criar + 4.
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="card mb-g">
                                    <div className="card-body">
                                        <Link to="/shop">
                                            <div className='icon-stack display-3 flex-shrink-0'>
                                                <i className="fal fa-circle icon-stack-3x opacity-100 color-warning-400"></i>
                                                <i className="fas fa-handshake icon-stack-1x opacity-100 color-warning-500"></i>
                                            </div>
                                            <div className="ml-3">
                                                <strong>
                                                    Donate
                                                </strong>
                                                <br />
                                                Compre pontos, cresça rapidamente.
                                            </div>
                                            </Link>
                                    </div>
                                </div>
                              
                                <div className="card mb-g">
                                    <div className="row row-grid no-gutters">
                                        <div className="col-12">
                                            <div className="p-3">
                                                <h2 className="mb-0 fs-xl">
                                                    Quests
                                                </h2>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="p-3 d-flex text-primary align-items-center fs-xl">
                                                <i className="fas fa-star mr-1"></i>
                                                <i className="fas fa-star mr-1"></i>
                                                <i className="fas fa-star mr-1"></i>
                                                <i className="fas fa-star mr-1"></i>
                                                <i className="fal fa-star mr-1"></i>
                                                <span className="ml-auto">4/5 Stars</span>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="p-3">
                                                <div className="fw-500 fs-xs">Demon Helmet</div>
                                                <div className="progress progress-xs mt-2">
                                                    <div className="progress-bar bg-primary-300 bg-primary-gradient" role="progressbar" style={{width: '80%'}}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="p-3">
                                                <div className="fw-500 fs-xs">Annhilator</div>
                                                <div className="progress progress-xs mt-2">
                                                    <div className="progress-bar bg-primary-300 bg-primary-gradient" role="progressbar" style={{width: '100%'}}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="p-3">
                                                <div className="fw-500 fs-xs">Inquisition</div>
                                                <div className="progress progress-xs mt-2">
                                                    <div className="progress-bar bg-primary-300 bg-primary-gradient" role="progressbar" style={{width: '75%'}}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="p-3">
                                                <div className="fw-500 fs-xs">Knowledge</div>
                                                <div className="progress progress-xs mt-2">
                                                    <div className="progress-bar bg-primary-300 bg-primary-gradient" role="progressbar" style={{width: '95%'}}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="p-3">
                                                <div className="fw-500 fs-xs">PostMan</div>
                                                <div className="progress progress-xs mt-2">
                                                    <div className="progress-bar bg-danger-300 bg-warning-gradient" role="progressbar" style={{width: '30%'}}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="p-3 text-center">
                                                <Link to="/">View all</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        
                               
                            </div>
                        </div>
                    </main>
           
                    <div className="page-content-overlay" data-action="toggle" data-classname="mobile-nav-on"></div> 
                  
                    <Footer />
        
                    <div className="modal fade modal-backdrop-transparent" id="modal-shortcut" tabIndex="-1" role="dialog" aria-labelledby="modal-shortcut" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-top modal-transparent" role="document">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <ul className="app-list w-auto h-auto p-0 text-left">
                                        <li>
                                            <a href="intel_introduction.html" className="app-list-item text-white border-0 m-0">
                                                <div className="icon-stack">
                                                    <i className="base base-7 icon-stack-3x opacity-100 color-primary-500 "></i>
                                                    <i className="base base-7 icon-stack-2x opacity-100 color-primary-300 "></i>
                                                    <i className="fal fa-home icon-stack-1x opacity-100 color-white"></i>
                                                </div>
                                                <span className="app-list-name">
                                                    Home
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="page_inbox_general.html" className="app-list-item text-white border-0 m-0">
                                                <div className="icon-stack">
                                                    <i className="base base-7 icon-stack-3x opacity-100 color-success-500 "></i>
                                                    <i className="base base-7 icon-stack-2x opacity-100 color-success-300 "></i>
                                                    <i className="ni ni-envelope icon-stack-1x text-white"></i>
                                                </div>
                                                <span className="app-list-name">
                                                    Inbox
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="intel_introduction.html" className="app-list-item text-white border-0 m-0">
                                                <div className="icon-stack">
                                                    <i className="base base-7 icon-stack-2x opacity-100 color-primary-300 "></i>
                                                    <i className="fal fa-plus icon-stack-1x opacity-100 color-white"></i>
                                                </div>
                                                <span className="app-list-name">
                                                    Add More
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </>
    )
}


export default Characters