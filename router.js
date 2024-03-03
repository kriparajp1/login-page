var express=require('express');
var router=express.Router();

const credential={

    email:'kriparaj331@gmail.com',
    password:'1234'
}



router.post('/login',(req,res)=>{

    if(req.body.email===credential.email && req.body.password===credential.password){

req.session.user=req.body.email;
res.redirect('/route/dashboard');


    }else{

        res.end('invalid Username')
    }
});




router.get('/dashboard',(req,res)=>{

    if(req.session.user){

        res.render('dashboard',{user:req.session.user})
    }else{

        res.send('unauthorize user')
    }
})



router.get('/logout',(req,res)=>{

    req.session.destroy();
    res.redirect('/');
})

module.exports=router;