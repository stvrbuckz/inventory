const express = require('express');
const router = express.Router();

const staffMember = require('../staff/staff.model')

router.post('/login', async (req, res, next) => {
    const { staff_email, password} = req.body;

    try {
        await schema
    } catch (error) {
        
    }
});

router.get('/', (req, res) => {
    res.json ('hello')
});

module.exports = router;