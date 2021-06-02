const supertest = require('supertest');
const app = require('../../../app');

describe('GET /api/routes/products', () => {
    it('should  respond with an array of products', async () => {
        const response = await supertest(app)
            .get('/api/routes/products')
            .expect(200);

        // expect(response.body).toEqual([]);
        expect(response.body.length).toBeGreaterThan(0);
    });
});

