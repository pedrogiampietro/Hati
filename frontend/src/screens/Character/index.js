import React from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { playerGetCharacter } from '../../actions/PlayerActions';

import Outfiter from '../../helpers/Outfiter';

import Container from '../Layouts/Container';
import Profile from './Profile';
import Achievement from './Achievement';
import DeathList from './DeathList';
import CharacterList from './CharacterList';
import './styles.css';

const arrItems = {
  slotHead: 1,
  slotNecklace: 2,
  slotBackpack: 3,
  slotArmor: 4,
  slotRight: 5,
  slotLeft: 6,
  slotLegs: 7,
  slotFeet: 8,
  slotRing: 9,
  slotAmmo: 10,
};

const Character = ({ playerGetCharacter }) => {
  const history = useHistory();
  const { name } = useParams();
  const [characterPage, setCharacterPage] = React.useState([]);
  const [playerDeaths, setPlayerDeaths] = React.useState([]);
  const [playerAchieve, setPlayerAchieve] = React.useState([]);
  const [characterList, setCharacterList] = React.useState([]);
  // const [playerItems, setPlayerItems] = React.useState([]);
  // const [stateItems, setStateItems] = React.useState(arrItems);

  React.useEffect(() => {
    playerGetCharacter(name)
      .then(({ payload }) => {
        /* data players */
        const dataPlayers = payload.data.data.rows[0];
        setCharacterPage(dataPlayers);

        /* data deaths */
        const dataDeaths = payload.data.data.rows[0].player_deaths;
        setPlayerDeaths(dataDeaths);

        const dataAchievement = payload.data.data.achievements;
        setPlayerAchieve(dataAchievement);

        const dataCharacterList = payload.data.data.characterList;
        setCharacterList(dataCharacterList);

        // const playerItems = payload.data.data.rows[0].player_items;
        // setPlayerItems(playerItems);
      })
      .catch((err) => {
        history.push('/PageSearch');
      });
  }, [name, history, playerGetCharacter]);

  // const meleeArray = [
  //   characterPage.skill_axe,
  //   characterPage.skill_club,
  //   characterPage.skill_sword,
  // ];
  // const newMeleeSkill = Math.max(...meleeArray);

  // React.useEffect(() => {
  //   let oizin = {};
  //   Object.entries(arrItems).forEach(([value, index]) => {
  //     playerItems.forEach((item) => {
  //       if (item.pid === index) {
  //         oizin[value] = item.itemtype;
  //       }
  //     });
  //   });

  //   setStateItems(oizin);
  // }, [playerItems]);

  return (
    <Container>
      <div className="text-center mb-3">
        <div className="col-xl-6 ml-auto mr-auto">
          <div className="card p-4 rounded-plus bg-faded">
            <div>
              {/* Profile start */}
              <div className="row align-items-center">
                <div className="col-sm-12">
                  <h3>Character profile of {characterPage.name}</h3>
                </div>
              </div>

              <Profile characterPage={characterPage} />
              {/* Profile end */}

              {/* Achievements start */}
              <h3>Achievements</h3>
              <Achievement playerAchieve={playerAchieve} />
              {/* Achievements end */}

              {/* DeathList start */}
              <h3>DeathList</h3>
              <DeathList playerDeaths={playerDeaths} />
              {/* Deathlist end */}

              {/* CharcterList */}
              <h3>Characters list</h3>
              <CharacterList characterList={characterList} />
              {/* CharacterList end */}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    players: state.player.player,
  };
};

export default connect(mapStateToProps, { playerGetCharacter })(Character);
