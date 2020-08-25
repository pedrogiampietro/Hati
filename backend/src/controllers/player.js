const express = require('express')
const { player } = require('../models')

const router = express.Router()

router.get('/characters', async (req, res) => {

    const { account_id } = req
    const players = await player.findAll({ where: { account_id: account_id } })

    return res.jsonOK(players)

})

router.get('/highscores', async (req, res) => {

    const { vocation } = req.query
    let filterVocation = Number(vocation)
    let players

    if (vocation === 'all') {
        players = await player.findAll({
            order: [
                ['level', 'DESC'],
                ['name', 'ASC']
            ]
        })
    } else {

        players = await player.findAll(
            {
                where: {
                    vocation: filterVocation,
                },
    
                order: [
                    ['level', 'DESC'],
                    ['name', 'ASC']
                ]
            }
        )

    }
    
    return res.jsonOK(players)
})

router.get('/:id', async (req, res) => {

    const { account_id } = req
    const { id } = req.params
    const players = await player.findOne({ where: { id: id, account_id: account_id }})
    if (!players) return res.jsonNotFound(null)

    return res.jsonOK(players)
})

router.post('/', async (req, res) => {

    const { account_id, body } = req
    const { name, level, vocation } = body

    const looktype = 'https://www.tibiawiki.com.br/images/e/e4/Outfit_Citizen_Male.gif'


    const players = await player.create({ 
        name, 
        account_id,
        level,
        vocation,
        looktype
    })

    return res.jsonOK(players)

})

router.put('/:id', async (req, res) => {

    const { account_id, body } = req
    const { id } = req.params

    const fields = ['name'] //['name', 'comments', 'outfits', 'items']

    const players = await player.findOne({ where: { id: id, account_id: account_id}})
        if (!players) return res.jsonNotFound(null)

    fields.map((fieldName) => {
        const newValue = body[fieldName]
            if (newValue) players[fieldName] = newValue
    })    

    await players.save()
        return res.jsonOK(players)

})

router.delete('/:id', async (req, res) => {

    const { account_id } = req
    const { id } = req.params
    const players = await player.findOne({ where: { id: id, account_id: account_id }})
        if (!players) return res.jsonNotFound(null)

    await players.destroy()
        return res.jsonOK()
})

module.exports = router