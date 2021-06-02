const supertest = require('supertest');
const app = require('./app');

describe('App', () => {
    it('should  respond with a message', async () => {
        const response = await supertest(app)
            .get('/')
            .expect(200);

        expect(response.body.message).toEqual('Inventory App');
    });
});

