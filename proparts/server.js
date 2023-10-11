import express from'express';
import cookieParser from 'cookie-parser';
import customer from './routes/customer.js';
import admin    from './routes/admin.js';
import seller   from './routes/seller.js';
import connectionn from './models/connection.js';


const app = express();
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('public'));
app.set('view engine','ejs');
app.set('views','views');

app.use('/', customer);
app.use('/admin', admin);
app.use('/seller', seller);

app.listen(3000,()=>{
  console.log('server is running  : http://localhost:3000');
});

