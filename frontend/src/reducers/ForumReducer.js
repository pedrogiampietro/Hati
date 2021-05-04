import {
  NEWS_CREATE,
  FORUM_LIST,
  LIKE_UPDATE,
  SECTION_LIST,
  CREATE_THREAD,
  GET_DISCUSSION,
  CREATE_BOARD,
  BOARD_TO_REMOVE,
  BOARD_REMOVE,
  EDIT_POST,
  ADD_COMMENT,
  GET_COMMENT,
  THREAD_REMOVE,
  THREAD_TO_REMOVE,
  GET_ALL_THREADS,
} from '../actions/ForumActions';

const initialState = {
  forum: null,
  forums: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case NEWS_CREATE:
    case CREATE_THREAD:
    case GET_DISCUSSION:
    case FORUM_LIST:
    case CREATE_BOARD:
    case SECTION_LIST:
    case EDIT_POST:
    case ADD_COMMENT:
    case GET_COMMENT:
    case LIKE_UPDATE:
    case GET_ALL_THREADS: {
      const response = payload ? payload.data : null;
      const forum = response ? response.data : null;
      return { ...state, forum };
    }

    case THREAD_TO_REMOVE:
    case BOARD_TO_REMOVE: {
      return { ...state, forumToRemove: payload };
    }

    case THREAD_REMOVE:
    case BOARD_REMOVE: {
      const forums = state.forums.filter((forum) => forum.id !== state.forumToRemove.id);
      return { ...state, forumToRemove: null, forums };
    }

    default:
      return state;
  }
}
