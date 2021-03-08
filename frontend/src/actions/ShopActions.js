import { apiGet } from '../helpers/Api';

export const SHOP_LIST = 'SHOP_LIST';
export const SHOP_TOGGLE_CART_PRODUCT = 'SHOP_TOGGLE_CART_PRODUCT';

export const getShopList = (data) => {
  const payload = apiGet('/shop', data);
  return { type: SHOP_LIST, payload };
};

export const toggleCartProduct = (product) => {
  return { type: SHOP_TOGGLE_CART_PRODUCT, product };
};
