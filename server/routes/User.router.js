const express = require("express");
const router = express.Router();
const login = require("../controllers/loginController");
const userModel=require("../models/usersModel")

router.post("/register", async (req,res)=>{
    const email=req.body.email
    const existingUser= await userModel.find({email:email})
    
    if(existingUser.length!==0){
        res.json({"failed":"User with same email already exists"})
    }
    else{
        userModel.create(req.body).then(user=>res.json({"meesage":user}))}
});

router.post("/login", login.handleLogin);


module.exports = router;