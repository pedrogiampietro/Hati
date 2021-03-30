import { apiPost } from '../helpers/Api';

export const GENERATE_QRC = 'GENERATE_QRC';

export const getGenerateQrc = (data) => {
  const payload = apiPost('/pix', data);
  return { type: GENERATE_QRC, payload };
};
