'uesr strict';
const express= require('express');
const app = express();
const mongoose= require('mongoose');
port = 3000;
mongoose.connect('mongodb://localhost:27017/node-demo1');
mongoose.connection.on('connected',()=>console.log('connection done'));
mongoose.connection.on('error',(err)=> console.log('connection error'));
mongoose.connection.on('disconnected',()=> console.log('Disconnect'));
process.on('SIGINT',()=>{
    mongoose.connection.close(()=>{
        console.log('connection closed');
        process.exit(0);
    })
});
require('./model/user');
console.log('done');
const controller = require('./controller');
// app.use(bodyParser.json());
app.use((req,res,next)=>{
    // if(req,headers.movetonext == 'move'){
    //     next();
    // }
    // else{s
    //     console.log('Finish ');
    // 
    console.log('111');
    next();
})
app.get('/',controller.appGet);
app.post('/post',controller.appPost);
app.post('/save_data',controller.saveRecord);
app.all('/all.route', controller.appAll)
app.listen(port, ()=> console.log('server start'))
