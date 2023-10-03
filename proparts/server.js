const express = require('express');
const app = express();

app.set('view engine','ejs');
const customer = require("./routes/customer");
const admin = require("./routes/admin");
const seller = require("./routes/seller");

app.use('/admin', admin);
app.use('/customer', customer);
app.use('/seller', seller);

app.listen(8080,()=>{

  console.log('server running  : http://localhost:8080');
});

