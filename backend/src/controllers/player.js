const express = require('express')
const { Player } = require('../models')

const router = express.Router()

router.get('/', async (req, res) => {

    const account_id = 293
    const players = await Player.findAll({ where: {account_id: account_id} })


    return res.jsonOK(players)

})

router.get('/:id', async (req, res) => {

    const account_id = 293
    const { id } = req.params
    const player = await Player.findOne({ where: { id: id, account_id: account_id}})
    if (!player) return res.jsonNotFound(null)

    return res.jsonOK(player)
})

router.post('/', async (req, res) => {

    const account_id = 293
    const { name, level, vocation } = req.body

    const looktype = 'https://www.tibiawiki.com.br/images/e/e4/Outfit_Citizen_Male.gif'


    const player = await Player.create({ 
        name, 
        account_id,
        level,
        vocation,
        looktype
    })

    return res.jsonOK(player)

})

router.put('/:id', async (req, res) => {

    const account_id = 293
    const { id } = req.params
    const { body } = req

    const fields = ['name'] //['name', 'comments', 'outfits', 'items']

    const player = await Player.findOne({ where: { id: id, account_id: account_id}})
        if (!player) return res.jsonNotFound(null)

    fields.map((fieldName) => {
        const newValue = body[fieldName]
            if (newValue) player[fieldName] = newValue
    })    

    await player.save()
        return res.jsonOK(player)

})


module.exports = router