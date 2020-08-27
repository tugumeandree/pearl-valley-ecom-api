const express = require ('express');
const data = require('../data');
const router = express.Router();

router.get('/products',(req,res)=>{
res.json(data.products);
});

module.exports = router;