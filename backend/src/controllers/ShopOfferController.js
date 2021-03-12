const express = require('express');
const { shop_offers, shop_inventories, accounts } = require('../models');

const { getMessage } = require('../helpers/messages');
const { checkJwt } = require('../middlewares/jwt');
const { uploadShoppingImage } = require('../middlewares/multer');

const router = express.Router();

router.post(
  '/',
  checkJwt,
  uploadShoppingImage.single('shop_image'),
  async (req, res) => {
    const {
      shop_title,
      shop_description,
      shop_type,
      shop_amount,
      itemid,
      coins,
    } = req.body;

    const finalFileName = req.file;

    const addProduct = await shop_offers.create({
      shop_title,
      shop_description,
      shop_image: `uploads/shop/${finalFileName.filename}`,
      shop_type,
      shop_amount,
      itemid,
      coins,
    });

    return res.jsonOK(addProduct);
  }
);

router.get('/', async (req, res) => {
  const getOffers = await shop_offers.findAndCountAll({});

  return res.jsonOK(getOffers);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const getOffer = await shop_offers.findOne({
      where: { id: id },
    });

    if (!getOffer) {
      return res.jsonBadRequest(
        null,
        'this id does not exist, check and try again.'
      );
    } else {
      res.jsonOK(getOffer);
    }
  } catch (error) {
    return res.jsonBadRequest(null, error);
  }
});

router.put('/', checkJwt, async (req, res) => {
  const { body } = req;
  const { id } = req.params;
  const fields = [
    'coins',
    'itemid',
    'shop_amount',
    'shop_type',
    'shop_title',
    'shop_description',
    'shop_image',
  ];

  const getOffer = await shop_offers.findOne({
    where: { id: id },
  });
  if (!getOffer) return res.jsonNotFound(null);

  fields.map((fieldName) => {
    const newValue = body[fieldName];
    if (newValue) getOffer[fieldName] = newValue;
  });

  await getOffer.save();
  return res.jsonOK(getOffer, getMessage('Offer edited sucessfuly!'));
});

router.delete('/:id', checkJwt, async (req, res) => {
  const { id } = req.params;
  try {
    const deleteOffer = await shop_offers.findByPk(id);

    if (!deleteOffer) {
      return res.jsonBadRequest(null, 'not possible delete offer, try again.');
    } else {
      await deleteOffer.destroy();

      res.jsonOK(deleteOffer);
    }
  } catch (error) {
    return res.jsonBadRequest(null, error);
  }
});

router.put('/buynow', checkJwt, async (req, res) => {
  const { body, account_id } = req;
  const { closedCart, totalCoins } = body;

  const getAccount = await accounts.findByPk(account_id);

  if (!getAccount) {
    return res.jsonBadRequest(null, getMessage('response.json_invalid_token'));
  }

  try {
    if (getAccount.coins >= totalCoins) {
      await getAccount.update({
        coins: getAccount.coins - totalCoins,
      }),
        await Promise.all(
          closedCart.map(
            ({
              itemid,
              shop_amount,
              shop_title,
              item_description,
              shop_image,
            }) =>
              shop_inventories.create({
                account_id,
                itemid,
                item_amount: shop_amount,
                item_title: shop_title,
                item_description: item_description,
                item_image: shop_image,
              })
          )
        );

      return res.jsonOK(closedCart, getMessage('shop.buy_success'));
    } else {
      return res.jsonBadRequest(null, getMessage('shop.buy_nocoins'));
    }
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
