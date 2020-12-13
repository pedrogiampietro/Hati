import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { playersOnline } from '../../actions/OnlineActions'
import { characterVocations } from '../../config'

import Container from '../Layouts/Container'

const Online = ({ playersOnline }) => {
  const [isOnline, setIsOnline] = React.useState([])

  React.useEffect(() => {
    playersOnline().then(({ payload }) => {
      const newData = payload.data.data
      setIsOnline(newData)
    })
  }, [playersOnline])

  return (
    <Container>
      <div className="row">
        <div className="col-xl-6">
          <div className="panel">
            <div className="panel-hdr" role="heading">
              <h2>
                Graph of the{' '}
                <span className="fw-300">
                  <i>players</i>
                </span>
              </h2>
            </div>
            <div className="panel-container show">
              <div className="loader">
                <i className="fal fa-spinner-third fa-spin-4x fs-xxl" />
              </div>
              <div className="panel-content poisition-relative">
                <div className="pb-5 pt-3">
                  <div className="row">
                    <div className="col-6 col-xl-3 d-sm-flex align-items-center">
                      <div className="p-2 mr-3 bg-info-200 rounded">ICON1</div>
                      <div>
                        <label className="fs-sm mb-0">First Rate</label>
                        <h4 className="font-weight-bold mb-0">37.56%</h4>
                      </div>
                    </div>
                    <div className="col-6 col-xl-3 d-sm-flex align-items-center">
                      <div className="p-2 mr-3 bg-info-300 rounded">ICON2</div>
                      <div>
                        <label className="fs-sm mb-0">Second Rate</label>
                        <h4 className="font-weight-bold mb-0">759</h4>
                      </div>
                    </div>
                    <div className="col-6 col-xl-3 d-sm-flex align-items-center">
                      <div className="p-2 mr-3 bg-success-300 rounded">
                        ICON3
                      </div>
                      <div>
                        <label className="fs-sm mb-0">Third Rate</label>
                        <h4 className="font-weight-bold mb-0">12.17%</h4>
                      </div>
                    </div>
                    <div className="col-6 col-xl-3 d-sm-flex align-items-center">
                      <div className="p-2 mr-3 bg-success-500 rounded">
                        ICON4
                      </div>
                      <div>
                        <label className="fs-sm mb-0">Fourth Rate</label>
                        <h4 className="font-weight-bold mb-0">19.77%</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
  )
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, { playersOnline })(Online)
