const express = require('express');

const router = express.Router();
const User = require('../models/user');

router.get('/', async(req,res)=>{
    try{
        const users = await User.find();
        res.json(users);
    }catch(err){
        res.send('Error' + err);
    }
})

router.get('/:id', async(req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        res.json(user);
    }catch(err){
        res.send('Error' + err);
    }
})

router.post('/', async(req,res)=>{
    const user = new User({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })

    try{
        const u1 = await user.save();
        res.send(u1);
    }catch(err){
        res.send('Error');
    }
})

router.patch('/:id', async(req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        user.sub = req.body.sub;
        const u1 = await user.save();
        res.send("User sub details updated!");
    }catch(e){
        res.send(e);
    }
})

router.delete('/:id', async(req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        const u1 = await user.remove();
        res.send("User deleted!");
    }catch(e){
        res.send(e);
    }
})
module.exports = router;