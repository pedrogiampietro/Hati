import { INVENTORY_LIST } from '../actions/InventoryActions';

const initialState = {
  inventory: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case INVENTORY_LIST: {
      const response = payload ? payload.data : null;
      const inventory = response ? response.data : null;

      return { ...state, inventory };
    }

    default:
      return state;
  }
}
