const express = require('express')
const { Player } = require('../models')

const router = express.Router()

router.get('/', (req, res) => {

    return res.jsonOK('Players')

})

router.post('/', async (req, res) => {

    const account_id = 293
    const { name, level, vocation } = req.body


    const player = await Player.create({ 
        name, 
        account_id,
        level,
        vocation,
    })

    return res.jsonOK(player)

})


module.exports = router