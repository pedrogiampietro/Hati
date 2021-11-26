import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { highscoresList } from '../../actions/PlayerActions';
import { listSkills, characterVocations } from '../../config';
import { Pagination } from '../../components/Pagination';
import Container from '../Layouts/Container';
import './styles.css';

const Highscores = ({ highscoresList }) => {
  const [playerList, setPlayerList] = useState([]);
  const [filterVocation, setFilterVocation] = useState('all');
  const [filterSkill, setFilterSkill] = useState('level');
  const [skillsName, setSkillsName] = useState('Level');
  const [page, setPage] = useState(1);
  const [characterPerPage] = useState(10);
  const [loading, setLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(0);

  const fetchHighscores = useCallback(async () => {
    try {
      const { payload } = await highscoresList({
        params: {
          vocation: filterVocation,
          skill: filterSkill,
        },
        headers: {
          page: page,
          per_Page: characterPerPage,
        },
      });

      setTotalCount(payload.data.data.count);
      setPlayerList(payload.data.data.rows);
    } catch {
      return;
    } finally {
      setLoading(false);
    }
  }, [highscoresList, filterVocation, filterSkill, page]);

  useEffect(() => {
    fetchHighscores();
  }, [fetchHighscores]);

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
            </div>
            <div className="panel-container show">
              <div className="panel-content">
                <form>
                  <select
                    className="form-control"
                    onChange={onValueChangeVocation}
                  >
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
                      <input
                        type="radio"
                        name="radio"
                        id="dist"
                        value="skill_dist"
                        onChange={onValueChangeSkill}
                      />
                      <label htmlFor="dist">Distance</label>
                    </div>

                    <div className="funkyradio-primary">
                      <input
                        type="radio"
                        name="radio"
                        id="magic"
                        value="maglevel"
                        onChange={onValueChangeSkill}
                      />
                      <label htmlFor="magic">Magic Level</label>
                    </div>

                    <div className="funkyradio-primary">
                      <input
                        type="radio"
                        name="radio"
                        id="sword"
                        value="skill_sword"
                        onChange={onValueChangeSkill}
                      />
                      <label htmlFor="sword">Sword Fighting</label>
                    </div>

                    <div className="funkyradio-primary">
                      <input
                        type="radio"
                        name="radio"
                        id="axe"
                        value="skill_axe"
                        onChange={onValueChangeSkill}
                      />
                      <label htmlFor="axe">Axe Fighting</label>
                    </div>

                    <div className="funkyradio-primary">
                      <input
                        type="radio"
                        name="radio"
                        id="club"
                        value="skill_club"
                        onChange={onValueChangeSkill}
                      />
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
                      <input
                        type="radio"
                        name="radio"
                        id="fist"
                        value="skill_fist"
                        onChange={onValueChangeSkill}
                      />
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
            </div>
            <div className="panel-container">
              <div className="panel-content">
                <div className="table-responsive">
                  <table className="table table-striped table-condensed">
                    <thead>
                      <tr>
                        <th width="3%">Rank</th>
                        <th width="20%">Name</th>
                        <th width="8%">{skillsName}</th>
                        <th width="8%">Vocation</th>
                      </tr>

                      {playerList.map((props, index) => {
                        const skill =
                          filterSkill === 'level'
                            ? props.level
                            : props[filterSkill];
                        return (
                          <tr key={props.id}>
                            <td>{page * characterPerPage - 10 + index + 1}</td>

                            <td>
                              <Link to={`/character/${props.name}`}>
                                {props.name}
                              </Link>
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
                  <Pagination
                    totalCountOfRegisters={totalCount}
                    currentPage={page}
                    onPageChange={setPage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    players: state.player.player,
  };
};

export default connect(mapStateToProps, { highscoresList })(Highscores);
