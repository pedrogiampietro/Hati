const express = require('express')
const { shop_offers } = require('../models')

const { getMessage } = require('../helpers/messages')
const { checkJwt } = require('../middlewares/jwt')

const router = express.Router()

router.post('/', async (req, res) => {
  const {
    shop_title,
    shop_description,
    shop_image,
    shop_type,
    shop_amount,
    itemid,
    coins,
  } = req.body

  const addProduct = await shop_offers.create({
    shop_title,
    shop_description,
    shop_image,
    shop_type,
    shop_amount,
    itemid,
    coins,
  })

  return res.jsonOK(addProduct)
})

router.get('/', async (req, res) => {
  const getOffers = await shop_offers.findAndCountAll({})

  return res.jsonOK(getOffers)
})

router.get('/:id', async (req, res) => {
  const { id } = req.params

  try {
    const getOffer = await shop_offers.findOne({
      where: { id: id },
    })

    if (!getOffer) {
      return res.jsonBadRequest(
        null,
        'this id does not exist, check and try again.'
      )
    } else {
      res.jsonOK(getOffer)
    }
  } catch (error) {
    return res.jsonBadRequest(null, error)
  }
})

router.put('/', checkJwt, async (req, res) => {
  const { body } = req
  const { id } = req.params
  const fields = [
    'coins',
    'itemid',
    'shop_amount',
    'shop_type',
    'shop_title',
    'shop_description',
    'shop_image',
  ]

  const getOffer = await shop_offers.findOne({
    where: { id: id },
  })
  if (!getOffer) return res.jsonNotFound(null)

  fields.map((fieldName) => {
    const newValue = body[fieldName]
    if (newValue) getOffer[fieldName] = newValue
  })

  await getOffer.save()
  return res.jsonOK(getOffer, getMessage('Offer edited sucessfuly!'))
})

router.delete('/:id', checkJwt, async (req, res) => {
  const { id } = req.params
  try {
    const deleteOffer = await shop_offers.findByPk(id)

    if (!deleteOffer) {
      return res.jsonBadRequest(null, 'not possible delete board, try again.')
    } else {
      await deleteOffer.destroy()

      res.jsonOK(deleteOffer)
    }
  } catch (error) {
    return res.jsonBadRequest(null, error)
  }
})

module.exports = router
