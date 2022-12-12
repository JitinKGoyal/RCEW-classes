const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("notes endpoint")
})

module.exports = router;