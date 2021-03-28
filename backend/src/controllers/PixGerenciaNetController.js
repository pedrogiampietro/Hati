const express = require('express');
const GNRequest = require('../config/gerencianet');

const router = express.Router();

const reqGNAlready = GNRequest({
  clientID: process.env.GN_CLIENT_ID,
  clientSecret: process.env.GN_CLIENT_SECRET,
});

router.get('/', async (req, res) => {
  const reqGN = await reqGNAlready;

  const dataCob = {
    calendario: {
      expiracao: 3600,
    },
    valor: {
      original: '100.00',
    },
    chave: 'd9a627fe-6cf3-4f9c-bb72-94b8b035b9ba',
    solicitacaoPagador: 'Cobrança dos serviços prestados.',
  };

  const cobResponse = await reqGN.post('/v2/cob', dataCob);
  res.send(cobResponse.data);

  const qrcodeResponse = await reqGN.get(
    `/v2/loc/${cobResponse.data.loc.id}/qrcode`
  );
  res.send(qrcodeResponse.data);
});

router.get('/cobrancas', async (req, res) => {
  const reqGN = await reqGNAlready;

  const cobResponse = await reqGN.get(
    '/v2/cob?inicio=2021-02-15T16:01:35Z&fim=2021-03-26T23:59:00Z'
  );

  res.send(cobResponse.data);
});

router.post('/webhook(/pix)?', (req, res) => {
  console.log(req.body);
  res.send('200');
});

module.exports = router;
