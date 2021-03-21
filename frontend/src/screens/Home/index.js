import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { forumBoard } from '../../actions/ForumActions';
import { formatDate } from '../../helpers/DateTime';
import { groupsId } from '../../config';
import Container from '../Layouts/Container';
import LikeDeslikes from '../../components/LikeDeslikes';
import { getImageUrl } from '../../helpers/Api';

import noneAvatar from '../../assets/img/none_avatar.png';

import { FaNewspaper } from 'react-icons/fa';
import { BiTimeFive } from 'react-icons/bi';

const Home = ({ forumBoard }) => {
  const [newsPost, setNewsPost] = useState([]);
  const [postInteraction, setPostInteraction] = useState(false);

  function interaction() {
    setPostInteraction(!postInteraction);
  }

  //id 1, will always be the ID that will automatically be the news, if you want to change the ids, just change it here manually.

  useEffect(() => {
    forumBoard(1)
      .then(({ payload }) => {
        const newData = payload.data.data;

        setNewsPost(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [forumBoard, postInteraction]);

  return (
    <Container>
      {newsPost.map((news) => {
        return (
          <div key={news.id} className="card mb-g">
            <div className="card-body pb-0 px-4">
              <div className="d-flex flex-row pb-3 pt-2  border-top-0 border-left-0 border-right-0">
                <div className="d-inline-block align-middle status status-success mr-3">
                  {news?.account.avatar ? (
                    <img
                      src={getImageUrl(news?.account.avatar)}
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
                </div>
                <h5 className="mb-0 flex-1 text-dark fw-500">
                  {news.character_name}
                  <small className="m-0 l-h-n">
                    {groupsId[news?.account.players[0].group_id]}
                  </small>
                </h5>

                <span className="js-get-date">
                  <BiTimeFive size={20} className="mr-1" />
                  {formatDate(news.createdAt)}
                </span>
              </div>
              <hr className="m-0 w-100" />
              <br />
              <h1 className="subheader-title">
                <FaNewspaper size={20} className="mr-2" />
                {news.title}
              </h1>
              <div
                className="pb-3 pt-2 border-top-0 border-left-0 border-right-0 text-muted"
                dangerouslySetInnerHTML={{ __html: news.body_text }}
              />
              <LikeDeslikes
                id={news.id}
                likes_count={news.likes_count}
                interaction={interaction}
              />
            </div>
            <div className="card-body py-0 px-4 border-faded border-right-0 border-bottom-0 border-left-0">
              <div className="d-flex flex-column align-items-center">
                <hr className="m-0 w-100" />
              </div>
            </div>
          </div>
        );
      })}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    forum: state.forum.forum,
  };
};

export default connect(mapStateToProps, { forumBoard })(Home);
