const express = require('express');
const staffMember = require('./staff.model');
const router = express.Router();

// calls the query to get staff table info
router.get('/', async (req, res) => {
    const staff = await staffMember.query()
        .select('staff_id', 'fname', 'lname', 'staff_email', 'role', 'created_at', 'updated_at')
        .where('deleted_at', null); // if user is deleted, they won't appear
    res.json(staff);
});


module.exports = router;