const supertest = require('supertest')
const { getMessage } = require('../src/helpers/messages')
const app = require('../src/app')

let request
let server

beforeEach((done) => {
    server = app.listen(4000, () => {
        request = supertest.agent(server)
        done()
    })
  })

afterEach((done) => {
    server.close(done)
})

describe('Accounts', () => {

    it('login fail', () => {
        return request
            .post('/account/sign-in')
            .send({
                name: 'wrong-account',
                password: 'secret',
            })
            .then(response => {
                expect(response.statusCode).toEqual(400)
            })
    })

    it('login correct', () => {
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