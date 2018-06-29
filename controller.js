'use strict';
const mongoose = require('mongoose');
const User = mongoose.model('User');
module.exports = {
    appGet: (req, res, next)=>{
        console.log('Request came from: ', req.originalUrl);
        console.log('My data: ',req.body)
        res.status().send('Request solved');
    },
    appPost: (req,res)=>{
        console.log('Post solved for', req.originalUrl);
        res.status(200).json({status: 'solved', code: 200, message: req.body.name});
    },
    appAll: (req,res)=> res. status(200).send('solved'),
    saveRecord: async (req,res)=> {
        try{
            const data = req.body.user;
            const user = new User(data);
            await user.save(data);
            res.status(200).json({status:200, data: user});
        }
        catch(err){
            console.log(err);
            res.status(500).json({status:500, error: err});
        }
    }
}