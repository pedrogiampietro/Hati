import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import {
  forumDiscussion,
  addComments,
  getComments,
  editPost,
} from '../../../actions/ForumActions';
import { getImageUrl } from '../../../helpers/Api';

import { formatDate } from '../../../helpers/DateTime';
import { getFormData } from '../../../helpers/FormData';
import Container from '../../Layouts/Container';
import LikeDeslikes from '../../../components/LikeDeslikes';
import { BsReply } from 'react-icons/bs';

import noneAvatar from '../../../assets/img/none_avatar.png';

import JoditEditor from 'jodit-react';

const Discussions = ({
  forumDiscussion,
  editPost,
  getComments,
  addComments,
}) => {
  const { account } = useSelector((state) => state.account);

  const [discussionPost, setDiscussionPost] = React.useState([]);
  const [comments, setComments] = React.useState([]);
  const [postInteraction, setPostInteraction] = React.useState(false);
  const [editingPost, setEditingPost] = React.useState([]);
  const { board_id, discussion } = useParams();

  function interaction() {
    setPostInteraction(!postInteraction);
  }

  React.useEffect(() => {
    getComments(board_id, discussion).then(({ payload }) => {
      const newData = payload.data.data;
      setComments(newData);
    });
    editPost(discussion).then(({ payload }) => {
      const newData = payload.data.data;
      setEditingPost(newData);
    });
    forumDiscussion(board_id, discussion)
      .then(({ payload }) => {
        const newData = payload.data.data;
        setDiscussionPost(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [
    forumDiscussion,
    editPost,
    getComments,
    postInteraction,
    board_id,
    discussion,
  ]);

  const submitHandler = (event) => {
    event.preventDefault();
    const data = getFormData(event);
    addComments(board_id, discussion, data).then(() => {
      interaction();
    });
  };

  return (
    <Container>
      <div className="row">
        <div className="col-xl-12">
          <div className="input-group input-group-lg mb-g">
            <input
              type="text"
              className="form-control shadow-inset-2"
              placeholder="Search Discussion"
            />
            <div className="input-group-append">
              <span className="input-group-text">
                <i className="fal fa-search" />
              </span>
            </div>
          </div>

          <div className="panel panel-default hidden-xs hidden-sm">
            <div className="panel-heading">
              {formatDate(discussionPost.createdAt)}
            </div>
            <div className="panel-toolbar pr-3 align-self-end">
              <ul className="nav nav-tabs border-bottom-0 nav-tabs-clean">
                {editingPost?.length <= 0 ? null : (
                  <li className="nav-item">
                    <Link to={`/forum/post/edit/${discussionPost.id}`}>
                      <button className="nav-link active" role="tab">
                        Edit Post
                      </button>
                    </Link>
                  </li>
                )}
              </ul>
            </div>

            <div className="panel-body forum-content-body">
              <div className="row">
                <div className="col-md-2" align="center">
                  <Link
                    className="forum-profilename forum-profilename-color7 notranslate"
                    to={`/character/${discussionPost.character_name}`}
                  >
                    <span className="subheader-title text-truncate text-truncate-lg text-primary">
                      {discussionPost.character_name}
                    </span>
                  </Link>
                  <br />
                  {account?.avatar ? (
                    <img
                      src={getImageUrl(discussionPost.account.avatar)}
                      className="profile-image rounded-circle"
                      alt=""
                    />
                  ) : (
                    <img
                      src={noneAvatar}
                      className="profile-image rounded-circle"
                      alt=""
                    />
                  )}
                  <br />
                  Country: BR
                  <br />
                  Member since: 10/12/2019
                  <br />
                  Discord: Pedro#6666
                  <br />
                </div>
                <div
                  className="col-md-10"
                  dangerouslySetInnerHTML={{ __html: discussionPost.body_text }}
                />
              </div>

              <br />
              <div className="row">
                <div className="col-md-2">Administrador// IMG LATER</div>
                <div className="col-md-4"></div>
                <div className="col-md-6" align="right">
                  <LikeDeslikes
                    id={discussionPost.id}
                    likes_count={discussionPost.likes_count}
                    interaction={interaction}
                  />
                </div>
              </div>
            </div>
          </div>

          {comments.map((comment) => {
            return (
              <div
                key={comment.id}
                className="panel panel-default hidden-xs hidden-sm"
              >
                <div className="panel-heading">
                  {formatDate(comment.createdAt)}
                </div>
                {/* <div className="panel-toolbar pr-3 align-self-end">
										<ul className="nav nav-tabs border-bottom-0 nav-tabs-clean">
											{editingPost?.length <= 0 ? null : (
												<li className="nav-item">
													<Link to={`/forum/post/edit/${comment.id}`}>
														<button className="nav-link active" role="tab">
															Edit Post
														</button>
													</Link>
												</li>
											)}
										</ul>
									</div> */}

                <div className="panel-body forum-content-body">
                  <div className="row">
                    <div className="col-md-2" align="center">
                      <Link
                        className="forum-profilename forum-profilename-color7 notranslate"
                        to={`/character/${comment.character_name}`}
                      >
                        <span className="subheader-title text-truncate text-truncate-lg text-primary">
                          {comment.character_name}
                        </span>
                      </Link>
                      <br />
                      {comment?.account?.avatar ? (
                        <img
                          src={getImageUrl(comment.account.avatar)}
                          className="profile-image rounded-circle"
                          alt=""
                        />
                      ) : (
                        <img
                          src={noneAvatar}
                          className="profile-image rounded-circle"
                          alt=""
                        />
                      )}
                      <br />
                      Country: BR
                      <br />
                      Member since: 10/12/2019
                      <br />
                      Discord: Pedro#6666
                      <br />
                    </div>
                    <div
                      className="col-md-10"
                      dangerouslySetInnerHTML={{
                        __html: comment.post_content,
                      }}
                    />
                  </div>

                  <br />
                  <div className="row">
                    <div className="col-md-2">Administrador// IMG LATER</div>
                    <div className="col-md-4"></div>
                    <div className="col-md-6" align="right">
                      {/* <LikeDeslikes
              id={discussionPost.id}
              likes_count={discussionPost.likes_count}
              interaction={interaction}
            /> */}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <ul className="pagination mt-3">
            <li className="page-item disabled">
              <Link className="page-link" to="#" aria-label="Previous">
                <span aria-hidden="true">
                  <i className="fal fa-chevron-left" />
                </span>
              </Link>
            </li>
            <li className="page-item active" aria-current="page">
              <span className="page-link">
                1<span className="sr-only">(current)</span>
              </span>
            </li>
            <li className="page-item">
              <Link className="page-link" to="#">
                2
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="#">
                3
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="#" aria-label="Next">
                <span aria-hidden="true">
                  <i className="fal fa-chevron-right" />
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="panel panel-default">
        <div className="panel-heading">Quick Reply Box</div>
        <div className="panel-body">
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <label htmlFor="inputContent">Content</label>
              <JoditEditor name="post_content" id="reply" tabIndex={1} />
              <input
                type="text"
                name="character_name"
                defaultValue={account?.profileName}
                hidden
              />
            </div>

            <button type="submit" className="btn btn-primary">
              <BsReply size={24} /> Reply
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    account: state.account.account,
    forum: state.forum.forum,
  };
};

export default connect(mapStateToProps, {
  addComments,
  forumDiscussion,
  getComments,
  editPost,
})(Discussions);
