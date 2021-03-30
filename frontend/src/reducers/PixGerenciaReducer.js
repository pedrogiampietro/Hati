import { GENERATE_QRC } from '../actions/PixGerenciaActions';

const initialState = {
  pix: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GENERATE_QRC: {
      const response = payload ? payload.data : null;
      const pix = response ? response.data : null;

      return { ...state, pix };
    }

    default:
      return state;
  }
}
