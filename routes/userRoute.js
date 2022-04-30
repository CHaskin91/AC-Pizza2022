const express = require("express");
const router = express.Router();
const User = require("../models/userModel")

router.post("/register", async(req, res) => {
    
    const {name , email , password} = req.body
    const newUser = new User({name , email , password})

    try {
        newUser.save()
        res.send('User Registered Successfully')
    } catch (error) {
        return res.status(300).json({message: error});

    } 
    
});

module.exports = router