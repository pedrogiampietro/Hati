import React from 'react';
import { connect } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { playerCreate, playerList } from '../../../../actions/PlayerActions';

import Container from '../../../Layouts/Container';
import { createVocations } from '../../../../config';

import './styles.css';

const CreateCharacter = ({ playerCreate, playerList, player }) => {
  const history = useHistory();

  const [name, setName] = React.useState('');
  const [sex, setSex] = React.useState('');
  const [vocation, setVocation] = React.useState('');

  React.useEffect(() => {
    playerList();
  }, [playerList]);

  const submitHandler = event => {
    event.preventDefault();

    const data = {
      name,
      sex,
      vocation,
    };

    playerCreate(data)
      .then(() => {
        history.push('/account/characters');
      })
      .catch(err => {
        console.error(err);
      });
  };

  if (player?.length >= 5) {
    return <Redirect to="/account/characters" />;
  }

  return (
    <Container>
      <form onSubmit={submitHandler}>
        <div id="contentBody" className="col-sm-9">
          <div className="col-xl-6 ml-auto mr-auto">
            <div className="tab-content py-3">
              <div className="tab-pane fade active show">
                <div className="panel panel-default">
                  <div className="panel-heading">Create Character</div>
                  <div className="panel-body">
                    <div className="modal-body">
                      <div className="section over-hide z-bigger">
                        <div className="background-color"></div>
                        <div className="section over-hide z-bigger">
                          <div className="container pb-5">
                            <div className="form-group">
                              <label className="form-label" htmlFor={name}>
                                Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name={name}
                                placeholder="Enter your nickname"
                                onChange={event =>
                                  setName(
                                    event.target.value
                                      .toLowerCase()
                                      .split(' ')
                                      .map(
                                        word =>
                                          word.charAt(0).toUpperCase() +
                                          word.slice(1)
                                      )
                                      .join(' ')
                                  )
                                }
                                required
                              />
                              <span className="help-block">
                                Your unique username to Game.
                              </span>
                            </div>

                            <div className="row justify-content-center pb-5">
                              <input
                                type="radio"
                                className="visible"
                                name="sex"
                                value="0"
                                data-icon=""
                                onChange={event =>
                                  setSex(Number(event.target.value))
                                }
                              />
                              <input
                                type="radio"
                                className="visible"
                                name="sex"
                                value="1"
                                data-icon=""
                                onChange={event =>
                                  setSex(Number(event.target.value))
                                }
                              />
                            </div>

                            <div className="main-container">
                              <h2>What's your favourite vocation?</h2>

                              <div className="row justify-content-center pb-5">
                                {/* <Error error={error} /> */}
                              </div>

                              <div className="col-12 pb-5">
                                {Object.keys(createVocations).map(vocation => (
                                  <label
                                    key={createVocations[vocation].vocation_id}
                                    htmlFor={
                                      createVocations[vocation].vocation_id
                                    }
                                    className="custom-radio"
                                  >
                                    <input
                                      type="radio"
                                      name="vocation"
                                      id={createVocations[vocation].vocation_id}
                                      value={
                                        createVocations[vocation].vocation_id
                                      }
                                      onChange={event =>
                                        setVocation(Number(event.target.value))
                                      }
                                    />
                                    <span className="radio-btn">
                                      <i className="las la-check"></i>
                                      <div className="hobbies-icon">
                                        <i className="fas fa-ghost"></i>
                                        <h3>
                                          {createVocations[vocation].name}
                                        </h3>
                                      </div>
                                    </span>
                                  </label>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row justify-content-center pb-5">
                      <button className="btn btn-dark btn-round">Create</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    player: state.player.player,
  };
};

export default connect(mapStateToProps, { playerCreate, playerList })(
  CreateCharacter
);
