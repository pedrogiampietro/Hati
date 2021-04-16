import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { highscoresList } from '../../actions/PlayerActions';
import { listSkills, characterVocations } from '../../config';
import Container from '../Layouts/Container';
import './styles.css';

const Highscores = ({ highscoresList }) => {
  const [playerList, setPlayerList] = useState([]);
  const [filterVocation, setFilterVocation] = useState('all');
  const [filterSkill, setFilterSkill] = useState('level');
  const [skillsName, setSkillsName] = useState('Level');
  const [pageInitial, setPageInitial] = useState(0);
  const [characterPerPage] = useState(10);

  useEffect(() => {
    highscoresList({
      vocation: filterVocation,
      skill: filterSkill,
      page: pageInitial,
    })
      .then(({ payload }) => {
        const newData = payload.data.data;
        setPlayerList(newData);
      })
      .catch((err) => {
        alert('os players não foram carregados.');
        console.log(err);
      });
  }, [highscoresList, filterVocation, filterSkill, pageInitial]);

  function onValueChangeVocation(e) {
    const options = e.target.value;
    setFilterVocation(options);
  }

  function onValueChangeSkill(e) {
    const options = e.target.value;

    listSkills.forEach(({ type, name }) => {
      if (type === options) {
        setSkillsName(name);
      }
    });

    setFilterSkill(options);
  }

  return (
    <Container>
      <div className="row">
        <div className="col">
          <div id="panel-1" className="panel">
            <div className="panel-hdr">
              <h2>Filter Skills</h2>
              <div className="panel-toolbar">
                <button
                  className="btn btn-panel waves-effect waves-themed"
                  data-action="panel-collapse"
                  data-toggle="tooltip"
                  data-offset="0,10"
                  data-original-title="Collapse"
                ></button>
                <button
                  className="btn btn-panel waves-effect waves-themed"
                  data-action="panel-fullscreen"
                  data-toggle="tooltip"
                  data-offset="0,10"
                  data-original-title="Fullscreen"
                ></button>
                <button
                  className="btn btn-panel waves-effect waves-themed"
                  data-action="panel-close"
                  data-toggle="tooltip"
                  data-offset="0,10"
                  data-original-title="Close"
                ></button>
              </div>
            </div>
            <div className="panel-container show">
              <div className="panel-content">
                <form>
                  <select className="form-control" onChange={onValueChangeVocation}>
                    <option value="all">All vocations</option>
                    <option value="0">Rooker</option>
                    <option value="1">Sorcerer</option>
                    <option value="2">Druid</option>
                    <option value="3">Paladin</option>
                    <option value="4">Knight</option>
                  </select>

                  <div className="funkyradio">
                    <div className="funkyradio-primary">
                      <input
                        type="radio"
                        name="radio"
                        id="level"
                        value="level"
                        checked={filterSkill === 'level'}
                        onChange={onValueChangeSkill}
                      />
                      <label htmlFor="level">Experience</label>
                    </div>

                    <div className="funkyradio-primary">
                      <input type="radio" name="radio" id="dist" value="skill_dist" onChange={onValueChangeSkill} />
                      <label htmlFor="dist">Distance</label>
                    </div>

                    <div className="funkyradio-primary">
                      <input type="radio" name="radio" id="magic" value="maglevel" onChange={onValueChangeSkill} />
                      <label htmlFor="magic">Magic Level</label>
                    </div>

                    <div className="funkyradio-primary">
                      <input type="radio" name="radio" id="sword" value="skill_sword" onChange={onValueChangeSkill} />
                      <label htmlFor="sword">Sword Fighting</label>
                    </div>

                    <div className="funkyradio-primary">
                      <input type="radio" name="radio" id="axe" value="skill_axe" onChange={onValueChangeSkill} />
                      <label htmlFor="axe">Axe Fighting</label>
                    </div>

                    <div className="funkyradio-primary">
                      <input type="radio" name="radio" id="club" value="skill_club" onChange={onValueChangeSkill} />
                      <label htmlFor="club">Club Fighting</label>
                    </div>

                    <div className="funkyradio-primary">
                      <input
                        type="radio"
                        name="radio"
                        id="shield"
                        value="skill_shielding"
                        onChange={onValueChangeSkill}
                      />
                      <label htmlFor="shield">Shielding</label>
                    </div>

                    <div className="funkyradio-primary">
                      <input type="radio" name="radio" id="fist" value="skill_fist" onChange={onValueChangeSkill} />
                      <label htmlFor="fist">Fist Fighting</label>
                    </div>

                    <div className="funkyradio-primary">
                      <input
                        type="radio"
                        name="radio"
                        id="fishing"
                        value="skill_fishing"
                        onChange={onValueChangeSkill}
                      />
                      <label htmlFor="fishing">Fishing Fighting</label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div id="panel-2" className="panel">
            <div className="panel-hdr">
              <h2>Highscores</h2>
              <div className="panel-toolbar">
                <button
                  className="btn btn-panel waves-effect waves-themed"
                  data-action="panel-collapse"
                  data-toggle="tooltip"
                  data-offset="0,10"
                  data-original-title="Collapse"
                ></button>
                <button
                  className="btn btn-panel waves-effect waves-themed"
                  data-action="panel-fullscreen"
                  data-toggle="tooltip"
                  data-offset="0,10"
                  data-original-title="Fullscreen"
                ></button>
                <button
                  className="btn btn-panel waves-effect waves-themed"
                  data-action="panel-close"
                  data-toggle="tooltip"
                  data-offset="0,10"
                  data-original-title="Close"
                ></button>
              </div>
            </div>
            <div className="panel-container">
              <div className="panel-content">
                <div className="table-responsive">
                  <table className="table-highscores">
                    <thead>
                      <tr>
                        <th width="3%">Rank</th>
                        <th width="20%">Name</th>
                        <th width="8%">{skillsName}</th>
                        <th width="8%">Vocation</th>
                      </tr>

                      {playerList.map((props, index) => {
                        const skill = filterSkill === 'level' ? props.level : props[filterSkill];
                        return (
                          <tr key={props.id}>
                            <td>{pageInitial * characterPerPage + index + 1}</td>

                            <td>
                              <Link to={`/character/${props.name}`}>{props.name}</Link>
                            </td>
                            <td>
                              <span className="badge opacity-50 p-1 width-6 bg-primary border-primary text-white">
                                {skill}
                              </span>
                            </td>

                            <td>{characterVocations[props.vocation]}</td>
                          </tr>
                        );
                      })}
                    </thead>
                  </table>
                </div>

                <div className="row justify-content-center pb-5">
                  <ul className="pagination my-4">
                    {pageInitial <= 0 ? (
                      <li className="page-item">
                        <button
                          className="page-link disabled mr-3"
                          aria-label="Previous"
                          onClick={(e) => setPageInitial(pageInitial - 1)}
                          disabled
                        >
                          &#8249;
                        </button>
                      </li>
                    ) : (
                      <li className="page-item">
                        <button
                          className="page-link round mr-3"
                          aria-label="Previous"
                          onClick={(e) => setPageInitial(pageInitial - 1)}
                        >
                          &#8249;
                        </button>
                      </li>
                    )}

                    {playerList.length >= 10 ? (
                      <li className="page-item">
                        <button className="page-link" aria-label="Next" onClick={() => setPageInitial(pageInitial + 1)}>
                          &#8250;
                        </button>
                      </li>
                    ) : (
                      <li className="page-item">
                        <button className="page-link disabled" disabled onClick={() => setPageInitial(pageInitial + 1)}>
                          &#8250;
                        </button>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
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

export default connect(mapStateToProps, { highscoresList })(Highscores);
