import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { playerGetCharacter } from '../../actions/PlayerActions'
import Menu from '../Layouts/Menu'
import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'


const Character = ({ playerGetCharacter }) => {

  const { name } = useParams()
  const [characterPage, setCharacterPage] = useState([])
  
  useEffect(() => {
      playerGetCharacter(name)

      .then(({ payload }) => {
        const newData = payload.data.data
        setCharacterPage(newData)

      }).catch((err) => {
        alert('o jogador não foi carregado.')
        console.log(err)
      })

  }, [name, playerGetCharacter])



  return (
    <div className="mod-bg-1">
      <div className="page-wrapper">
        <div className="page-inner">
          <Menu />

          <div className="page-content-wrapper">
            <Header />

            <main id="js-page-content" role="main" className="page-content">

                        <div className="row">
                            <div className="col-lg-6 col-xl-3 order-lg-1 order-xl-1">

                            <div id="c_1" class="card border shadow-0 mb-g shadow-sm-hover" data-filter-tags="oliver kopyov">
                                    <div class="card-body border-faded border-top-0 border-left-0 border-right-0 rounded-top">
                                        <div class="d-flex flex-row align-items-center">
                                            <span class="status status-success mr-3">
                                                <span class="rounded-circle profile-image d-block " 
                                                style={{  
                                                backgroundImage: `url("https://www.tibiawiki.com.br/images/e/e4/Outfit_Citizen_Male.gif")`,
                                                backgroundSize: 'cover',
                                                }}></span>
                                            </span>
                                            <div class="info-card-text flex-1">
                                                <span class="fs-xl text-truncate text-truncate-lg text-primary" aria-expanded="false">
                                                    {characterPage.name}
                                                </span>
                                                <span class="text-truncate text-truncate-xl">Mata Rindo</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body p-0 collapse show">
                                        
                                    <table class="table table-striped table-condensed">
                                        <tbody>
                                            <tr>
                                                <td>
                                                <span class="fs-xl text-truncate text-truncate-lg text-primary" aria-expanded="false">
                                                    Sex:
                                                </span>
                                                </td>
                                                <td>
                                                    Male
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span class="fs-xl text-truncate text-truncate-lg text-primary" aria-expanded="false">
                                                        Level:
                                                    </span>
                                                </td>
                                                <td>1312</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span class="fs-xl text-truncate text-truncate-lg text-primary" aria-expanded="false">
                                                        Level:
                                                    </span>
                                                </td>
                                                <td>Royal Paladin</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span class="fs-xl text-truncate text-truncate-lg text-primary" aria-expanded="false">
                                                       Last Login:
                                                    </span>
                                                </td>
                                                <td>
                                                    05 Sep 2020, 21:31 → 05 Sep 2020, 21:57
                                                </td>
                                            </tr>

                                            <tr>
                                               <td>
                                                    <span class="fs-xl text-truncate text-truncate-lg text-primary" aria-expanded="false">
                                                        Resident:
                                                    </span>
                                                </td>
                                                <td>Roshamuul</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                        <div className="row no-gutters row-grid">
                                       
                                        <div className="col-6">
                                            <div className="text-center py-3">
                                                <h5 className="mb-0 fw-700">
                                                    31
                                                    <small className="mb-0 fs-xl text-truncate text-truncate-lg text-primary">Premium Account</small>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="text-center py-3">
                                                <h5 className="mb-0 fw-700">
                                                    371
                                                    <small className="mb-0 fs-xl text-truncate text-truncate-lg text-primary">Crown Token</small>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6 order-lg-3 order-xl-2">
                          
                             
                               

                                <div className="card mb-g">
                                    
                                    <div className="card-body py-0 px-4 border-faded border-right-0 border-bottom-0 border-left-0">
                                        <div className="d-flex flex-column align-items-center">
                                                
                                        
                                        <div class="row">
                                            <br />
                                            <div class="col-md-4">
                                                <div class="panel panel-default">
                                                    <div class="panel-heading">Statistics</div>
                                                    <div class="panel-body panel-player-extra">
                                                        <div align="center">Health</div>
                                                        <div class="progress">
                                                            <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="9396" aria-valuemin="0" aria-valuemax="8090" style={{width: '116%'}}>
                                                                <span>9396 / 8090</span>
                                                            </div>
                                                        </div>
                                                        <div align="center">Mana</div>
                                                        <div class="progress">
                                                            <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20090" aria-valuemin="0" aria-valuemax="47640" style={{width: '42%'}}>
                                                                <span>20090 / 47640</span>
                                                            </div>
                                                        </div>
                                                        <div align="center">Soul</div>
                                                        <div class="progress">
                                                            <div class="progress-bar progress-bar-custom" role="progressbar" aria-valuenow="300" aria-valuemin="0" aria-valuemax="200" style={{width: '150%'}}>
                                                                <span>300 / 200</span>
                                                            </div>
                                                        </div>
                                                        <div align="center">Stamina</div>
                                                        <div class="progress">
                                                            <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="2520" aria-valuemin="0" aria-valuemax="2520" style={{width: '100%'}}>
                                                                <span>42 hours, 00 minutes</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="panel panel-default">
                                                    <div class="panel-heading">Equipment</div>
                                                    <div class="panel-body panel-player-extra">
                                                        <table class="table table-striped table-hover table-fixed">
                                                            <tbody>
                                                                <tr>
                                                                    <td align="center"></td>
                                                                    <td align="center"></td>
                                                                    <td align="center"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center"></td>
                                                                    <td align="center"></td>
                                                                    <td align="center"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center"><i class="fa fa-times"></i></td>
                                                                    <td align="center"></td>
                                                                    <td align="center"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center">Soul: 300</td>
                                                                    <td align="center"></td>
                                                                    <td align="center">Cap: 13265</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="panel panel-default">
                                                    <div class="panel-heading">Skills</div>
                                                    <div class="panel-body panel-player-extra">
                                                        <table class="table table-striped table-hover table-fixed">
                                                            <tbody>
                                                                <tr>
                                                                    <td class="left">Magic Level</td>
                                                                    <td class="right">151</td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="left">Melee</td>
                                                                    <td class="right">10</td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="left">Distance</td>
                                                                    <td class="right">10</td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="left">Shielding</td>
                                                                    <td class="right">23</td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="left">Fishing</td>
                                                                    <td class="right">10</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <table class="table table-striped table-hover table-fixed">
				
				
                <tbody><tr>
                    <td class="col-md-3">13 Aug 20 04:36 PM</td>
                    <td>Died at level <span class="notranslate">1674</span> to <a class="notranslate" href="/community/player/Huitzilopochtli">Huitzilopochtli</a> and <a class="notranslate" href="/community/player/Biskut Airlines">Biskut Airlines</a>.</td>
                    <td class="col-md-3 right">
                        
                        
                            <strong style={{color: 'green'}}>BLESS</strong>
                        
                    </td>
                </tr>
            
                <tr>
                    <td class="col-md-3">12 Aug 20 04:36 PM</td>
                    <td>Died at level <span class="notranslate">1673</span> to <span class="notranslate">The Shaper</span>.</td>
                    <td class="col-md-3 right">
                        
                        
                            <strong style={{color: 'green'}}>BLESS</strong>
                        
                    </td>
                </tr>
            
                <tr>
                    <td class="col-md-3">11 Aug 20 08:22 PM</td>
                    <td>Died at level <span class="notranslate">1665</span> to <a class="notranslate" href="/community/player/Elf">Elf</a> and <a class="notranslate" href="/community/player/Huitzilopochtli">Huitzilopochtli</a>.</td>
                    <td class="col-md-3 right">
                        
                        
                            <strong style={{color: 'green'}}>BLESS</strong>
                        
                    </td>
                </tr>
            
                <tr>
                    <td class="col-md-3">11 Aug 20 04:18 PM</td>
                    <td>Died at level <span class="notranslate">1665</span> to <span class="notranslate">the world ender</span>.</td>
                    <td class="col-md-3 right">
                        
                        
                            <strong style={{color: 'green'}}>BLESS</strong>
                        
                    </td>
                </tr>
            
                <tr>
                    <td class="col-md-3">11 Aug 20 03:07 PM</td>
                    <td>Died at level <span class="notranslate">1667</span> to <a class="notranslate" href="/community/player/Biskut Airlines">Biskut Airlines</a> and <a class="notranslate" href="/community/player/Momoa">Momoa</a>.</td>
                    <td class="col-md-3 right">
                        
                        
                            <strong style={{color: 'green'}}>BLESS</strong>
                        
                    </td>
                </tr>
            
                <tr>
                    <td class="col-md-3">05 Aug 20 09:04 PM</td>
                    <td>Died at level <span class="notranslate">1662</span> to <span class="notranslate">an infernal hound</span> and <span class="notranslate">a siegebreaker</span>.</td>
                    <td class="col-md-3 right">
                        
                        
                            <strong style={{color: 'green'}}>BLESS</strong>
                        
                    </td>
                </tr>
            

            
            
            </tbody></table>

                                        </div>
                                    </div>
                                </div>
                              
                            </div>
                            <div className="col-lg-6 col-xl-3 order-lg-2 order-xl-3">
                            
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
                                                <Link to='/'>View all</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </main>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}


const mapStateToProps = (state) => {
    return {
      players: state.player.player
    }

  }

  
  export default connect(mapStateToProps, { playerGetCharacter })(Character)