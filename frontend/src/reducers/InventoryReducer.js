import {
  INVENTORY_LIST,
  INVENTORY_SEND_ITEM,
} from '../actions/InventoryActions';

const initialState = {
  inventory: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case INVENTORY_LIST:
    case INVENTORY_SEND_ITEM: {
      const response = payload ? payload.data : null;
      const inventory = response ? response.data : null;

      return { ...state, inventory };
    }

    default:
      return state;
  }
}
