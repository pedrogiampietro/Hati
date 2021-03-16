import { PAGARME_PURCHASING } from '../actions/PagarmeActions';

const initialState = {
  pagarme: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case PAGARME_PURCHASING: {
      const response = payload ? payload.data : null;
      const pagarme = response ? response.data : null;

      return { ...state, pagarme };
    }

    default:
      return state;
  }
}
