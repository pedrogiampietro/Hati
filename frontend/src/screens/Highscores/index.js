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

  useEffect(() => {
    highscoresList()
    .then(({ payload }) => {

      const newData = payload.data.data
      setPlayerList(newData)

    }).catch((err) => {
      alert('os players não foram carregados.')
      console.log(err)
    })
    
}, [highscoresList])

return (
    <div className="mod-bg-1">
     <div className="page-wrapper">
        <div className="page-inner">
            <Menu />

            <div className="page-content-wrapper">
            <Header />

                <main id="js-page-content" role="main" className="page-content">

                       

              <table className="table-highscores">
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
                   <tr>
                      <td key={id}>{index +1}</td>
                      <td key={id}><img src={outfit} alt="Outfit"/></td>
                      <td key={id}>{name}</td>
                      <td key={id}>{level}</td>
                      <td key={id}>{listVocations[vocation]}</td>
                   </tr>
                  )
                  )}    
                
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