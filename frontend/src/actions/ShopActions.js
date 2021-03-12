import { apiGet, apiPost, apiPut } from '../helpers/Api';

export const SHOP_LIST = 'SHOP_LIST';
export const SHOP_ADD = 'SHOP_ADD';
export const SHOP_TOGGLE_CART_PRODUCT = 'SHOP_TOGGLE_CART_PRODUCT';
export const SHOP_BUYNOW_CART = 'SHOP_BUYNOW_CART';

export const getShopList = (data) => {
  const payload = apiGet('/shop', data);
  return { type: SHOP_LIST, payload };
};

export const addNewOffer = (data) => {
  const payload = apiPost('/shop', data);
  return { type: SHOP_LIST, payload };
};

export const toggleCartProduct = (product) => {
  return { type: SHOP_TOGGLE_CART_PRODUCT, product };
};

export const buyNowCart = (data) => {
  const payload = apiPut('/shop/buynow', data);
  return { type: SHOP_BUYNOW_CART, payload };
};
