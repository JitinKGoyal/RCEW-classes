const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send("this is auth endpoint")
});


router.get('/name', (req, res) => {
    res.send("this is auth name")
});


module.exports = router;