import React from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getFormData } from '../../../../helpers/FormData';
import { forumNewThread } from '../../../../actions/ForumActions';
import { playerList } from '../../../../actions/PlayerActions';
import { hideNewThread } from '../../../../assets/js/scripts';

import JoditEditor from '../../../../components/Jodit';

const CreateThread = ({ forumNewThread, playerList, interaction }) => {
  const [newThread, setNewThread] = React.useState([]);
  const { board_id } = useParams();
  const history = useHistory();

  React.useEffect(() => {
    playerList().then(({ payload }) => {
      const newData = payload.data.data;
      setNewThread(newData);
    });
  }, [playerList]);

  const subbmitHandle = async (event) => {
    event.preventDefault();

    const data = getFormData(event);
    await forumNewThread(board_id, data)
      .then(() => {
        hideNewThread();
        interaction();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  if (
    newThread[0]?.account.profileName === '' ||
    newThread[0]?.account.profileName === null
  ) {
    history.push('/account/profile_name');
  }

  return (
    <form onSubmit={subbmitHandle}>
      <div
        id="panel-compose"
        className="panel w-100 position-fixed pos-bottom pos-right mb-0 z-index-cloud mr-lg-4 shadow-3 border-bottom-left-radius-0 border-bottom-right-radius-0 expand-full-height-on-mobile expand-full-width-on-mobile shadow "
        style={{ maxWidth: '40rem', height: '35rem', display: 'none' }}
      >
        <div className="position-relative h-100 w-100 d-flex flex-column">
          {/* desktop view */}
          <div className="panel-hdr bg-fusion-600 height-4 d-none d-sm-none d-lg-flex">
            <h4 className="flex-1 fs-lg color-white mb-0 pl-3">New Thread</h4>
            <div className="panel-toolbar pr-2">
              <span
                className="btn btn-icon btn-icon-light fs-xl waves-effect waves-themed"
                onClick={() => hideNewThread()}
              >
                <i className="fal fa-times" />
              </span>
            </div>
          </div>
          {/* end desktop view */}
          {/* mobile view */}
          <div className="d-flex d-lg-none align-items-center px-3 py-3 bg-faded  border-faded border-top-0 border-left-0 border-right-0 flex-shrink-0">
            {/* button for mobile */}
            {/* end button for mobile */}
            <h3 className="subheader-title">New message</h3>
            <div className="ml-auto">
              <button
                type="button"
                className="btn btn-outline-danger waves-effect waves-themed"
                data-action="toggle"
                data-classname="d-flex"
                data-target="#panel-compose"
              >
                Cancel
              </button>
            </div>
          </div>
          {/* end mobile view */}
          <div className="panel-container show rounded-0 flex-1 d-flex flex-column">
            <div className="px-3 mt-3">
              <select
                className="custom-select form-control"
                name="character_name"
              >
                <option
                  key={newThread[0]?.account_id}
                  value={newThread[0]?.account.profileName}
                >
                  {newThread[0]?.account.profileName}
                </option>
              </select>

              <input
                type="text"
                name="title"
                placeholder="Title"
                className="form-control form-control-lg rounded-pill mt-2 mb-2"
              />
            </div>
            <div className="flex-1" style={{ overflowY: 'auto' }}>
              {/* <textarea
								className="form-control"
								name="body_text"
								rows="13"
								required
							></textarea> */}
              <JoditEditor name="body_text" tabIndex={1} />
            </div>

            <div className="px-1 py-1 d-flex flex-row align-items-center flex-wrap flex-shrink-0">
              <button
                type="submit"
                className="btn btn-info mr-3 waves-effect waves-themed"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
const mapStateToProps = (state) => {
  return {
    account: state.account.account,
    player: state.player.player,
    forum: state.forum.forum,
  };
};

export default connect(mapStateToProps, { forumNewThread, playerList })(
  CreateThread
);
