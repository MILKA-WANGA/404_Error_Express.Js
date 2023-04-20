
//Import http 
//const http =require('http');
const bodyParser = require('body-parser');
const express=require('express');
const app=express();
const adminRouter=require('./routers/admin')
const shopRouter=require('./routers/shop')
const body_parser=require('body-parser');
app.use(body_parser.urlencoded ({extended:false}));
app.use(adminRouter);
app.use(shopRouter);




//const server1= http.createServer(app); 
//set the port the server to listen at
app.listen(2000);


