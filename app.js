/**
 * Created by ashishtyagi9622 on 18/6/18.
 */
var express=require("express");
var bodyParser=require("body-parser");
var path=require("path");
var funct=require('./functions.js');
var app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/',express.static('public_static'));

app.get('/admin',function (req,res) {
    res.sendFile(path.join(__dirname, 'public_static/views/admin.html'))
});
app.post('updateR4',function (req,res) {
    funct.updateR4(function () {
        res.send("done round 4 with third place final ");
    })
});

app.post('updateR8',function (req,res) {
    funct.updateR8(function () {
        res.send("done round 8");
    })
});
app.post('/updateR16',function (req,res) {
    funct.updateR16(function () {
        res.send("done round 16");
    })
});
app.post('/updateGroup',function (req,res) {
    funct.updateGroup(function () {
        res.send("done group");
    })
});
app.post('/updateSquadAll',function (req,res) {
    console.log("request squad",req.body);
    funct.updatingMatchSquad(req.body,function (type) {
        console.log("type",type,typeof type);

        var data={
            type:type
        };
        res.send(data);
    });
});
app.post('/updateRedCards',function (req,res) {
    console.log("request redcard",req.body);
    // res.send("red card");
    funct.updatingMatchRedCards(req.body,function () {
        res.send('redCards done');
    });
});

app.post('/updateScorer',function (req,res) {
    console.log("request scorer",req.body);

    funct.updatingMatchScorer(req.body,function () {
        res.send('scorer done');
    });
});
app.post('/updateAssist',function (req,res) {
    console.log("request assist",req.body);
    // res.send("assist");
    funct.updatingMatchAssist(req.body,function () {
        res.send('assist done');
    });
});
app.get('/get',function (req,res) {
    funct.getData(function (data) {
        res.send(data);
    });
});
app.get('/getStats',function (req,res) {
    funct.getDataStats(function (data) {
        res.send(data);
    });
});
app.get('/getTeam',function (req,res) {
    funct.getDataTeam(function (data) {
        res.send(data);
    });
});
app.get('/getStadium',function (req,res) {
    funct.getDataStadium(function (data) {
        // console.log(data);
        res.send(data);
    });
});
app.listen(4000,function (res,err) {
    console.log("running at 4000");
});




