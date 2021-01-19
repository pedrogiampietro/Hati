import { SHOP_LIST } from '../actions/ShopActions'

const initialState = {
  shop: null,
  shops: [],
}

export default function (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case SHOP_LIST: {
      const response = payload ? payload.data : null
      const shop = response ? response.data : null
      return { ...state, shop }
    }

    default:
      return state
  }
}
