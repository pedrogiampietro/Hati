import { apiGetInventory, apiPost } from '../helpers/Api';

export const INVENTORY_LIST = 'INVENTORY_LIST';
export const INVENTORY_SEND_ITEM = 'INVENTORY_SEND_ITEM';

export const getInventory = (data) => {
  const payload = apiGetInventory('/inventory', data);
  return { type: INVENTORY_LIST, payload };
};

export const sendItemToCharacter = (data) => {
  const payload = apiPost('/inventory/sendItem', data);
  return { type: INVENTORY_SEND_ITEM, payload };
};
