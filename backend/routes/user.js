const express =require("express");
const user = require("../model/usermodel")
const jwt = require ("jsonwebtoken")
const router = express.Router();

router.post("/new", (req,res)=>{
    let newobj= new user({
        username : req.body.username,
        password : req.body.password,
    })

    newobj.save((error)=>{
        if(error){
            res.status(500).send(error);
        }

        else{
            res.json(newobj);
        }
    });
})

router.post("/login",(req,res)=>{

    user.findOne({username : req.body.username, password:req.body.password},(error,result)=>{
        if(error){
            res.status(500).json(error);
        }
        else if(!result){
            res.status(404).json({message : "User not found !"});
        }

        else{
            const payload = {
                id : result._id,
                username : result.username
                
            };

            const token = jwt.sign(payload,"secret",{ expiresIn : 30});
            res.json({token : token });
            console.log(token)
        }

    })

})

module.exports = (function(){
    return router;
})()