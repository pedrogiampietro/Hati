import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { highscoresList } from '../../actions/PlayerActions'
import Menu from '../Layouts/Menu'
import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'

import './styles.css'

const Highscores = ({ highscoresList }) => {

  const outfit = `https://www.tibiawiki.com.br/images/e/e4/Outfit_Citizen_Male.gif`

  const listVocations = [
    'No Vocation', 
    'Sorcerer',
    'Druid',
    'Paladin',
    'Knight'
  ]

  const [ playerList, setPlayerList ] = useState([])
  const [ filterVocation, setFilterVocation] = useState('all')
  const [ filterSkill, setFilterSkill ] = useState()


  useEffect(() => {
    highscoresList({
      vocation: filterVocation
    })
    .then(({ payload }) => {

      const newData = payload.data.data
      setPlayerList(newData)

    }).catch((err) => {
      alert('os players não foram carregados.')
      console.log(err)
    })
    
}, [highscoresList, filterVocation])

 
  function onValueChange(e) {
    const options = e.target.value
     setFilterVocation(options)
        console.log(options)
  }

return (
    <div className="mod-bg-1">
     <div className="page-wrapper">
        <div className="page-inner">
            <Menu />

            <div className="page-content-wrapper">
            <Header />

                <main id="js-page-content" role="main" className="page-content">

          <div className="filter-highscores">

           <form>
                <select className="filter-select" onChange={onValueChange}>
                  <option value="all">All vocations</option>
                  <option value="0">Rooker</option>
                  <option value="1">Sorcerer</option>
                  <option value="2">Druid</option>
                  <option value="3">Paladin</option>
                  <option value="4">Knight</option>
                </select>
            
              <div className="filter-radios">

                <div className="exp">
                  <input 
                  name="type" 
                  type="radio" 
                  value="Exp" 
                  onChange={onValueChange}
                  />
                  <label forname="exp">Experience</label>
                </div>

                <div className="distance">
                  <input 
                  name="type" 
                  type="radio" 
                  value="Distance"
                  onChange={onValueChange}
                  />
                  <label forname="distance">Distance</label>
                </div>

                <div className="magiclevel">
                  <input 
                  name="type" 
                  type="radio" 
                  value="MagicLevel" 
                  onChange={onValueChange}
                  />
                  <label forname="magiclevel">Magic Level</label>
                </div>

                <div className="sword">
                  <input 
                  name="type" 
                  type="radio" 
                  value="Sword"
                  onChange={onValueChange}
                  />
                  <label forname="sword">Sword Fighting</label>
                </div>

                <div className="axe">
                  <input 
                  name="type" 
                  type="radio" 
                  value="Axe" 
                  onChange={onValueChange}
                  />
                  <label forname="axe">Axe Fighting</label>
                </div>

                <div className="club">
                  <input 
                  name="type" 
                  type="radio" 
                  value="Club" 
                  onChange={onValueChange}
                  />
                  <label forname="club">Club Fighting</label>
                </div>

                <div className="shield">
                  <input 
                  name="type" 
                  type="radio" 
                  value="Shield" 
                  onChange={onValueChange}
                  />
                  <label forname="shield">Shielding</label>
                </div>

                <div className="first">
                  <input 
                  name="type" 
                  type="radio" 
                  value="First"
                  onChange={onValueChange}
                  />
                  <label forname="first">First Fighting</label>
                </div>

                <div className="fishing">
                  <input 
                  name="type" 
                  type="radio" 
                  value="Fishing" 
                  onChange={onValueChange}
                  />
                  <label forname="fishing">Fishing</label>
                </div>

              </div>

              </form>   
         </div> 

              <table className="table-highscores">
                <thead>
                  <tr>
                      <th width="3%">
                          Rank
                      </th>
                      <th width="5%">Outfit</th>
                      <th width="20%">
                          Name
                      </th>
                      <th width="8%">
                          Level
                      </th>
                      <th width="8%">
                          Vocation
                      </th>
                  </tr>
                
                  { playerList.map(({ id, name, level, vocation }, index) => 
                  (
                   <tr key={id}>
                      <td>{index +1}</td>
                      <td><img src={outfit} alt="Outfit"/></td>
                      <td>{name}</td>
                      <td>{level}</td>
                      <td>{listVocations[vocation]}</td>
                   </tr>
                  )
                  )}    
                </thead>
              </table>
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

export default connect(mapStateToProps, { highscoresList })(Highscores)