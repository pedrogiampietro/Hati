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

  const listSkills = [
    
    {type: 'level', name: 'Level'},
    {type: 'maglevel', name: 'Magic Level'},
    {type: 'skill_fist', name: 'First Fighting'},
    {type: 'skill_axe', name: 'Axe Fighting'},
    {type: 'skill_club', name: 'Club Fighting'},
    {type: 'skill_sword', name: 'Sword Fighting'},
    {type: 'skill_dist', name: 'Distance Fighting'},
    {type: 'skill_shielding', name: 'Shield Fighting'},
    {type: 'skill_fishing', name: 'Fishing'}

]


  const [ playerList, setPlayerList ] = useState([])
  const [ filterVocation, setFilterVocation] = useState('all')
  const [ filterSkill, setFilterSkill ] = useState('level')
  const [ skillsName, setSkillsName ] = useState('Level')

  useEffect(() => {
    highscoresList({
      vocation: filterVocation,
      skill: filterSkill

    })
    .then(({ payload }) => {
      const newData = payload.data.data
      setPlayerList(newData)

    }).catch((err) => {
      alert('os players não foram carregados.')
      console.log(err)
    })

}, [highscoresList, filterVocation, filterSkill])

 
  function onValueChangeVocation(e) {
    const options = e.target.value
     setFilterVocation(options)
  }

   
  function onValueChangeSkill(e) {

    const options = e.target.value

      listSkills.filter(({type, name}) => {
      if (type === options) {
        setSkillsName(name)
      }
    })

    setFilterSkill(options)
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
                <select className="filter-select" onChange={onValueChangeVocation}>
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
                  value="level" 
                  checked={filterSkill === 'level'}
                  onChange={onValueChangeSkill}
                  />
                  <label forname="exp">Experience</label>
                </div>

                <div className="distance">
                  <input 
                  name="type" 
                  type="radio" 
                  value="skill_dist"
                  onChange={onValueChangeSkill}
                  />
                  <label forname="distance">Distance</label>
                </div>

                <div className="magiclevel">
                  <input 
                  name="type" 
                  type="radio" 
                  value="maglevel" 
                  onChange={onValueChangeSkill}
                  />
                  <label forname="magiclevel">Magic Level</label>
                </div>

                <div className="sword">
                  <input 
                  name="type" 
                  type="radio" 
                  value="skill_sword"
                  onChange={onValueChangeSkill}
                  />
                  <label forname="sword">Sword Fighting</label>
                </div>

                <div className="axe">
                  <input 
                  name="type" 
                  type="radio" 
                  value="skill_axe"
                  onChange={onValueChangeSkill}
                  />
                  <label forname="axe">Axe Fighting</label>
                </div>

                <div className="club">
                  <input 
                  name="type" 
                  type="radio" 
                  value="skill_club"
                  onChange={onValueChangeSkill}
                  />
                  <label forname="club">Club Fighting</label>
                </div>

                <div className="shield">
                  <input 
                  name="type" 
                  type="radio" 
                  value="skill_shielding" 
                  onChange={onValueChangeSkill}
                  />
                  <label forname="shield">Shielding</label>
                </div>

                <div className="first">
                  <input 
                  name="type" 
                  type="radio" 
                  value="skill_fist"
                  onChange={onValueChangeSkill}
                  />
                  <label forname="first">First Fighting</label>
                </div>

                <div className="fishing">
                  <input 
                  name="type" 
                  type="radio" 
                  value="skill_fishing" 
                  onChange={onValueChangeSkill}
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
                          {
                             skillsName
                          }
                      </th>
                      <th width="8%">
                          Vocation
                      </th>
                  </tr>
                
                  { playerList.map((props, index) =>
                  { 
                    const verify = filterSkill === 'level' ? props.level : props[filterSkill]
                  return (
                   <tr key={props.id}>
                      <td>{index +1}</td>
                      <td><img src={outfit} alt="Outfit"/></td>
                      <td>{props.name}</td>
                      <td>{ verify }</td>
                      <td>{listVocations[props.vocation]}</td>
                   </tr>
                  )
                  })}    
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