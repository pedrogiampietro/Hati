import { apiGet } from '../helpers/Api';

export const GET_ORDERS = 'GET_ORDERS';

export const getOrderList = (data) => {
  const payload = apiGet('/paymentHistory/getHistory', data);
  return { type: GET_ORDERS, payload };
};
