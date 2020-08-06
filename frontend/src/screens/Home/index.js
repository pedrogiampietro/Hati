import React from 'react'
import Menu from '../Layouts/Menu'
import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'

const Home = () => {

    return (
        
     <div className="mod-bg-1">
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
  
              </div>
          </div>
      </div>
  </div>

    )

}

export default Home;