import React from 'react';
import { FaSignInAlt, FaRegTrashAlt } from 'react-icons/fa';
import { connect } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import {
  editGuildDescription,
  editGuildRanks,
  guildAccept,
  guildGetInvites,
  guildHasInvite,
  guildInvite,
  guildMember,
  guildRemove,
  guildShow,
  postGuildLogo,
  setGuildToRemove,
} from '../../../actions/GuildActions';

import { playerList } from '../../../actions/PlayerActions';
import GuildLogoDefault from '../../../assets/img/guild_logo_default.png';
import { characterVocations } from '../../../config';
import { getImageUrl } from '../../../helpers/Api';
import { getFormData } from '../../../helpers/FormData';

import Container from '../../Layouts/Container';
import ChangeLogo from './ChangeLogo';
import GuildDescription from './GuildDescription';
import GuildRank from './GuildRank';

import './styles.css';

const GuildList = ({
  guildShow,
  guildMember,
  guildInvite,
  guildGetInvites,
  guildHasInvite,
  guildAccept,
  postGuildLogo,
  editGuildRanks,
  setGuildToRemove,
  guildToRemove,
  guildRemove,
  guild,
  playerList,
}) => {
  const [currentGuild, setCurrentGuild] = React.useState([]);
  const [member, setMember] = React.useState([]);
  const [invitedList, setInvitedList] = React.useState([]);
  const [acceptInvite, setAcceptInvite] = React.useState([]);
  const [playerId, setPlayerId] = React.useState(0);
  const [postInteraction, setPostInteraction] = React.useState(false);
  const [image, setImage] = React.useState('');
  const [imagePreview, setImagePreview] = React.useState('');
  const [getPlayerInAccount, setGetPlayerInAccount] = React.useState([]);

  const [getRanks, setGetRanks] = React.useState([]);
  const [editLeader, setEditLeader] = React.useState('');
  const [editVice, setEditVice] = React.useState('');
  const [editMember, setEditMember] = React.useState('');

  const history = useHistory();
  const { id } = useParams();

  function interaction() {
    setPostInteraction(!postInteraction);
  }

  React.useEffect(() => {
    playerList().then(({ payload }) => {
      const newData = payload.data.data;
      setGetPlayerInAccount(newData);
    });
    guildShow(id).then(({ payload }) => {
      const newData = payload.data.data;
      setCurrentGuild(newData);
    });
    guildMember(id).then(({ payload }) => {
      const newData = payload.data.data;
      setMember(newData);
    });
    guildGetInvites(id).then(({ payload }) => {
      const newData = payload.data.data;
      setInvitedList(newData);
    });

    guildHasInvite(id).then(({ payload }) => {
      const newData = payload.data.data;
      setAcceptInvite(newData);
    });
    editGuildRanks(id).then(({ payload }) => {
      const newData = payload.data.data;
      setGetRanks(newData);
    });
  }, [
    id,
    guildShow,
    guildGetInvites,
    guildMember,
    guildHasInvite,
    editGuildRanks,
    postInteraction,
    playerList,
  ]);

  const submitHandler = (e) => {
    e.preventDefault();
    const data = getFormData(e);
    guildInvite(id, data);
    interaction();
  };

  const acceptHandler = (e) => {
    e.preventDefault(e);
    guildAccept(id, playerId);
    interaction();
  };

  const handleSelectImages = (e) => {
    if (!e.target.files) {
      return;
    }

    const selectedImage = e.target.files[0];
    setImage(selectedImage);
    const preview = URL.createObjectURL(selectedImage);
    setImagePreview(preview);
  };

  const submitLogoHandler = (e) => {
    e.preventDefault(e);
    const formData = new FormData();
    formData.append('guild_logo', image);
    postGuildLogo(id, formData);
  };

  const submitDescriptionHandler = (e) => {
    e.preventDefault(e);
    const data = getFormData(e);
    editGuildDescription(id, data);
  };

  const submitRanksHandler = (e) => {
    e.preventDefault(e);

    const addRanks = [
      { name: editLeader || getRanks[0].name, level: 3, id: getRanks[0].id },
      { name: editVice || getRanks[1].name, level: 2, id: getRanks[1].id },
      { name: editMember || getRanks[2].name, level: 1, id: getRanks[2].id },
    ];

    editGuildRanks(id, addRanks);
  };

  const getPlayer = getPlayerInAccount.map((player) => player.id);
  const verifyRanks = member.map((member) => member.player_id);

  const settings = getPlayer.filter((arr1Item) =>
    verifyRanks.includes(arr1Item)
  );

  const deleteClick = (e) => setGuildToRemove(currentGuild);
  const cancelDelete = (e) => setGuildToRemove(null);
  const confirmDelete = async (e) => {
    if (guildToRemove) {
      await guildRemove(guildToRemove);
      history.push('/guilds');
    }
  };

  return (
    <Container>
      <div className="panel panel-default mx-auto">
        <div className="panel-heading">Overview</div>
        <div className="panel-body">
          <div className="parent">
            <div className="guild-logo ml-4">
              <div className="d-inline-flex flex-column justify-content-center mr-3">
                <span className="fw-300 fs-xs d-block opacity-50">
                  {currentGuild.logo_gfx_name === undefined ? null : (
                    <img
                      className="profile-image-lg"
                      src={`${
                        currentGuild.logo_gfx_name === '' ||
                        currentGuild.logo_gfx_name === null
                          ? GuildLogoDefault
                          : currentGuild.logo_gfx_name &&
                            getImageUrl(currentGuild.logo_gfx_name)
                      }`}
                      alt="GuildLogo"
                    />
                  )}
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
              {settings.length > 0 ? (
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#settings">
                    <i className="fal fa-cog text-danger mr-1" />
                    Settings
                  </a>
                </li>
              ) : null}
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
                                  ? `d-inline-block align-middle status status-danger pr-3`
                                  : `d-inline-block align-middle status status-success pr-3`
                              }`}
                            >
                              <div className="info-card-text flex-1">
                                <h2 className="fs-xl text-truncate text-truncate-lg text-primary">
                                  <Link
                                    to={`/character/${members.player.name}`}
                                  >
                                    {members.player.name}{' '}
                                    <span className="fw-300">
                                      <i>(Rei do Gesior)</i>
                                    </span>
                                  </Link>
                                </h2>
                              </div>
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
                            <ChangeLogo
                              submitLogoHandler={submitLogoHandler}
                              handleSelectImages={handleSelectImages}
                              imagePreview={imagePreview}
                              GuildLogoDefault={GuildLogoDefault}
                            />
                          </div>
                          <div
                            className="tab-pane fade"
                            id="v-pills-changeguild-description"
                            role="tabpanel"
                            aria-labelledby="v-pills-changeguild-description-tab"
                          >
                            <GuildDescription
                              submitDescriptionHandler={
                                submitDescriptionHandler
                              }
                              guild={guild}
                            />
                          </div>
                          <div
                            className="tab-pane fade"
                            id="v-pills-renameguildrank"
                            role="tabpanel"
                            aria-labelledby="v-pills-renameguildrank-tab"
                          >
                            <GuildRank
                              submitRanksHandler={submitRanksHandler}
                              getRanks={getRanks}
                              setEditLeader={setEditLeader}
                              setEditVice={setEditVice}
                              editMember={editMember}
                              setEditMember={setEditMember}
                            />
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
                              onClick={deleteClick}
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
      {guildToRemove ? (
        <div className="alert alert-danger rounded shadow-bold col-xl-6 ml-auto mr-auto pl-3 pr-3">
          <h4 className="alert-heading">Delete Confirmation!</h4>
          <p>Are you sure you want to delete, this action cannot be undone.</p>
          <hr />
          <div className="d-flex justify-content-between">
            <button className="btn btn-outline-dark" onClick={cancelDelete}>
              Cancel
            </button>
            <button className="btn btn-outline-danger" onClick={confirmDelete}>
              Delete
            </button>
          </div>
        </div>
      ) : null}

      <div className="col-sm-5 mx-auto">
        <form onSubmit={acceptHandler}>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Player</th>
                <th>Vocation &amp; Level</th>
                <th>Action</th>
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
                          {settings.length > 0 ? (
                            <FaRegTrashAlt size={14} />
                          ) : null}
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
  );
};

const mapStateToProps = (state) => {
  return {
    account: state.account.account,
    players: state.player.player,
    guild: state.guild.guild,
    guildToRemove: state.guild.guildToRemove,
  };
};

export default connect(mapStateToProps, {
  guildShow,
  guildMember,
  guildInvite,
  guildGetInvites,
  guildHasInvite,
  guildAccept,
  postGuildLogo,
  editGuildRanks,
  setGuildToRemove,
  guildRemove,
  playerList,
})(GuildList);
