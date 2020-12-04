const supertest = require('supertest')
const db = require('../../src/models')
const app = require('../../src/app')

let request
let server


beforeEach((done) => {
    db.sequelize.sync().then(() => {
        server = app.listen(4000, () => {
            request = supertest.agent(server)
            done()
        })
    })
})

afterEach((done) => {
    server.close(done)
})

describe('Accounts - API', () => {

    it('sign up successful', () => {
        return request
            .post('/account/sign-up')
            .send({
                name: 'accountname',
                password: 'password',
                password_confirmation: 'password',
                email: 'test@haviaac.com',
            })
            .then(async response => {
                expect(response.statusCode).toEqual(200)
            })
    })

    it('sign up fail', () => {
        return request
            .post('/account/sign-up')
            .send({
                name: 'account name',
                password: 'password',
                password_confirmation: 'password',
            })
            .then(response => {
                expect(response.statusCode).toEqual(400)
            })
    })

    it('login fail', () => {
        return request
            .post('/account/sign-in')
            .send({
                name: 'account',
                password: 'password',
            })
            .then(response => {
                expect(response.statusCode).toEqual(400)
            })
    })

    it('login successful', () => {
        return request
            .post('/account/sign-in')
            .send({
                name: '123456789',
                password: '123456789',
            })
            .then(response => {
                expect(response.statusCode).toEqual(200)
            })
    })

})