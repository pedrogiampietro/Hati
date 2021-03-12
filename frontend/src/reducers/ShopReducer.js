import {
  SHOP_LIST,
  SHOP_ADD,
  SHOP_TOGGLE_CART_PRODUCT,
  SHOP_BUYNOW_CART,
} from '../actions/ShopActions';

const initialState = {
  shop: null,
  shops: [],
  cart: [],
};

export default function (state = initialState, action) {
  const { type, payload, product } = action;

  switch (type) {
    case SHOP_LIST:
    case SHOP_ADD:
    case SHOP_BUYNOW_CART: {
      const response = payload ? payload.data : null;
      const shop = response ? response.data : null;

      return { ...state, shop };
    }

    case SHOP_TOGGLE_CART_PRODUCT: {
      const index = state.cart.findIndex((p) => p.id === product.id);

      if (index !== -1) {
        state.cart.splice(index, 1);
      } else {
        state.cart.push(product);
      }

      return { ...state };
    }

    default:
      return state;
  }
}
