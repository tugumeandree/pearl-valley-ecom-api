const express = require('express');
const ProductsRoute = require('./Routes/ProductsRoute');
const app = express();

require('dotenv').config();
const port = process.env.PORT || 3002;

app.use('/api',ProductsRoute);

app.get('/',(req,res)=>{
  res.send('Home');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})