import { apiGet } from '../helpers/Api';

export const INVENTORY_LIST = 'INVENTORY_LIST';

export const getInventory = (data) => {
  const payload = apiGet('/inventory', data);
  return { type: INVENTORY_LIST, payload };
};
