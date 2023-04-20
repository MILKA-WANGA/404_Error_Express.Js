const express=require('express');
const router=express.Router();
router.get('/addProduct',(req,res,next)=>
{
console.log('In another middleware');
res.send('<form action="/product" method="POST"><input type="text" name="username" ></input><button type="submit" name="button">submit</button></form>');
});
router.post('/product',(req,res,next)=>
{
    
console.log(req.body);
//res.send('<h1>Hello from express.js</h1>');
res.redirect('/');
});
router.use('/',(req,res,next)=>
{
res.status('404').send("Page not found");
//res.send('<h1>Hello from express.js</h1>');

});

module.exports=router;