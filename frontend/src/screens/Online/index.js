import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { playersOnline } from '../../actions/OnlineActions';
import { characterVocations } from '../../config';

import Container from '../Layouts/Container';

const Online = ({ playersOnline }) => {
  const [isOnline, setIsOnline] = React.useState([]);

  React.useEffect(() => {
    playersOnline().then(({ payload }) => {
      const newData = payload.data.data;
      setIsOnline(newData);
    });
  }, [playersOnline]);

  return (
    <Container>
      <div className="row">
        <div className="col-xl-6">
          <div id="panel-2" className="panel">
            <div className="panel-hdr">
              <h2>Online List</h2>
              <div className="panel-toolbar">
                <button
                  className="btn btn-panel waves-effect waves-themed"
                  data-action="panel-collapse"
                ></button>
                <button
                  className="btn btn-panel waves-effect waves-themed"
                  data-action="panel-fullscreen"
                ></button>
                <button
                  className="btn btn-panel waves-effect waves-themed"
                  data-action="panel-close"
                ></button>
              </div>
            </div>
            <div className="panel-container show">
              <div className="panel-content">
                <div className="table-responsive">
                  <table className="table-highscores">
                    <thead>
                      <tr>
                        <th width="8%">Name</th>
                        <th width="20%">Guild</th>
                        <th width="8%">Level</th>
                        <th width="8%">Vocation</th>
                      </tr>

                      {isOnline?.rows?.map((listOnline) => (
                        <tr key={listOnline.player_id}>
                          <td>
                            <Link to={`/character/`}>
                              {listOnline.player.name}
                            </Link>
                          </td>

                          <td>
                            <Link to={`/character/`}>
                              {listOnline.guild_memberships.length >= 1
                                ? listOnline.guild_memberships[0]?.guild.name
                                : null}
                            </Link>
                          </td>
                          <td>
                            <span className="badge opacity-50 p-1 width-6 bg-primary border-primary text-white">
                              {listOnline.player.level}
                            </span>
                          </td>

                          <td>
                            {characterVocations[listOnline.player.vocation]}
                          </td>
                        </tr>
                      ))}
                    </thead>
                  </table>
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
  return {};
};

export default connect(mapStateToProps, { playersOnline })(Online);
