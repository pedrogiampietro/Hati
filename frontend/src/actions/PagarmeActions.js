import { apiPost} from '../helpers/Api';

export const PAGARME_PURCHASING = 'PAGARME_PURCHASING';

export const makePagarmePurchasing = (data) => {
  const payload = apiPost('/pagarme/creditcard', data);
  return { type: PAGARME_PURCHASING, payload };
};
