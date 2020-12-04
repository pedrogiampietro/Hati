import React from 'react'
import { connect } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import {
  guildShow,
  guildMember,
  guildInvite,
  guildGetInvites,
  guildHasInvite,
  guildAccept,
  postGuildLogo,
  editGuildDescription,
  editGuildRanks,
} from '../../../actions/GuildActions'
import { getFormData } from '../../../helpers/FormData'
import { getAvatarUrl } from '../../../helpers/Api'
import { characterVocations } from '../../../config'
import Outfiter from '../../../helpers/Outfiter'

import Container from '../../Layouts/Container'
import GuildLogoDefault from '../../../assets/img/guild_logo_default.png'
import { FaSignInAlt, FaRegTrashAlt } from 'react-icons/fa'

import './styles.css'

const GuildList = ({
  guildShow,
  guildMember,
  guildInvite,
  guildGetInvites,
  guildHasInvite,
  guildAccept,
  postGuildLogo,
  editGuildRanks,
  guild,
}) => {
  const [currentGuild, setCurrentGuild] = React.useState([])
  const [member, setMember] = React.useState([])
  const [invitedList, setInvitedList] = React.useState([])
  const [acceptInvite, setAcceptInvite] = React.useState([])
  const [playerId, setPlayerId] = React.useState(0)
  const [postInteraction, setPostInteraction] = React.useState(false)
  const [image, setImage] = React.useState('')
  const [imagePreview, setImagePreview] = React.useState('')

  const [getRanks, setGetRanks] = React.useState([])
  const [editLeader, setEditLeader] = React.useState('')
  const [editVice, setEditVice] = React.useState('')
  const [editMember, setEditMember] = React.useState('')

  function interaction() {
    setPostInteraction(!postInteraction)
  }

  const { id } = useParams()

  React.useEffect(() => {
    guildShow(id).then(({ payload }) => {
      const newData = payload.data.data
      setCurrentGuild(newData)
    })
    guildMember(id).then(({ payload }) => {
      const newData = payload.data.data
      setMember(newData)
    })
    guildGetInvites(id).then(({ payload }) => {
      const newData = payload.data.data
      setInvitedList(newData)
    })

    guildHasInvite(id).then(({ payload }) => {
      const newData = payload.data.data
      setAcceptInvite(newData)
    })
    editGuildRanks(id).then(({ payload }) => {
      const newData = payload.data.data
      setGetRanks(newData)
    })
  }, [
    guildShow,
    guildGetInvites,
    guildMember,
    guildHasInvite,
    editGuildRanks,
    id,
    postInteraction,
  ])

  const submitHandler = (e) => {
    e.preventDefault()
    const data = getFormData(e)
    guildInvite(id, data)
    interaction()
  }

  const acceptHandler = (e) => {
    e.preventDefault(e)
    guildAccept(id, playerId)
    interaction()
  }

  const handleSelectImages = (e) => {
    if (!e.target.files) {
      return
    }

    const selectedImage = e.target.files[0]
    setImage(selectedImage)
    const preview = URL.createObjectURL(selectedImage)
    setImagePreview(preview)
  }

  const submitLogoHandler = (e) => {
    e.preventDefault(e)
    const formData = new FormData()
    formData.append('guild_logo', image)
    postGuildLogo(id, formData)
  }

  const submitDescriptionHandler = (e) => {
    e.preventDefault(e)
    const data = getFormData(e)
    editGuildDescription(id, data)
  }

  const submitRanksHandler = (e) => {
    e.preventDefault(e)

    const data = {
      editLeader,
      editVice,
      editMember,
    }

    // formData.append('name', editMember || getRanks[2]?.name)

    editGuildRanks(id, data)
  }

  return (
    <Container>
      <div className="panel panel-default col-sm-6 mx-auto">
        <div className="panel-heading">Overview</div>
        <div className="panel-body">
          <div className="parent">
            <div className="guild-logo ml-4">
              <div className="d-inline-flex flex-column justify-content-center mr-3">
                <span className="fw-300 fs-xs d-block opacity-50">
                  <img
                    className="profile-image-lg"
                    src={`${
                      currentGuild.logo_gfx_name === '' ||
                      currentGuild.logo_gfx_name === null
                        ? GuildLogoDefault
                        : currentGuild.logo_gfx_name &&
                          getAvatarUrl(currentGuild.logo_gfx_name)
                    }`}
                    alt="GuildLogo"
                  />
                </span>
                <span className="fw-500 fs-xl d-block color-primary-500 mb-6 mx-auto">
                  0 Member
                </span>
              </div>
            </div>
            <div className="guild-description ml-4">
              <h2 className="text-primary">Guild Description</h2>
              <p
                dangerouslySetInnerHTML={{ __html: currentGuild.description }}
              />
            </div>
            <div className="guild-name">
              <span className="display-4 d-block l-h-n m-0 fw-500 text-primary">
                <p className="attempt-1">
                  <em>{currentGuild.name}</em>
                </p>
              </span>
            </div>
          </div>

          <div className="panel-body mt-4">
            <ul className="nav nav-pills" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  data-toggle="tab"
                  href="#members"
                >
                  <i className="fal fa-user mr-1"></i>Members
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#wars">
                  <i className="fal fa-chart-bar mr-1"></i>Active Wars
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#settings">
                  <i className="fal fa-cog text-danger mr-1" />
                  Settings
                </a>
              </li>
            </ul>

            <hr />
            <div className="tab-content">
              <div className="tab-pane active table-responsive" id="members">
                <table className="table table-bordered ">
                  <thead>
                    <tr>
                      <th>Rank</th>

                      <th>Player</th>
                      <th>Vocation &amp; Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    {member.map((members) =>
                      members.rank === members.guild_rank.level ? (
                        <tr key={members.id}>
                          <td>
                            {members.rank === members.guild_rank.level
                              ? members.guild_rank.name
                              : null}
                          </td>

                          <td>
                            <div
                              className={`${
                                members.players_online === null
                                  ? `d-inline-block align-middle status status-danger mr-3`
                                  : `d-inline-block align-middle status status-success mr-3`
                              }`}
                            >
                              <Outfiter
                                Name={members.name}
                                LookBody={members.player.lookbody}
                                LookFeet={members.player.lookfeet}
                                LookHead={members.player.lookhead}
                                LookLegs={members.player.looklegs}
                                LookType={members.player.looktype}
                                LookAddons={members.lookaddons}
                              />
                            </div>
                            <div className="info-card-text flex-1">
                              <h2 className="fs-xl text-truncate text-truncate-lg text-primary">
                                <Link to={`/character/${members.player.name}`}>
                                  {members.player.name}{' '}
                                  <span className="fw-300">
                                    <i>(Rei do Gesior)</i>
                                  </span>
                                </Link>
                              </h2>
                            </div>
                          </td>
                          <td className="hidden-xs">
                            {characterVocations[members.player.vocation]} (Level{' '}
                            {members.player.level})
                          </td>
                        </tr>
                      ) : null
                    )}
                  </tbody>
                </table>
              </div>
              <div className="tab-pane" id="wars">
                <br />
                {currentGuild.name} is not currently participating in any active
                war.
              </div>
              <div className="tab-pane" id="settings">
                <div className="panel-container show">
                  <div className="panel-content">
                    <div className="row">
                      <div className="col-auto">
                        <div
                          className="nav flex-column nav-pills"
                          id="v-pills-tab"
                          role="tablist"
                          aria-orientation="vertical"
                        >
                          <a
                            className="nav-link active"
                            id="v-pills-changelogo-tab"
                            data-toggle="pill"
                            href="#v-pills-changelogo"
                            role="tab"
                            aria-controls="v-pills-changelogo"
                            aria-selected="true"
                          >
                            <i className="fal fa-home" />
                            <span className="hidden-sm-down ml-1">
                              {' '}
                              Change Logo
                            </span>
                          </a>
                          <a
                            className="nav-link"
                            id="v-pills-changeguild-description-tab"
                            data-toggle="pill"
                            href="#v-pills-changeguild-description"
                            role="tab"
                            aria-controls="v-pills-changeguild-description"
                            aria-selected="false"
                          >
                            <i className="fal fa-user" />
                            <span className="hidden-sm-down ml-1">
                              {' '}
                              Change Guild Description
                            </span>
                          </a>
                          <a
                            className="nav-link"
                            id="v-pills-renameguildrank-tab"
                            data-toggle="pill"
                            href="#v-pills-renameguildrank"
                            role="tab"
                            aria-controls="v-pills-renameguildrank"
                            aria-selected="false"
                          >
                            <i className="fal fa-envelope" />
                            <span className="hidden-sm-down ml-1">
                              {' '}
                              Rename Guild Ranks
                            </span>
                          </a>
                          <a
                            className="nav-link"
                            id="v-pills-disband-tab"
                            data-toggle="pill"
                            href="#v-pills-disband"
                            role="tab"
                            aria-controls="v-pills-disband"
                            aria-selected="false"
                          >
                            <i className="fal fa-cog" />
                            <span className="hidden-sm-down ml-1">
                              Disband Guild
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="col">
                        <div className="tab-content" id="v-pills-tabContent">
                          <div
                            className="tab-pane fade active show"
                            id="v-pills-changelogo"
                            role="tabpanel"
                            aria-labelledby="v-pills-changelogo-tab"
                          >
                            <h3>Change Logo</h3>
                            <div className="row no-gutters">
                              <div className="col-12 col-sm-6 col-md-8">
                                <form onSubmit={submitLogoHandler}>
                                  Here you can change your guild logo by
                                  uploading an image file.
                                  <br />
                                  Logo rules:
                                  <ul>
                                    <li>
                                      The file size can not be bigger than 3 MB.
                                    </li>
                                    <li>
                                      The image dimensions can't be bigger than
                                      128x128.
                                    </li>
                                    <li>
                                      The file format must be either PNG, GIF or
                                      JPEG.
                                    </li>
                                  </ul>
                                  <div className="form-group">
                                    <input
                                      type="file"
                                      name="guild_logo"
                                      accept="image/*"
                                      className="btn btn-primary btn-sm"
                                      onChange={handleSelectImages}
                                    />
                                  </div>
                                  <button
                                    ctype="submit"
                                    className="btn btn-primary btn-sm"
                                  >
                                    Upload
                                  </button>
                                </form>
                              </div>
                              <div className="mx-auto">
                                <img src={imagePreview} alt="" />
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="v-pills-changeguild-description"
                            role="tabpanel"
                            aria-labelledby="v-pills-changeguild-description-tab"
                          >
                            <h3>Change Guild Description</h3>
                            <div className="text-center mb-3">
                              <form onSubmit={submitDescriptionHandler}>
                                <div className="col-xl-12 ml-auto mr-auto">
                                  <div className="card p-4 rounded-plus bg-faded">
                                    <textarea
                                      className="form-control"
                                      name="description"
                                      cols="30"
                                      rows="10"
                                      data={guild}
                                    ></textarea>

                                    <div className="row justify-content-center pb-1">
                                      <div className="mx-auto">
                                        <button className="btn btn-block btn-danger btn-lg mt-3 waves-effect waves-themed">
                                          Update
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="v-pills-renameguildrank"
                            role="tabpanel"
                            aria-labelledby="v-pills-renameguildrank-tab"
                          >
                            <h3>Rename Guild Rank</h3>
                            <div className="card p-4 border-top-left-radius-0 border-top-right-radius-0">
                              <form onSubmit={submitRanksHandler}>
                                {/* <div className="form-group">
                                  <input
                                    className="form-control"
                                    type="text"
                                    name="name"
                                    placeholder={getRanks[0]?.name}
                                    onChange={(e) =>
                                      setEditLeader(e.target.value)
                                    }
                                    required
                                  />
                                </div>

                                <div className="form-group">
                                  <input
                                    className="form-control"
                                    type="text"
                                    name="name"
                                    placeholder={getRanks[1]?.name}
                                    onChange={(e) =>
                                      setEditVice(e.target.value)
                                    }
                                    required
                                  />
                                </div>

                                <div className="form-group">
                                  <input
                                    className="form-control"
                                    type="text"
                                    name="name"
                                    placeholder={getRanks[2]?.name}
                                    onChange={(e) =>
                                      setEditMember(e.target.value)
                                    }
                                    required
                                  />
                                </div> */}

                                <button
                                  type="submit"
                                  className="btn btn-outline-primary float-right waves-effect waves-themed"
                                >
                                  Change Rank Title
                                </button>
                              </form>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="v-pills-disband"
                            role="tabpanel"
                            aria-labelledby="v-pills-disband-tab"
                          >
                            <h3>Disbang Guild</h3>
                            <button
                              type="button"
                              className="btn btn-lg btn-outline-danger waves-effect waves-themed col-12"
                            >
                              <span className="fal fa-times mr-1"></span>
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-sm-5 mx-auto">
        <form onSubmit={acceptHandler}>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Player</th>
                <th>Vocation &amp; Level</th>
                <th />
              </tr>
            </thead>

            <tbody>
              {acceptInvite.length > 0
                ? acceptInvite.map((list) => (
                    <tr key={list.id}>
                      <td>
                        <Link
                          className="notranslate"
                          to={`/character/${list.player.name}`}
                        >
                          {list.player.name}
                        </Link>
                      </td>
                      <td className="hidden-xs">
                        {characterVocations[list.player.vocation]} (Level{' '}
                        {list.player.level})
                      </td>

                      <td>
                        <div align="center">
                          {acceptInvite.length > 0 ? (
                            <button
                              type="submit"
                              className="btn btn-outline-success btn-sm ml-auto mr-2 flex-shrink-0 waves-effect waves-themed"
                              id={list.id}
                              onClick={() => setPlayerId(list.player_id)}
                            >
                              <FaSignInAlt size={14} />
                            </button>
                          ) : null}

                          {/* <span className="btn btn-outline-danger btn-sm flex-shrink-0 waves-effect waves-themed">
									<FaRegTrashAlt size={14} color="#" />
								</span> */}
                        </div>
                      </td>
                    </tr>
                  ))
                : invitedList?.map((list) => (
                    <tr key={list.id}>
                      <td>
                        <Link
                          className="notranslate"
                          to={`/character/${list.player.name}`}
                        >
                          {list.player.name}
                        </Link>
                      </td>
                      <td className="hidden-xs">
                        {characterVocations[list.player.vocation]} (Level{' '}
                        {list.player.level})
                      </td>

                      <td>
                        <div align="center">
                          {acceptInvite.length > 0 ? (
                            <button
                              type="submit"
                              className="btn btn-outline-success btn-sm ml-auto mr-2 flex-shrink-0 waves-effect waves-themed"
                              id={list.id}
                              onClick={() => setPlayerId(list.player_id)}
                            >
                              <FaSignInAlt size={14} />
                            </button>
                          ) : null}

                          {/* <span className="btn btn-outline-danger btn-sm flex-shrink-0 waves-effect waves-themed">
												<FaRegTrashAlt size={14} color="#" />
											</span> */}
                        </div>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </form>
      </div>
      <form onSubmit={submitHandler}>
        <div className="d-flex flex-column align-items-center justify-content-center text-center">
          <div className="row">
            <div className="col-9 pr-1 mb-3">
              <input
                type="text"
                name="player_id"
                className="form-control"
                placeholder="Enter name to invite player."
              />
            </div>
            <div className="col-3 pr-1 mb-3">
              <button className="btn btn-sm btn-outline-primary">Invite</button>
            </div>
          </div>
        </div>
      </form>
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    account: state.account.account,
    players: state.player.player,
    guild: state.guild.guild,
  }
}

export default connect(mapStateToProps, {
  guildShow,
  guildMember,
  guildInvite,
  guildGetInvites,
  guildHasInvite,
  guildAccept,
  postGuildLogo,
  editGuildRanks,
})(GuildList)
