import React from 'react';
import SignIn from '../SignIn'
import Menu from '../Layouts/Menu'
import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'

const Home = () => {

    return (
        
      
      <body className="mod-bg-1">
      <div className="page-wrapper">
          <div className="page-inner">
              <Menu />
  
              <div className="page-content-wrapper">
                  <Header />
  
                  <main id="js-page-content" role="main" className="page-content">
                      <ol className="breadcrumb page-breadcrumb">
                          <li className="breadcrumb-item"><span>Home</span></li>
                          <li className="position-absolute pos-top pos-right d-none d-sm-block"><span className="js-get-date"></span></li>
                      </ol>
                      <div className="subheader">
                          <h1 className="subheader-title">
                              <i className="fal fa-home"></i> Home
                              <small>
                                  A brief Home to this Hati
                              </small>
                          </h1>
                      </div>

                      <div className="modal fade" tabindex="-1" role="dialog" aria-labelledby="bannerformmodal" aria-hidden="true" id="bannerformmodal">
                                  <div className="modal-dialog modal-dialog-centered">
                                      <div className="modal-content">
                                          <div className="modal-content">
                                              <div className="modal-header">
                                                  <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                              </div>
                                              <div className="modal-body">
                                                  <SignIn />
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              
                      <div className="fs-lg fw-300 p-5 bg-white border-faded rounded mb-g">
                          <h3 className="mb-g">
                              Hi Everyone,
                          </h3>
                          <p>
                              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                              of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                              the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                          </p>
                          <p>
                              A whopping 72% of you said you were ready for a fresh new design, while SmartAdmin is and a revolutionary view on what a good bootstrap based template should be, having something new to look at can make anyone
                              feel invigorated. And let's be honest, who doesn't like a modern update of your favorite theme! While most you are still happy with the current variations, around 50% of you have asked for vue.js support. With
                              this framework rapidly gaining popularity it is surely one to include in the family of frameworks! And, last, but certainly not least, a very large majority of a staggering 90% wanted more plugins and regular
                              updates.
                          </p>
                          <p>
                              Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                              distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model
                              text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                          </p>
                          <p>
                              Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a
                              Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,
                              discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on
                              the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the
                              1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from
                              the 1914 translation by H. Rackham.
                          </p>
                          <p>
                              Where can I get some? There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly
                              believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat
                              predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum
                              which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                          </p>
                          <p>
                              Sincerely,<br />
                              The Hati Team<br />
                          </p>
                      </div>
                      <h3>
                          Hati Team
                          <small className="mb-0">We build cool things...</small>
                      </h3>
                      <div className="d-flex flex-wrap demo demo-h-spacing mt-3 mb-3">
                          <div className="rounded-pill bg-white shadow-sm p-2 border-faded mr-3 d-flex flex-row align-items-center justify-content-center flex-shrink-0">
                              <img src="https://i.imgur.com/nZhyuRY.png" alt="" className="img-thumbnail img-responsive rounded-circle" style={{ width: '5rem', height: '5rem' }}/>
                              <div className="ml-2 mr-3">
                                  <h5 className="m-0">
                                      Developer Web
                                      <small className="m-0 fw-300">
                                          Lead Author
                                      </small>
                                  </h5>
                                  <a href="https://twitter.com/@pedrogiampietro" className="text-info fs-sm">@pedrogiampietro</a> -
                                  <span className="text-info fs-sm" title="Contact Sunny"><i className="fal fa-envelope"></i></span>
                              </div>
                          </div>
                          <div></div>
                      </div>
                  </main>
  
                  <div className="page-content-overlay" data-action="toggle" data-class="mobile-nav-on"></div>
  
                 <Footer />
  
                  <div className="modal fade modal-backdrop-transparent" id="modal-shortcut" tabindex="-1" role="dialog" aria-labelledby="modal-shortcut" aria-hidden="true">
                      <div className="modal-dialog modal-dialog-top modal-transparent" role="document">
                          <div className="modal-content">
                              <div className="modal-body">
                                  <ul className="app-list w-auto h-auto p-0 text-left">
                                      <li>
                                          <a href="intel_introduction.html" className="app-list-item text-white border-0 m-0">
                                              <div className="icon-stack">
                                                  <i className="base base-7 icon-stack-3x opacity-100 color-primary-500"></i>
                                                  <i className="base base-7 icon-stack-2x opacity-100 color-primary-300"></i>
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
  
      <nav className="shortcut-menu d-none d-sm-block">
          <input type="checkbox" className="menu-open" name="menu-open" id="menu_open" />
          <label htmlFor="menu_open" className="menu-open-button ">
              <span className="app-shortcut-icon d-block"></span>
          </label>
          <span className="menu-item btn" data-toggle="tooltip" data-placement="left" title="Scroll Top">
              <i className="fal fa-arrow-up"></i>
          </span>
          <a href="page_login-alt.html" className="menu-item btn" data-toggle="tooltip" data-placement="left" title="Logout">
              <i className="fal fa-sign-out"></i>
          </a>
          <span className="menu-item btn" data-action="app-fullscreen" data-toggle="tooltip" data-placement="left" title="Full Screen">
              <i className="fal fa-expand"></i>
          </span>
      </nav>
  
      <div className="modal fade js-modal-messenger modal-backdrop-transparent" tabindex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-dialog-right">
              <div className="modal-content h-100">
                  <div className="dropdown-header bg-trans-gradient d-flex align-items-center w-100">
                      <div className="d-flex flex-row align-items-center mt-1 mb-1 color-white">
                          <span className="mr-2">
                              <span className="rounded-circle profile-image d-block"></span>
                          </span>
                          <div className="info-card-text">
                              <span className="fs-lg text-truncate text-truncate-lg text-white" data-toggle="dropdown" aria-expanded="false">
                                  Tracey Chang
                                  <i className="fal fa-angle-down d-inline-block ml-1 text-white fs-md"></i>
                              </span>
                              <span className="text-truncate text-truncate-md opacity-80">IT Director</span>
                          </div>
                      </div>
                      <button type="button" className="close text-white position-absolute pos-top pos-right p-2 m-1 mr-2" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true"><i className="fal fa-times"></i></span>
                      </button>
                  </div>
                  <div className="modal-body p-0 h-100 d-flex">
                      <div className="msgr-list d-flex flex-column bg-faded border-faded border-top-0 border-right-0 border-bottom-0 position-absolute pos-top pos-bottom">
                          <div>
                              <div className="height-4 width-3 h3 m-0 d-flex justify-content-center flex-column color-primary-500 pl-3 mt-2">
                                  <i className="fal fa-search"></i>
                              </div>
                              <input type="text" className="form-control bg-white" id="msgr_listfilter_input" placeholder="Filter contacts" aria-label="FriendSearch" data-listfilter="#js-msgr-listfilter" />
                          </div>
                          <div className="flex-1 h-100 custom-scroll">
                              <div className="w-100">
                                  <ul id="js-msgr-listfilter" className="list-unstyled m-0">
                                      <li>
                                          <span className="d-table w-100 px-2 py-2 text-dark hover-white" data-filter-tags="tracey chang online">
                                              <div className="d-table-cell align-middle status status-success status-sm ">
                                                  <span className="profile-image-md rounded-circle d-block"></span>
                                              </div>
                                              <div className="d-table-cell w-100 align-middle pl-2 pr-2">
                                                  <div className="text-truncate text-truncate-md">
                                                      Tracey Chang
                                                      <small className="d-block font-italic text-success fs-xs">
                                                          Online
                                                      </small>
                                                  </div>
                                              </div>
                                          </span>
                                      </li>
                                      <li>
                                          <span className="d-table w-100 px-2 py-2 text-dark hover-white" data-filter-tags="oliver kopyuv online">
                                              <div className="d-table-cell align-middle status status-success status-sm ">
                                                  <span className="profile-image-md rounded-circle d-block"></span>
                                              </div>
                                              <div className="d-table-cell w-100 align-middle pl-2 pr-2">
                                                  <div className="text-truncate text-truncate-md">
                                                      Oliver Kopyuv
                                                      <small className="d-block font-italic text-success fs-xs">
                                                          Online
                                                      </small>
                                                  </div>
                                              </div>
                                          </span>
                                      </li>
                                      <li>
                                          <span className="d-table w-100 px-2 py-2 text-dark hover-white" data-filter-tags="dr john cook phd away">
                                              <div className="d-table-cell align-middle status status-warning status-sm ">
                                                  <span className="profile-image-md rounded-circle d-block"></span>
                                              </div>
                                              <div className="d-table-cell w-100 align-middle pl-2 pr-2">
                                                  <div className="text-truncate text-truncate-md">
                                                      Dr. John Cook PhD
                                                      <small className="d-block font-italic fs-xs">
                                                          Away
                                                      </small>
                                                  </div>
                                              </div>
                                          </span>
                                      </li>
                                      <li>
                                          <span className="d-table w-100 px-2 py-2 text-dark hover-white" data-filter-tags="ali amdaney online">
                                              <div className="d-table-cell align-middle status status-success status-sm ">
                                                  <span className="profile-image-md rounded-circle d-block"></span>
                                              </div>
                                              <div className="d-table-cell w-100 align-middle pl-2 pr-2">
                                                  <div className="text-truncate text-truncate-md">
                                                      Ali Amdaney
                                                      <small className="d-block font-italic fs-xs text-success">
                                                          Online
                                                      </small>
                                                  </div>
                                              </div>
                                          </span>
                                      </li>
                                      <li>
                                          <span className="d-table w-100 px-2 py-2 text-dark hover-white" data-filter-tags="sarah mcbrook online">
                                              <div className="d-table-cell align-middle status status-success status-sm">
                                                  <span className="profile-image-md rounded-circle d-block"></span>
                                              </div>
                                              <div className="d-table-cell w-100 align-middle pl-2 pr-2">
                                                  <div className="text-truncate text-truncate-md">
                                                      Sarah McBrook
                                                      <small className="d-block font-italic fs-xs text-success">
                                                          Online
                                                      </small>
                                                  </div>
                                              </div>
                                          </span>
                                      </li>
                                      <li>
                                          <span className="d-table w-100 px-2 py-2 text-dark hover-white" data-filter-tags="ali amdaney offline">
                                              <div className="d-table-cell align-middle status status-sm">
                                                  <span className="profile-image-md rounded-circle d-block"></span>
                                              </div>
                                              <div className="d-table-cell w-100 align-middle pl-2 pr-2">
                                                  <div className="text-truncate text-truncate-md">
                                                      oliver.kopyuv@gotbootstrap.com
                                                      <small className="d-block font-italic fs-xs">
                                                          Offline
                                                      </small>
                                                  </div>
                                              </div>
                                          </span>
                                      </li>
                                      <li>
                                          <span className="d-table w-100 px-2 py-2 text-dark hover-white" data-filter-tags="ali amdaney busy">
                                              <div className="d-table-cell align-middle status status-danger status-sm">
                                                  <span className="profile-image-md rounded-circle d-block"></span>
                                              </div>
                                              <div className="d-table-cell w-100 align-middle pl-2 pr-2">
                                                  <div className="text-truncate text-truncate-md">
                                                      oliver.kopyuv@gotbootstrap.com
                                                      <small className="d-block font-italic fs-xs text-danger">
                                                          Busy
                                                      </small>
                                                  </div>
                                              </div>
                                          </span>
                                      </li>
                                      <li>
                                          <span className="d-table w-100 px-2 py-2 text-dark hover-white" data-filter-tags="ali amdaney offline">
                                              <div className="d-table-cell align-middle status status-sm">
                                                  <span className="profile-image-md rounded-circle d-block"></span>
                                              </div>
                                              <div className="d-table-cell w-100 align-middle pl-2 pr-2">
                                                  <div className="text-truncate text-truncate-md">
                                                      oliver.kopyuv@gotbootstrap.com
                                                      <small className="d-block font-italic fs-xs">
                                                          Offline
                                                      </small>
                                                  </div>
                                              </div>
                                          </span>
                                      </li>
                                      <li>
                                          <span className="d-table w-100 px-2 py-2 text-dark hover-white" data-filter-tags="ali amdaney inactive">
                                              <div className="d-table-cell align-middle">
                                                  <span className="profile-image-md rounded-circle d-block"></span>
                                              </div>
                                              <div className="d-table-cell w-100 align-middle pl-2 pr-2">
                                                  <div className="text-truncate text-truncate-md">
                                                      +714651347790
                                                      <small className="d-block font-italic fs-xs opacity-50">
                                                          Missed Call
                                                      </small>
                                                  </div>
                                              </div>
                                          </span>
                                      </li>
                                  </ul>
                                  <div className="filter-message js-filter-message"></div>
                              </div>
                          </div>
                          <div>
                              <span className="fs-xl d-flex align-items-center p-3">
                                  <i className="fal fa-cogs"></i>
                              </span>
                          </div>
                      </div>
  
                      <div className="msgr d-flex h-100 flex-column bg-white">
                          <div className="custom-scroll flex-1 h-100">
                              <div id="chat_container" className="w-100 p-4">
                                  <div className="chat-segment">
                                      <div className="time-stamp text-center mb-2 fw-400">
                                          Jun 19
                                      </div>
                                  </div>
  
                                  <div className="chat-segment chat-segment-sent">
                                      <div className="chat-message">
                                          <p>
                                              Hey Ching, did you get my files?
                                          </p>
                                      </div>
                                      <div className="text-right fw-300 text-muted mt-1 fs-xs">
                                          3:00 pm
                                      </div>
                                  </div>
  
                                  <div className="chat-segment chat-segment-get">
                                      <div className="chat-message">
                                          <p>
                                              Hi
                                          </p>
                                          <p>
                                              Sorry going through a busy time in office. Yes I analyzed the solution.
                                          </p>
                                          <p>
                                              It will require some resource, which I could not manage.
                                          </p>
                                      </div>
                                      <div className="fw-300 text-muted mt-1 fs-xs">
                                          3:24 pm
                                      </div>
                                  </div>
  
                                  <div className="chat-segment chat-segment-sent chat-start">
                                      <div className="chat-message">
                                          <p>
                                              Okay
                                          </p>
                                      </div>
                                  </div>
  
                                  <div className="chat-segment chat-segment-sent chat-end">
                                      <div className="chat-message">
                                          <p>
                                              Sending you some dough today, you can allocate the resources to this project.
                                          </p>
                                      </div>
                                      <div className="text-right fw-300 text-muted mt-1 fs-xs">
                                          3:26 pm
                                      </div>
                                  </div>
  
                                  <div className="chat-segment chat-segment-get chat-start">
                                      <div className="chat-message">
                                          <p>
                                              Perfect. Thanks a lot!
                                          </p>
                                      </div>
                                  </div>
  
                                  <div className="chat-segment chat-segment-get">
                                      <div className="chat-message">
                                          <p>
                                              I will have them ready by tonight.
                                          </p>
                                      </div>
                                  </div>
  
                                  <div className="chat-segment chat-segment-get chat-end">
                                      <div className="chat-message">
                                          <p>
                                              Cheers
                                          </p>
                                      </div>
                                  </div>
  
                                  <div className="chat-segment">
                                      <div className="time-stamp text-center mb-2 fw-400">
                                          Jun 20
                                      </div>
                                  </div>
                              </div>
                          </div>
  
                          <div className="d-flex flex-column">
                              <div className="border-faded border-right-0 border-bottom-0 border-left-0 flex-1 mr-3 ml-3 position-relative shadow-top">
                                  <div className="pt-3 pb-1 pr-0 pl-0 rounded-0" tabindex="-1">
                                      <div id="msgr_input" contenteditable="true" data-placeholder="Type your message here..." className="height-10 form-content-editable"></div>
                                  </div>
                              </div>
                              <div className="height-8 px-3 d-flex flex-row align-items-center flex-wrap flex-shrink-0">
                                  <span className="btn btn-icon fs-xl width-1 mr-1" data-toggle="tooltip" data-original-title="More options" data-placement="top">
                                      <i className="fal fa-ellipsis-v-alt color-fusion-300"></i>
                                  </span>
                                  <span className="btn btn-icon fs-xl mr-1" data-toggle="tooltip" data-original-title="Attach files" data-placement="top">
                                      <i className="fal fa-paperclip color-fusion-300"></i>
                                  </span>
                                  <span className="btn btn-icon fs-xl mr-1" data-toggle="tooltip" data-original-title="Insert photo" data-placement="top">
                                      <i className="fal fa-camera color-fusion-300"></i>
                                  </span>
                                  <div className="ml-auto">
                                      <span className="btn btn-info">Send</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  
      <div className="modal fade js-modal-settings modal-backdrop-transparent" tabindex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-dialog-right modal-md">
              <div className="modal-content">
                  <div className="dropdown-header bg-trans-gradient d-flex justify-content-center align-items-center w-100">
                      <h4 className="m-0 text-center color-white">
                          Layout Settings
                          <small className="mb-0 opacity-80">User Interface Settings</small>
                      </h4>
                      <button type="button" className="close text-white position-absolute pos-top pos-right p-2 m-1 mr-2" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true"><i className="fal fa-times"></i></span>
                      </button>
                  </div>
                  <div className="modal-body p-0">
                      <div className="settings-panel">
                          <div className="mt-2 d-table w-100 pl-5 pr-3">
                              <div className="d-table-cell align-middle">
                                  <h5 className="p-0">Theme colors <small>(overlays base css)</small></h5>
                              </div>
                          </div>
                          <div className="expanded theme-colors pl-5 pr-3">
                              <ul className="m-0">
                                  <li><span id="myapp-0" data-action="theme-update" data-themesave data-theme="" data-toggle="tooltip" data-placement="top" title="Wisteria (base css)" data-original-title="Wisteria (base css)"></span></li>
                                  <li>
                                      <span id="myapp-1" data-action="theme-update" data-themesave data-theme="css/themes/cust-theme-1.css" data-toggle="tooltip" data-placement="top" title="Tapestry" data-original-title="Tapestry"></span>
                                  </li>
                                  <li>
                                      <span id="myapp-2" data-action="theme-update" data-themesave data-theme="css/themes/cust-theme-2.css" data-toggle="tooltip" data-placement="top" title="Atlantis" data-original-title="Atlantis"></span>
                                  </li>
                                  <li><span id="myapp-3" data-action="theme-update" data-themesave data-theme="css/themes/cust-theme-3.css" data-toggle="tooltip" data-placement="top" title="Indigo" data-original-title="Indigo"></span></li>
                                  <li>
                                      <span
                                          id="myapp-4"
                                          data-action="theme-update"
                                          data-themesave
                                          data-theme="css/themes/cust-theme-4.css"
                                          data-toggle="tooltip"
                                          data-placement="top"
                                          title="Dodger Blue"
                                          data-original-title="Dodger Blue"
                                      ></span>
                                  </li>
                                  <li>
                                      <span id="myapp-5" data-action="theme-update" data-themesave data-theme="css/themes/cust-theme-5.css" data-toggle="tooltip" data-placement="top" title="Tradewind" data-original-title="Tradewind"></span>
                                  </li>
                                  <li>
                                      <span id="myapp-6" data-action="theme-update" data-themesave data-theme="css/themes/cust-theme-6.css" data-toggle="tooltip" data-placement="top" title="Cranberry" data-original-title="Cranberry"></span>
                                  </li>
                                  <li>
                                      <span id="myapp-7" data-action="theme-update" data-themesave data-theme="css/themes/cust-theme-7.css" data-toggle="tooltip" data-placement="top" title="Oslo Gray" data-original-title="Oslo Gray"></span>
                                  </li>
                                  <li>
                                      <span
                                          id="myapp-8"
                                          data-action="theme-update"
                                          data-themesave
                                          data-theme="css/themes/cust-theme-8.css"
                                          data-toggle="tooltip"
                                          data-placement="top"
                                          title="Chetwode Blue"
                                          data-original-title="Chetwode Blue"
                                      ></span>
                                  </li>
                                  <li><span id="myapp-9" data-action="theme-update" data-themesave data-theme="css/themes/cust-theme-9.css" data-toggle="tooltip" data-placement="top" title="Apricot" data-original-title="Apricot"></span></li>
                                  <li>
                                      <span
                                          id="myapp-10"
                                          data-action="theme-update"
                                          data-themesave
                                          data-theme="css/themes/cust-theme-10.css"
                                          data-toggle="tooltip"
                                          data-placement="top"
                                          title="Blue Smoke"
                                          data-original-title="Blue Smoke"
                                      ></span>
                                  </li>
                                  <li>
                                      <span
                                          id="myapp-11"
                                          data-action="theme-update"
                                          data-themesave
                                          data-theme="css/themes/cust-theme-11.css"
                                          data-toggle="tooltip"
                                          data-placement="top"
                                          title="Green Smoke"
                                          data-original-title="Green Smoke"
                                      ></span>
                                  </li>
                                  <li>
                                      <span
                                          id="myapp-12"
                                          data-action="theme-update"
                                          data-themesave
                                          data-theme="css/themes/cust-theme-12.css"
                                          data-toggle="tooltip"
                                          data-placement="top"
                                          title="Wild Blue Yonder"
                                          data-original-title="Wild Blue Yonder"
                                      ></span>
                                  </li>
                                  <li>
                                      <span id="myapp-13" data-action="theme-update" data-themesave data-theme="css/themes/cust-theme-13.css" data-toggle="tooltip" data-placement="top" title="Emerald" data-original-title="Emerald"></span>
                                  </li>
                              </ul>
                          </div>
                          <hr className="mb-0 mt-4" />
                          <div className="pl-5 pr-3 py-3 bg-faded">
                              <div className="row no-gutters">
                                  <div className="col-6 pr-1">
                                      <span className="btn btn-outline-danger fw-500 btn-block" data-action="app-reset">Reset Settings</span>
                                  </div>
                                  <div className="col-6 pl-1">
                                      <span className="btn btn-danger fw-500 btn-block" data-action="factory-reset">Factory Reset</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <span id="saving"></span>
                  </div>
              </div>
          </div>
      </div>
  </body>

    )

}

export default Home