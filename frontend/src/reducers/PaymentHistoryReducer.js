import { GET_ORDERS } from '../actions/PaymentHistoryActions';

const initialState = {
  orders: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ORDERS: {
      const response = payload ? payload.data : null;
      const orders = response ? response.data : null;

      return { ...state, orders };
    }

    default:
      return state;
  }
}
