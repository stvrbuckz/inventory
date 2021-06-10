const supertest = require('supertest');
const app = require('../../../app');

describe('GET /api/routes/products', () => {
    it('should respond with an array of products equal to 170', async () => {
        const response = await supertest(app)
            .get('/api/routes/products')
            .expect(200);

        expect(response.body.length).toEqual(170);
    });
});