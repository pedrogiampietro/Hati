import { apiGet } from '../helpers/Api'

export const SHOP_LIST = 'SHOP_LIST'

export const getShopList = (data) => {
  const payload = apiGet('/shop', data)
  return { type: SHOP_LIST, payload }
}
