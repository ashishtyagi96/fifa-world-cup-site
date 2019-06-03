/**
 * Created by ashishtyagi9622 on 21/6/18.
 */
//var mongodbUrl = 'mongodb://ashishtyagi96:ashish681@ds018848.mlab.com:18848/fifa';

var mongodbUrl = 'mongodb://localhost:27017/fifa';
var MongoClient = require('mongodb').MongoClient;
exports.updateR4=function (callback) {
    var teamsName=["World Cup 2018", "Russia", "Saudi Arabia", "Egypt", "Uruguay", "Portugal", "Spain", "Morocco", "Iran", "France", "Australia", "Peru", "Denmark", "Argentina", "Iceland", "Croatia", "Nigeria", "Brazil", "Switzerland", "Costa Rica", "Serbia", "Germany", "Mexico", "Sweden", "South Korea", "Belgium", "Panama", "Tunisia", "England", "Poland", "Senegal", "Colombia", "Japan"];
    MongoClient.connect(mongodbUrl,function (err,db) {

        var t1,t2,t3,t4;
        var collection=db.collection('newfifa');
        var winners=collection.find({"value":"knockout"});
        var dat=[];
        winners.forEach(function (result) {
            dat.push(result);
        });
        setTimeout(function () {
            var mat = dat[0].data['round_4'].matches;
            var winn=[];
            winn[0]=mat[0].winner;
            winn[1]=mat[1].loser;
            winn[2]=mat[2].winner;
            winn[3]=mat[3].loser;

            console.log(winn);
            t1=teamsName.indexOf(winn[0]);
            t2=teamsName.indexOf(winn[1]);
            t3=teamsName.indexOf(winn[2]);
            t4=teamsName.indexOf(winn[3]);

            var matR_2 = dat[0].data['round_2'].matches;
            var matR_2L = dat[0].data['round_2_loser'].matches;
            matR_2[0].home_team=t1;
            matR_2[0].away_team=t3;
            matR_2L[0].home_team=t2;
            matR_2L[0].away_team=t4;
            collection.update({"value": "knockout"}, {$set: {"data.round_2.matches": matR_4}});
            collection.update({"value": "knockout"}, {$set: {"data.round_2_loser.matches": matR_4}});

            callback();


        },100);



    })
};
exports.updateR8=function (callback) {
    var teamsName=["World Cup 2018", "Russia", "Saudi Arabia", "Egypt", "Uruguay", "Portugal", "Spain", "Morocco", "Iran", "France", "Australia", "Peru", "Denmark", "Argentina", "Iceland", "Croatia", "Nigeria", "Brazil", "Switzerland", "Costa Rica", "Serbia", "Germany", "Mexico", "Sweden", "South Korea", "Belgium", "Panama", "Tunisia", "England", "Poland", "Senegal", "Colombia", "Japan"];
    MongoClient.connect(mongodbUrl,function (err,db) {

        var t1,t2,t3,t4;
        var collection=db.collection('newfifa');
        var winners=collection.find({"value":"knockout"});
        var dat=[];
        winners.forEach(function (result) {
            dat.push(result);
        });
        setTimeout(function () {
            var mat = dat[0].data['round_8'].matches;
            var winn=[];
            winn[0]=mat[0].winner;
            winn[1]=mat[1].winner;
            winn[2]=mat[2].winner;
            winn[3]=mat[3].winner;

            console.log(winn);
            t1=teamsName.indexOf(winn[0]);
            t2=teamsName.indexOf(winn[1]);
            t3=teamsName.indexOf(winn[2]);
            t4=teamsName.indexOf(winn[3]);

            var matR_4 = dat[0].data['round_4'].matches;

            matR_4[0].home_team=t1;
            matR_4[0].away_team=t2;
            matR_4[1].home_team=t3;
            matR_4[1].away_team=t4;
            collection.update({"value": "knockout"}, {$set: {"data.round_4.matches": matR_4}});

            callback();


        },100);



    })
};

exports.updateR16=function (callback) {
    var m_49;
    var m_50;
    var m_51;
    var m_52;
    var m_53;
    var m_54;
    var m_55;
    var m_56;

    var teamsName=["World Cup 2018", "Russia", "Saudi Arabia", "Egypt", "Uruguay", "Portugal", "Spain", "Morocco", "Iran", "France", "Australia", "Peru", "Denmark", "Argentina", "Iceland", "Croatia", "Nigeria", "Brazil", "Switzerland", "Costa Rica", "Serbia", "Germany", "Mexico", "Sweden", "South Korea", "Belgium", "Panama", "Tunisia", "England", "Poland", "Senegal", "Colombia", "Japan"];
    MongoClient.connect(mongodbUrl,function (err,db) {

        var t1,t2,t3,t4,t5,t6,t7,t8;
        var collection=db.collection('newfifa');
        var winners=collection.find({"value":"knockout"});
        var dat=[];
        winners.forEach(function (result) {
            dat.push(result);
        });
        setTimeout(function () {
            var mat = dat[0].data['round_16'].matches;
            var winn=[];
            winn[0]=mat[0].winner;
            winn[1]=mat[1].winner;
            winn[2]=mat[2].winner;
            winn[3]=mat[3].winner;
            winn[4]=mat[4].winner;
            winn[5]=mat[5].winner;
            winn[6]=mat[6].winner;
            winn[7]=mat[7].winner;
            console.log(winn);
            t1=teamsName.indexOf(winn[0]);
            t2=teamsName.indexOf(winn[1]);
            t3=teamsName.indexOf(winn[2]);
            t4=teamsName.indexOf(winn[3]);
            t5=teamsName.indexOf(winn[4]);
            t6=teamsName.indexOf(winn[5]);
            t7=teamsName.indexOf(winn[6]);
            t8=teamsName.indexOf(winn[7]);
            var matR_8 = dat[0].data['round_8'].matches;

                matR_8[0].home_team=t1;
                matR_8[0].away_team=t2;
                matR_8[1].home_team=t5;
                matR_8[1].away_team=t6;
            matR_8[2].home_team=t3;
            matR_8[2].away_team=t4;

            matR_8[3].home_team=t7;
            matR_8[3].away_team=t8;
            collection.update({"value": "knockout"}, {$set: {"data.round_8.matches": matR_8}});

            callback();


        },100);



    })
};

exports.updateGroup=function (callback) {

        var a=[];
        var b=[];
        var c=[];
        var d=[];
        var e=[];
        var f=[];
        var g=[];
        var h=[];
        var winner_a;
        var runner_a;
        var winner_b;
        var runner_b;
        var winner_c;
        var runner_c;
        var winner_d;
        var runner_d;
        var winner_e;
        var runner_e;
        var winner_f;
        var runner_f;
        var winner_g;
        var runner_g;
        var winner_h;
        var runner_h;


        MongoClient.connect(mongodbUrl,function (err,db) {
            var collection=db.collection('newfifa');
            var daa=collection.find({"value":"teams"});
            var datat=[];

            daa.forEach(function (resu) {
                datat.push(resu);
            });

            setTimeout(function () {

                var data=datat[0].data;
                var i=0;

                for(;i<4;i++){
                    a.push({
                        id:data[i].id,
                        table:data[i].table
                    });
                }
                for(;i<8;i++){
                    b.push({
                        id:data[i].id,
                        table:data[i].table
                    });
                }
                for(;i<12;i++){
                    c.push({
                        id:data[i].id,
                        table:data[i].table
                    });
                }
                for(;i<16;i++){
                    d.push({
                        id:data[i].id,
                        table:data[i].table
                    });
                }
                for(;i<20;i++){
                    e.push({
                        id:data[i].id,
                        table:data[i].table
                    });
                }
                for(;i<24;i++){
                    f.push({
                        id:data[i].id,
                        table:data[i].table
                    });
                }
                for(;i<28;i++){
                    g.push({
                        id:data[i].id,
                        table:data[i].table
                    });
                }
                for(;i<32;i++){
                    h.push({
                        id:data[i].id,
                        table:data[i].table
                    });
                }
                a.sort(function(a, b){
                    return b.table.points-a.table.points
                });
                a.sort(function (a,b) {
                    if(a.table.points==b.table.points){
                        return b.table.goalDifference-a.table.goalDifference
                    }

                });


                b.sort(function(a, b){
                    return b.table.points-a.table.points
                });
                b.sort(function (a,b) {
                    if(a.table.points==b.table.points){
                        return b.table.goalDifference-a.table.goalDifference
                    }
                });
                c.sort(function(a, b){
                    return b.table.points-a.table.points
                });
                c.sort(function (a,b) {
                    if(a.table.points==b.table.points){
                        return b.table.goalDifference-a.table.goalDifference
                    }
                });
                d.sort(function(a, b){
                    return b.table.points-a.table.points
                });
                d.sort(function (a,b) {
                    if(a.table.points==b.table.points){
                        return b.table.goalDifference-a.table.goalDifference
                    }
                });
                e.sort(function(a, b){
                    return b.table.points-a.table.points
                });
                e.sort(function (a,b) {
                    if(a.table.points==b.table.points){
                        return b.table.goalDifference-a.table.goalDifference
                    }
                });
                f.sort(function(a, b){
                    return b.table.points-a.table.points
                });
                f.sort(function (a,b) {
                    if(a.table.points==b.table.points){
                        return b.table.goalDifference-a.table.goalDifference
                    }
                });
                g.sort(function(a, b){
                    return b.table.points-a.table.points
                });
                g.sort(function (a,b) {
                    if(a.table.points==b.table.points){
                        return b.table.goalDifference-a.table.goalDifference
                    }
                });
                h.sort(function(a, b){
                    return b.table.points-a.table.points
                });
                h.sort(function (a,b) {
                    if(a.table.points==b.table.points){
                        return b.table.goalDifference-a.table.goalDifference
                    }
                });

                console.log("a",a);
                console.log("b",b);
                console.log("c",c);
                console.log("d",d);
                console.log("e",e);
                console.log("f",f);
                console.log("g",g);
                console.log("h",h);
                winner_a=a[0].id;
                runner_a=a[1].id;
                winner_b=b[1].id;
                runner_b=b[0].id;
                winner_c=c[0].id;
                runner_c=c[1].id;
                winner_d=d[0].id;
                runner_d=d[1].id;
                winner_e=e[0].id;
                runner_e=e[1].id;
                winner_f=f[0].id;
                runner_f=f[1].id;
                winner_g=g[0].id;
                runner_g=g[1].id;
                winner_h=h[0].id;
                runner_h=h[1].id;
                collection.update({"value":"groups"},{$set:{"data.a.winner":winner_a}});
                collection.update({"value":"groups"},{$set:{"data.a.runnerup":runner_a}});
                collection.update({"value":"groups"},{$set:{"data.b.winner":winner_b}});
                collection.update({"value":"groups"},{$set:{"data.b.runnerup":runner_b}});
                collection.update({"value":"groups"},{$set:{"data.c.winner":winner_c}});
                collection.update({"value":"groups"},{$set:{"data.c.runnerup":runner_c}});
                collection.update({"value":"groups"},{$set:{"data.d.winner":winner_d}});
                collection.update({"value":"groups"},{$set:{"data.d.runnerup":runner_d}});
                collection.update({"value":"groups"},{$set:{"data.e.winner":winner_e}});
                collection.update({"value":"groups"},{$set:{"data.e.runnerup":runner_e}});
                collection.update({"value":"groups"},{$set:{"data.f.winner":winner_f}});
                collection.update({"value":"groups"},{$set:{"data.f.runnerup":runner_f}});
                collection.update({"value":"groups"},{$set:{"data.g.winner":winner_g}});
                collection.update({"value":"groups"},{$set:{"data.g.runnerup":runner_g}});
                collection.update({"value":"groups"},{$set:{"data.h.winner":winner_h}});
                collection.update({"value":"groups"},{$set:{"data.h.runnerup":runner_h}});

            },100);
        });



            MongoClient.connect(mongodbUrl,function (err,db) {
                var collection=db.collection('newfifa');
                var d=collection.find({"value":"knockout"});
                var dat=[];
                d.forEach(function (result) {
                    dat.push(result);
                });
                setTimeout(function () {
                    var mat = dat[0].data['round_16'].matches;

                    mat[0]['home_team'] = winner_a;
                    mat[0]['away_team'] = runner_b;
                    mat[1]['home_team'] = winner_c;
                    mat[1]['away_team'] = runner_d;
                    mat[2]['home_team'] = winner_b;
                    mat[2]['away_team'] = runner_a;
                    mat[3]['home_team'] = winner_d;
                    mat[3]['away_team'] = runner_c;
                    mat[4]['home_team'] = winner_e;
                    mat[4]['away_team'] = runner_f;
                    mat[5]['home_team'] = winner_g;
                    mat[5]['away_team'] = runner_h;
                    mat[6]['home_team'] = winner_f;
                    mat[6]['away_team'] = runner_e;
                    mat[7]['home_team'] = winner_h;
                    mat[7]['away_team'] = runner_g;

                    collection.update({"value": "knockout"}, {$set: {"data.round_16.matches": mat}});



                },100);

            });


    setTimeout(function () {
        console.log("callback calling");
        callback();
    },200);


};
exports.updatingMatchSquad=function (match,callback) {
    // match=JSON.parse(match);
    console.log("match ki value",match);

    var home_squad=[];
    var away_sqaud=[];

    MongoClient.connect(mongodbUrl,function (err,db) {
        var matches;

        var gm=[
            "groups","a","a","b","b","c","c","d","d","e","e","f","f","g","g","h","h",
            "a","a","b","b","c","c","d","d","e","e","f","f","g","g","h","h",
            "a","a","b","b","c","c","d","d","e","e","f","f","g","g","h","h"
        ];
        var gro=gm[match.matchName];
        var collection=db.collection('newfifa');


        if((match.matchName>0)&&(match.matchName<49)){
            var data=collection.find({"value":"groups"});
            var dat=[];


            data.forEach(function (result) {
                dat.push(result);
            });
            setTimeout(function () {


                var j=dat[0].data[gro].matches;
                var homeTeam;
                var awayTeam;
                    for(var i=0;i<j.length;i++){
                        if(j[i].name==match.matchName){
                            j[i].home_squad.squad=match.home_squad;
                            j[i].away_squad.squad=match.away_squad;
                            j[i].finished=true;
                            j[i].home_result=match.home_result;
                            j[i].away_result=match.away_result;
                            homeTeam=j[i].home_team;
                            awayTeam=j[i].away_team;
                            break;
                        }
                    }

                if(gro=="a"){
                    collection.update({"value":"groups"},{$set:{"data.a.matches":j}})
                }
                else if(gro=="b"){
                    collection.update({"value":"groups"},{$set:{"data.b.matches":j}})
                }
                else if(gro=="c"){
                    collection.update({"value":"groups"},{$set:{"data.c.matches":j}})
                }
                else if(gro=="d"){
                    collection.update({"value":"groups"},{$set:{"data.d.matches":j}})
                }
                else if(gro=="e"){
                    collection.update({"value":"groups"},{$set:{"data.e.matches":j}})
                }
                else if(gro=="f"){
                    collection.update({"value":"groups"},{$set:{"data.f.matches":j}})
                }
                else if(gro=="g"){
                    collection.update({"value":"groups"},{$set:{"data.g.matches":j}})
                }
                else if(gro=="h"){
                    collection.update({"value":"groups"},{$set:{"data.h.matches":j}})
                }


                var team=collection.find({"value":"teams"});
                var tea=[];
                team.forEach(function (result) {
                    tea.push(result);
                });
                // console.log("kuch kuch");
                setTimeout(function () {
                    // console.log(match);
                    console.log("yes",homeTeam,awayTeam);
                    // console.log("hota hai");
                    var Table_data= tea[0].data;
                    var homeTable=Table_data[homeTeam-1].table;
                    var awayTable=Table_data[awayTeam-1].table;
                    homeTable.played+=1;
                    awayTable.played+=1;
                    var difference=match.home_result-match.away_result;
                    console.log("difference",difference);
                    if(difference===0){
                        homeTable.draw+=1;
                        awayTable.draw+=1;
                        homeTable.points+=1;
                        awayTable.points+=1;
                    }
                    else if(difference>0){
                        var ab=Math.abs(difference);
                        homeTable.points+=3;
                        homeTable.goalDifference+=ab;
                        awayTable.goalDifference-=ab;
                        homeTable.won+=1;
                        awayTable.lose+=1;

                    }
                    else{
                        var ab=Math.abs(difference);

                        awayTable.points+=3;
                        homeTable.goalDifference-=ab;
                        awayTable.goalDifference+=ab;
                        awayTable.won+=1;
                        homeTable.lose+=1;
                    }
                    Table_data[homeTeam-1].table=homeTable;
                    Table_data[awayTeam-1].table=awayTable;

                    collection.update({"value":"teams"},{$set:{"data":Table_data}});




                },100);


            },100);
        }

        else if((match.matchName>48)&&(match.matchName<57)){

            var data=collection.find({"value":"knockout"});
            var dat=[];


            data.forEach(function (result) {
                dat.push(result);
            });
            setTimeout(function () {


                var j=dat[0].data['round_16'].matches;
                var obj;

                    for(var i=0;i<j.length;i++){
                        if(j[i].name==match.matchName){
                            j[i].home_squad.squad=match.home_squad;
                            j[i].away_squad.squad=match.away_squad;
                            j[i].finished=true;
                            j[i].home_result=match.home_result;
                            j[i].away_result=match.away_result;
                            if(match.homePenalty){
                                j[i].home_penalty=match.homePenalty;
                                j[i].away_penalty=match.awayPenalty;
                                if(match.homePenalty>match.awayPenalty){
                                    j[i].winner=match.homeTeam;
                                }
                                else if(match.homePenalty>match.awayPenalty){
                                    j[i].winner=match.awayTeam;
                                }
                            }
                            else{
                                if(match.home_result>match.away_result){
                                    j[i].winner=match.homeTeam;
                                }
                                else if(match.home_result>match.away_result){
                                    j[i].winner=match.homeTeam;
                                }
                            }

                            break;
                        }
                    }



                collection.update({"value":"knockout"},{$set:{"data.round_16.matches":j}});
            },100);



        }
        else if((match.matchName>56)&&(match.matchName<61)){

            var data=collection.find({"value":"knockout"});
            var dat=[];


            data.forEach(function (result) {
                dat.push(result);
            });
            setTimeout(function () {


                var j=dat[0].data['round_8'].matches;

                    for(var i=0;i<j.length;i++){
                        if(j[i].name==match.matchName){
                            j[i].home_squad.squad=match.home_squad;
                            j[i].away_squad.squad=match.away_squad;
                            j[i].finished=true;
                            j[i].home_result=match.home_result;
                            j[i].away_result=match.away_result;
                            if(match.homePenalty){
                                j[i].home_penalty=match.homePenalty;
                                j[i].away_penalty=match.awayPenalty;
                                if(match.homePenalty>match.awayPenalty){
                                    j[i].winner=match.homeTeam;
                                }
                                else if(match.homePenalty>match.awayPenalty){
                                    j[i].winner=match.awayTeam;
                                }
                            }
                            else{
                                if(match.home_result>match.away_result){
                                    j[i].winner=match.homeTeam;
                                }
                                else if(match.home_result>match.away_result){
                                    j[i].winner=match.homeTeam;
                                }
                            }
                            break;
                        }
                    }



                collection.update({"value":"knockout"},{$set:{"data.round_8.matches":j}});

            },100);


        }
        else if((match.matchName=="61")||(match.matchName=="62")){

            var data=collection.find({"value":"knockout"});
            var dat=[];


            data.forEach(function (result) {
                dat.push(result);
            });
            setTimeout(function () {


                var j=dat[0].data['round_4'].matches;

                    for(var i=0;i<j.length;i++){
                        if(j[i].name==match.matchName){
                            j[i].home_squad.squad=match.home_squad;
                            j[i].away_squad.squad=match.away_squad;
                            j[i].finished=true;
                            j[i].home_result=match.home_result;
                            j[i].away_result=match.away_result;
                            if(match.homePenalty){
                                j[i].home_penalty=match.homePenalty;
                                j[i].away_penalty=match.awayPenalty;
                                if(match.homePenalty>match.awayPenalty){
                                    j[i].winner=match.homeTeam;
                                }
                                else if(match.homePenalty>match.awayPenalty){
                                    j[i].winner=match.awayTeam;
                                }
                            }
                            else{
                                if(match.home_result>match.away_result){
                                    j[i].winner=match.homeTeam;
                                }
                                else if(match.home_result>match.away_result){
                                    j[i].winner=match.homeTeam;
                                }
                            }
                            break;
                        }
                    }



                collection.update({"value":"knockout"},{$set:{"data.round_4.matches":j}});

            },100);


        }
        else if(match.matchName=="63"){

            var data=collection.find({"value":"knockout"});
            var dat=[];


            data.forEach(function (result) {
                dat.push(result);
            });
            setTimeout(function () {


                var j=dat[0].data['round_2_loser'].matches;

                    for(var i=0;i<j.length;i++){
                        if(j[i].name==match.matchName){
                            j[i].home_squad.squad=match.home_squad;
                            j[i].away_squad.squad=match.away_squad;
                            j[i].finished=true;
                            j[i].home_result=match.home_result;
                            j[i].away_result=match.away_result;
                            if(match.homePenalty){
                                j[i].home_penalty=match.homePenalty;
                                j[i].away_penalty=match.awayPenalty;
                                if(match.homePenalty>match.awayPenalty){
                                    j[i].winner=match.homeTeam;
                                }
                                else if(match.homePenalty>match.awayPenalty){
                                    j[i].winner=match.awayTeam;
                                }
                            }
                            else{
                                if(match.home_result>match.away_result){
                                    j[i].winner=match.homeTeam;
                                }
                                else if(match.home_result>match.away_result){
                                    j[i].winner=match.homeTeam;
                                }
                            }
                            break;
                        }
                    }

                collection.update({"value":"knockout"},{$set:{"data.round_2_loser.matches":j}});


            },100);


        }
        else{

            var data=collection.find({"value":"knockout"});
            var dat=[];


            data.forEach(function (result) {
                dat.push(result);
            });
            setTimeout(function () {


                var j=dat[0].data['round_2'].matches;

                    for(var i=0;i<j.length;i++){
                        if(j[i].name==match.matchName){
                            j[i].home_squad.squad=match.home_squad;
                            j[i].away_squad.squad=match.away_squad;
                            j[i].finished=true;
                            j[i].home_result=match.home_result;
                            j[i].away_result=match.away_result;
                            if(match.homePenalty){
                                j[i].home_penalty=match.homePenalty;
                                j[i].away_penalty=match.awayPenalty;
                                if(match.homePenalty>match.awayPenalty){
                                    j[i].winner=match.homeTeam;
                                }
                                else if(match.homePenalty>match.awayPenalty){
                                    j[i].winner=match.awayTeam;
                                }
                            }
                            else{
                                if(match.home_result>match.away_result){
                                    j[i].winner=match.homeTeam;
                                }
                                else if(match.home_result>match.away_result){
                                    j[i].winner=match.homeTeam;
                                }
                            }
                            break;
                        }
                    }


                collection.update({"value":"knockout"},{$set:{"data.round_2.matches":j}});


            },100);


        }
        
        cleanSheetUpdate(match,callback,collection,match.matchName);



    });
};
// updating match red cards--------------------------------------------------------------

exports.updatingMatchRedCards=function (match,callback) {

    MongoClient.connect(mongodbUrl,function (err,db) {
        var matches;

        var gm=[
            "groups","a","a","b","b","c","c","d","d","e","e","f","f","g","g","h","h",
            "a","a","b","b","c","c","d","d","e","e","f","f","g","g","h","h",
            "a","a","b","b","c","c","d","d","e","e","f","f","g","g","h","h"
        ];
        var gro=gm[match.matchName];
        var collection=db.collection('newfifa');


        if((match.matchName>0)&&(match.matchName<49)){
            var data=collection.find({"value":"groups"});
            var dat=[];


            data.forEach(function (result) {
                dat.push(result);
            });
            setTimeout(function () {


                var j=dat[0].data[gro].matches;
                var obj;


                obj={
                    name:match.name,
                    time:match.time
                };
                if(match.team=="home"){
                    for(var i=0;i<j.length;i++){
                        if(j[i].name==match.matchName){
                            j[i].home_squad.redCards.push(obj);
                            break;
                        }
                    }
                }
                else{
                    for(var i=0;i<j.length;i++){
                        if(j[i].name==match.matchName){
                            j[i].away_squad.redCards.push(obj);
                            break;
                        }
                    }
                }


                if(gro=="a"){
                    collection.update({"value":"groups"},{$set:{"data.a.matches":j}})
                }
                else if(gro=="b"){
                    collection.update({"value":"groups"},{$set:{"data.b.matches":j}})
                }
                else if(gro=="c"){
                    collection.update({"value":"groups"},{$set:{"data.c.matches":j}})
                }
                else if(gro=="d"){
                    collection.update({"value":"groups"},{$set:{"data.d.matches":j}})
                }
                else if(gro=="e"){
                    collection.update({"value":"groups"},{$set:{"data.e.matches":j}})
                }
                else if(gro=="f"){
                    collection.update({"value":"groups"},{$set:{"data.f.matches":j}})
                }
                else if(gro=="g"){
                    collection.update({"value":"groups"},{$set:{"data.g.matches":j}})
                }
                else if(gro=="h"){
                    collection.update({"value":"groups"},{$set:{"data.h.matches":j}})
                }


                statsUpdate(match,callback,collection);

                



            },100);
        }

        else if((match.matchName>48)&&(match.matchName<57)){

            var data=collection.find({"value":"knockout"});
            var dat=[];


            data.forEach(function (result) {
                dat.push(result);
            });
            setTimeout(function () {


                var j=dat[0].data['round_16'].matches;
                var obj;


                obj={
                    name:match.name,
                    time:match.time
                };
                if(match.team=="home"){
                    for(var i=0;i<j.length;i++){
                        if(j[i].name==match.matchName){
                            j[i].home_squad.redCards.push(obj);
                            break;
                        }
                    }
                }
                else{
                    for(var i=0;i<j.length;i++){
                        if(j[i].name==match.matchName){
                            j[i].away_squad.redCards.push(obj);
                            break;
                        }
                    }
                }


                collection.update({"value":"knockout"},{$set:{"data.round_16.matches":j}});

                statsUpdate(match,callback,collection);


            },100);



        }
        else if((match.matchName>56)&&(match.matchName<61)){

            var data=collection.find({"value":"knockout"});
            var dat=[];


            data.forEach(function (result) {
                dat.push(result);
            });
            setTimeout(function () {


                var j=dat[0].data['round_8'].matches;
                var obj;


                obj={
                    name:match.name,
                    time:match.time
                };
                if(match.team=="home"){
                    for(var i=0;i<j.length;i++){
                        if(j[i].name==match.matchName){
                            j[i].home_squad.redCards.push(obj);
                            break;
                        }
                    }
                }
                else{
                    for(var i=0;i<j.length;i++){
                        if(j[i].name==match.matchName){
                            j[i].away_squad.redCards.push(obj);
                            break;
                        }
                    }
                }


                collection.update({"value":"knockout"},{$set:{"data.round_8.matches":j}});


                statsUpdate(match,callback,collection);


            },100);


        }
        else if((match.matchName=="61")||(match.matchName=="62")){

            var data=collection.find({"value":"knockout"});
            var dat=[];


            data.forEach(function (result) {
                dat.push(result);
            });
            setTimeout(function () {


                var j=dat[0].data['round_4'].matches;
                var obj;


                obj={
                    name:match.name,
                    time:match.time
                };
                if(match.team=="home"){
                    for(var i=0;i<j.length;i++){
                        if(j[i].name==match.matchName){
                            j[i].home_squad.redCards.push(obj);
                            break;
                        }
                    }
                }
                else{
                    for(var i=0;i<j.length;i++){
                        if(j[i].name==match.matchName){
                            j[i].away_squad.redCards.push(obj);
                            break;
                        }
                    }
                }


                collection.update({"value":"knockout"},{$set:{"data.round_4.matches":j}});


                statsUpdate(match,callback,collection);



            },100);


        }
        else if(match.matchName=="63"){

            var data=collection.find({"value":"knockout"});
            var dat=[];


            data.forEach(function (result) {
                dat.push(result);
            });
            setTimeout(function () {


                var j=dat[0].data['round_2_loser'].matches;
                var obj;


                obj={
                    name:match.name,
                    time:match.time
                };
                if(match.team=="home"){
                    for(var i=0;i<j.length;i++){
                        if(j[i].name==match.matchName){
                            j[i].home_squad.redCards.push(obj);
                            break;
                        }
                    }
                }
                else{
                    for(var i=0;i<j.length;i++){
                        if(j[i].name==match.matchName){
                            j[i].away_squad.redCards.push(obj);
                            break;
                        }
                    }
                }


                collection.update({"value":"knockout"},{$set:{"data.round_2_loser.matches":j}});

                statsUpdate(match,callback,collection);


            },100);


        }
        else{

            var data=collection.find({"value":"knockout"});
            var dat=[];


            data.forEach(function (result) {
                dat.push(result);
            });
            setTimeout(function () {


                var j=dat[0].data['round_2'].matches;
                var obj;


                obj={
                    name:match.name,
                    time:match.time
                };
                if(match.team=="home"){
                    for(var i=0;i<j.length;i++){
                        if(j[i].name==match.matchName){
                            j[i].home_squad.redCards.push(obj);
                            break;
                        }
                    }
                }
                else{
                    for(var i=0;i<j.length;i++){
                        if(j[i].name==match.matchName){
                            j[i].away_squad.redCards.push(obj);
                            break;
                        }
                    }
                }


                collection.update({"value":"knockout"},{$set:{"data.round_2.matches":j}});

                statsUpdate(match,callback,collection);



            },100);


        }



    });

};


//---------------------------------------------------------------------------------------

//updating match assists------------------------------------------------------------------
exports.updatingMatchAssist=function (match,callback) {

    MongoClient.connect(mongodbUrl,function (err,db) {
        var matches;

        var gm=[
            "groups","a","a","b","b","c","c","d","d","e","e","f","f","g","g","h","h",
            "a","a","b","b","c","c","d","d","e","e","f","f","g","g","h","h",
            "a","a","b","b","c","c","d","d","e","e","f","f","g","g","h","h"
        ];
        var gro=gm[match.matchName];
        var collection=db.collection('newfifa');


        if((match.matchName>0)&&(match.matchName<49)){
            var data=collection.find({"value":"groups"});
            var dat=[];


            data.forEach(function (result) {
                dat.push(result);
            });
            setTimeout(function () {


                var j=dat[0].data[gro].matches;
                var obj;


                    obj={
                        name:match.name,
                        time:match.time
                    };
                    if(match.team=="home"){
                        for(var i=0;i<j.length;i++){
                            if(j[i].name==match.matchName){
                                j[i].home_squad.assists.push(obj);
                                break;
                            }
                        }
                    }
                    else{
                        for(var i=0;i<j.length;i++){
                            if(j[i].name==match.matchName){
                                j[i].away_squad.assists.push(obj);
                                break;
                            }
                        }
                    }


                if(gro=="a"){
                    collection.update({"value":"groups"},{$set:{"data.a.matches":j}})
                }
                else if(gro=="b"){
                    collection.update({"value":"groups"},{$set:{"data.b.matches":j}})
                }
                else if(gro=="c"){
                    collection.update({"value":"groups"},{$set:{"data.c.matches":j}})
                }
                else if(gro=="d"){
                    collection.update({"value":"groups"},{$set:{"data.d.matches":j}})
                }
                else if(gro=="e"){
                    collection.update({"value":"groups"},{$set:{"data.e.matches":j}})
                }
                else if(gro=="f"){
                    collection.update({"value":"groups"},{$set:{"data.f.matches":j}})
                }
                else if(gro=="g"){
                    collection.update({"value":"groups"},{$set:{"data.g.matches":j}})
                }
                else if(gro=="h"){
                    collection.update({"value":"groups"},{$set:{"data.h.matches":j}})
                }

                statsUpdate(match,callback,collection);





            },100);
        }

        else if((match.matchName>48)&&(match.matchName<57)){

            var data=collection.find({"value":"knockout"});
            var dat=[];


            data.forEach(function (result) {
                dat.push(result);
            });
            setTimeout(function () {


                var j=dat[0].data['round_16'].matches;
                var obj;


                    obj={
                        name:match.name,
                        time:match.time
                    };
                    if(match.team=="home"){
                        for(var i=0;i<j.length;i++){
                            if(j[i].name==match.matchName){
                                j[i].home_squad.assists.push(obj);
                                break;
                            }
                        }
                    }
                    else{
                        for(var i=0;i<j.length;i++){
                            if(j[i].name==match.matchName){
                                j[i].away_squad.assists.push(obj);
                                break;
                            }
                        }
                    }


                collection.update({"value":"knockout"},{$set:{"data.round_16.matches":j}});



                statsUpdate(match,callback,collection);



            },100);



        }
        else if((match.matchName>56)&&(match.matchName<61)){

            var data=collection.find({"value":"knockout"});
            var dat=[];


            data.forEach(function (result) {
                dat.push(result);
            });
            setTimeout(function () {


                var j=dat[0].data['round_8'].matches;
                var obj;


                    obj={
                        name:match.name,
                        time:match.time
                    };
                    if(match.team=="home"){
                        for(var i=0;i<j.length;i++){
                            if(j[i].name==match.matchName){
                                j[i].home_squad.assists.push(obj);
                                break;
                            }
                        }
                    }
                    else{
                        for(var i=0;i<j.length;i++){
                            if(j[i].name==match.matchName){
                                j[i].away_squad.assists.push(obj);
                                break;
                            }
                        }
                    }


                collection.update({"value":"knockout"},{$set:{"data.round_8.matches":j}});

                statsUpdate(match,callback,collection);



            },100);


        }
        else if((match.matchName=="61")||(match.matchName=="62")){

            var data=collection.find({"value":"knockout"});
            var dat=[];


            data.forEach(function (result) {
                dat.push(result);
            });
            setTimeout(function () {


                var j=dat[0].data['round_4'].matches;
                var obj;


                    obj={
                        name:match.name,
                        time:match.time
                    };
                    if(match.team=="home"){
                        for(var i=0;i<j.length;i++){
                            if(j[i].name==match.matchName){
                                j[i].home_squad.assists.push(obj);
                                break;
                            }
                        }
                    }
                    else{
                        for(var i=0;i<j.length;i++){
                            if(j[i].name==match.matchName){
                                j[i].away_squad.assists.push(obj);
                                break;
                            }
                        }
                    }


                collection.update({"value":"knockout"},{$set:{"data.round_4.matches":j}});

                statsUpdate(match,callback,collection);


            },100);


        }
        else if(match.matchName=="63"){

            var data=collection.find({"value":"knockout"});
            var dat=[];


            data.forEach(function (result) {
                dat.push(result);
            });
            setTimeout(function () {


                var j=dat[0].data['round_2_loser'].matches;
                var obj;


                    obj={
                        name:match.name,
                        time:match.time
                    };
                    if(match.team=="home"){
                        for(var i=0;i<j.length;i++){
                            if(j[i].name==match.matchName){
                                j[i].home_squad.assists.push(obj);
                                break;
                            }
                        }
                    }
                    else{
                        for(var i=0;i<j.length;i++){
                            if(j[i].name==match.matchName){
                                j[i].away_squad.assists.push(obj);
                                break;
                            }
                        }
                    }


                collection.update({"value":"knockout"},{$set:{"data.round_2_loser.matches":j}});


                statsUpdate(match,callback,collection);


            },100);


        }
        else{

            var data=collection.find({"value":"knockout"});
            var dat=[];


            data.forEach(function (result) {
                dat.push(result);
            });
            setTimeout(function () {


                var j=dat[0].data['round_2'].matches;
                var obj;


                    obj={
                        name:match.name,
                        time:match.time
                    };
                    if(match.team=="home"){
                        for(var i=0;i<j.length;i++){
                            if(j[i].name==match.matchName){
                                j[i].home_squad.assists.push(obj);
                                break;
                            }
                        }
                    }
                    else{
                        for(var i=0;i<j.length;i++){
                            if(j[i].name==match.matchName){
                                j[i].away_squad.assists.push(obj);
                                break;
                            }
                        }
                    }


                collection.update({"value":"knockout"},{$set:{"data.round_2.matches":j}});


                statsUpdate(match,callback,collection);

            },100);


        }



    });

};


//----------------------------------------------------------------------------------------
//updating match scorer ------------------------------------------------------------------
exports.updatingMatchScorer=function (match,callback) {

    MongoClient.connect(mongodbUrl,function (err,db) {
        var matches;

        var gm=[
            "groups","a","a","b","b","c","c","d","d","e","e","f","f","g","g","h","h",
            "a","a","b","b","c","c","d","d","e","e","f","f","g","g","h","h",
            "a","a","b","b","c","c","d","d","e","e","f","f","g","g","h","h"
        ];
        var gro=gm[match.matchName];
        var collection=db.collection('newfifa');


        if((match.matchName>0)&&(match.matchName<49)){
            var data=collection.find({"value":"groups"});
            var dat=[];


            data.forEach(function (result) {
                dat.push(result);
            });
            setTimeout(function () {


                var j=dat[0].data[gro].matches;
                var obj;

                if((match.type=="goal")||(match.type=="ownGoal")){
                    obj={
                        name:match.name,
                        time:match.time,
                        type:match.type
                    };
                    if(match.team=="home"){
                        for(var i=0;i<j.length;i++){
                            if(j[i].name==match.matchName){
                                j[i].home_squad.scorer.push(obj);
                                break;
                            }
                        }
                    }
                    else{
                        for(var i=0;i<j.length;i++){
                            if(j[i].name==match.matchName){
                                j[i].away_squad.scorer.push(obj);
                                break;
                            }
                        }
                    }

                }
                if(gro=="a"){
                    collection.update({"value":"groups"},{$set:{"data.a.matches":j}})
                }
                else if(gro=="b"){
                    collection.update({"value":"groups"},{$set:{"data.b.matches":j}})
                }
                else if(gro=="c"){
                    collection.update({"value":"groups"},{$set:{"data.c.matches":j}})
                }
                else if(gro=="d"){
                    collection.update({"value":"groups"},{$set:{"data.d.matches":j}})
                }
                else if(gro=="e"){
                    collection.update({"value":"groups"},{$set:{"data.e.matches":j}})
                }
                else if(gro=="f"){
                    collection.update({"value":"groups"},{$set:{"data.f.matches":j}})
                }
                else if(gro=="g"){
                    collection.update({"value":"groups"},{$set:{"data.g.matches":j}})
                }
                else if(gro=="h"){
                    collection.update({"value":"groups"},{$set:{"data.h.matches":j}})
                }

                statsUpdate(match,callback,collection);




            },100);
        }

        else if((match.matchName>48)&&(match.matchName<57)){

            var data=collection.find({"value":"knockout"});
            var dat=[];


            data.forEach(function (result) {
                dat.push(result);
            });
            setTimeout(function () {


                var j=dat[0].data['round_16'].matches;
                var obj;

                if((match.type=="goal")||(match.type=="ownGoal")){
                    obj={
                        name:match.name,
                        time:match.time,
                        type:match.type
                    };
                    if(match.team=="home"){
                        for(var i=0;i<j.length;i++){
                            if(j[i].name==match.matchName){
                                j[i].home_squad.scorer.push(obj);
                                break;
                            }
                        }
                    }
                    else{
                        for(var i=0;i<j.length;i++){
                            if(j[i].name==match.matchName){
                                j[i].away_squad.scorer.push(obj);
                                break;
                            }
                        }
                    }

                }
                collection.update({"value":"knockout"},{$set:{"data.round_16.matches":j}});

                statsUpdate(match,callback,collection);





            },100);



        }
        else if((match.matchName>56)&&(match.matchName<61)){

            var data=collection.find({"value":"knockout"});
            var dat=[];


            data.forEach(function (result) {
                dat.push(result);
            });
            setTimeout(function () {


                var j=dat[0].data['round_8'].matches;
                var obj;

                if((match.type=="goal")||(match.type=="ownGoal")){
                    obj={
                        name:match.name,
                        time:match.time,
                        type:match.type
                    };
                    if(match.team=="home"){
                        for(var i=0;i<j.length;i++){
                            if(j[i].name==match.matchName){
                                j[i].home_squad.scorer.push(obj);
                                break;
                            }
                        }
                    }
                    else{
                        for(var i=0;i<j.length;i++){
                            if(j[i].name==match.matchName){
                                j[i].away_squad.scorer.push(obj);
                                break;
                            }
                        }
                    }

                }
                collection.update({"value":"knockout"},{$set:{"data.round_8.matches":j}});

                statsUpdate(match,callback,collection);




            },100);


        }
        else if((match.matchName=="61")||(match.matchName=="62")){

            var data=collection.find({"value":"knockout"});
            var dat=[];


            data.forEach(function (result) {
                dat.push(result);
            });
            setTimeout(function () {


                var j=dat[0].data['round_4'].matches;
                var obj;

                if((match.type=="goal")||(match.type=="ownGoal")){
                    obj={
                        name:match.name,
                        time:match.time,
                        type:match.type
                    };
                    if(match.team=="home"){
                        for(var i=0;i<j.length;i++){
                            if(j[i].name==match.matchName){
                                j[i].home_squad.scorer.push(obj);
                                break;
                            }
                        }
                    }
                    else{
                        for(var i=0;i<j.length;i++){
                            if(j[i].name==match.matchName){
                                j[i].away_squad.scorer.push(obj);
                                break;
                            }
                        }
                    }

                }
                collection.update({"value":"knockout"},{$set:{"data.round_4.matches":j}});

                statsUpdate(match,callback,collection);



            },100);


        }
        else if(match.matchName=="63"){

            var data=collection.find({"value":"knockout"});
            var dat=[];


            data.forEach(function (result) {
                dat.push(result);
            });
            setTimeout(function () {


                var j=dat[0].data['round_2_loser'].matches;
                var obj;

                if((match.type=="goal")||(match.type=="ownGoal")){
                    obj={
                        name:match.name,
                        time:match.time,
                        type:match.type
                    };
                    if(match.team=="home"){
                        for(var i=0;i<j.length;i++){
                            if(j[i].name==match.matchName){
                                j[i].home_squad.scorer.push(obj);
                                break;
                            }
                        }
                    }
                    else{
                        for(var i=0;i<j.length;i++){
                            if(j[i].name==match.matchName){
                                j[i].away_squad.scorer.push(obj);
                                break;
                            }
                        }
                    }

                }
                collection.update({"value":"knockout"},{$set:{"data.round_2_loser.matches":j}});

                statsUpdate(match,callback,collection);



            },100);


        }
        else{

            var data=collection.find({"value":"knockout"});
            var dat=[];


            data.forEach(function (result) {
                dat.push(result);
            });
            setTimeout(function () {


                var j=dat[0].data['round_2'].matches;
                var obj;

                if((match.type=="goal")||(match.type=="ownGoal")){
                    obj={
                        name:match.name,
                        time:match.time,
                        type:match.type
                    };
                    if(match.team=="home"){
                        for(var i=0;i<j.length;i++){
                            if(j[i].name==match.matchName){
                                j[i].home_squad.scorer.push(obj);
                                break;
                            }
                        }
                    }
                    else{
                        for(var i=0;i<j.length;i++){
                            if(j[i].name==match.matchName){
                                j[i].away_squad.scorer.push(obj);
                                break;
                            }
                        }
                    }

                }
                collection.update({"value":"knockout"},{$set:{"data.round_2.matches":j}});

                statsUpdate(match,callback,collection);




            },100);


        }



    });

};



statsUpdate=function(match,callback,collection) {
    console.log("stats mein aagaya");

    if(match.type==="goal"){
        console.log("stats update goal",match);
        var st=collection.find({"value":"Stats"});
        var stats=[];
        st.forEach(function (result) {
            stats.push(result);
        });
        setTimeout(function () {
            var sta=stats[0].data;
            var player=sta.player;
            var topScorer=player.topScorer;
            var flagH=false;
            var flagA=false;
            if(match.team==="home"){
                for(var i=0;i<topScorer.length;i++){
                    if((topScorer[i].name===match.name)&&(topScorer[i].team===match.homeTeam)){
                        topScorer[i].goals+=1;
                        flagH=true;
                        break;
                    }
                }
                if(flagH===false){
                    var ex={
                        name:match.name,
                        team:match.homeTeam,
                        goals:1
                    };
                    topScorer.push(ex);
                }

            }
            else{
                for(var i=0;i<topScorer.length;i++){
                    if((topScorer[i].name===match.name)&&(topScorer[i].team===match.awayTeam)){
                        topScorer[i].goals+=1;
                        flagA=true;
                        break;
                    }
                }
                if(flagA===false){
                    var ex={
                        name:match.name,
                        team:match.awayTeam,
                        goals:1
                    };
                    topScorer.push(ex);
                }


            }
            flagH=false;
            flagA=false;

            player.topScorer=topScorer;
            var team=sta.team;
            var goal=team.goal;
            if(match.team==="home"){
                for(var i=0;i<goal.length;i++){
                    if(goal[i].team===match.homeTeam){
                        goal[i].goals+=1;
                        flagH=true;
                        break;
                    }
                }

                if(flagH===false){
                    var ex={
                        team:match.homeTeam,
                        goals:1
                    };
                    goal.push(ex);
                }
            }
            else{
                for(var i=0;i<goal.length;i++){
                    if(goal[i].team===match.awayTeam){
                        goal[i].goals+=1;
                        flagA=true;
                        break;
                    }
                }
                if(flagA===false){
                    var ex={
                        team:match.awayTeam,
                        goals:1
                    };
                    goal.push(ex);
                }
            }
            team.goal=goal;
            sta.player=player;
            sta.team=team;

            collection.update({"value":"Stats"},{$set:{"data":sta}});

            callback();

        },100)
    }
    else if(match.type==="assist"){
        console.log("stats update assist",match);

        var st=collection.find({"value":"Stats"});
        var stats=[];
        st.forEach(function (result) {
            stats.push(result);
        });
        setTimeout(function () {
            var sta=stats[0].data;
            var player=sta.player;
            var assist=player.mostAssist;
            var flagH=false;
            var flagA=false;
            if(match.team==="home"){
                for(var i=0;i<assist.length;i++){
                    if((assist[i].name===match.name)&&(assist[i].team===match.homeTeam)){
                        assist[i].goals+=1;
                        flagH=true;
                        break;
                    }
                }
                if(flagH===false){
                    var ex={
                        name:match.name,
                        team:match.homeTeam,
                        goals:1
                    };
                    assist.push(ex);
                }
            }
            else{
                for(var i=0;i<assist.length;i++){
                    if((assist[i].name===match.name)&&(assist[i].team===match.awayTeam)){
                        assist[i].goals+=1;
                        flagA=true;
                    }
                }
                if(flagA===false){
                    var ex={
                        name:match.name,
                        team:match.awayTeam,
                        goals:1
                    };
                    assist.push(ex);
                }
            }
            player.mostAssist=assist;
            sta.player=player;
            collection.update({"value":"Stats"},{$set:{"data":sta}});

            callback();

        },100)
    }
    else if(match.type==="redCard"){
        console.log("stats update redCard",match);

        var st=collection.find({"value":"Stats"});
        var stats=[];
        st.forEach(function (result) {
            stats.push(result);
        });
        setTimeout(function () {
            var sta=stats[0].data;
            var player=sta.player;
            var redCard=player.redCard;
            var flagH=false;
            var flagA=false;
            if(match.team==="home"){
                for(var i=0;i<redCard.length;i++){
                    if((redCard[i].name===match.name)&&(redCard[i].team===match.homeTeam)){
                        redCard[i].number+=1;
                        flagH=true;
                        break;
                    }
                }
                if(flagH===false){
                    var ex={
                        name:match.name,
                        team:match.homeTeam,
                        number:1
                    };
                    redCard.push(ex);
                }
            }
            else{
                for(var i=0;i<redCard.length;i++){
                    if((redCard[i].name===match.name)&&(redCard[i].team===match.awayTeam)){
                        redCard[i].number+=1;
                        flagA=true;
                        break;
                    }
                }
                if(flagA===false){
                    var ex={
                        name:match.name,
                        team:match.awayTeam,
                        number:1
                    };
                    redCard.push(ex);
                }
            }

            player.redCard=redCard;
            var team=sta.team;
            var redCard=team.redCard;
            flagH=false;
            flagA=false;
            if(match.team==="home"){
                for(var i=0;i<redCard.length;i++){
                    if(redCard[i].team===match.homeTeam){
                        redCard[i].number+=1;
                        flagH=true;
                        break;
                    }
                }
                if(flagH===false){
                    var ex={
                        team:match.homeTeam,
                        number:1
                    };
                    redCard.push(ex);
                }
            }
            else{
                for(var i=0;i<redCard.length;i++){
                    if(redCard[i].team===match.awayTeam){
                        redCard[i].number+=1;
                        flagA=true;
                        break;
                    }
                }
                if(flagA===false){
                    var ex={
                        team:match.awayTeam,
                        number:1
                    };
                    redCard.push(ex);
                }
            }
            team.redCard=redCard;
            sta.player=player;
            sta.team=team;

            collection.update({"value":"Stats"},{$set:{"data":sta}});


            callback();

        },100)
    }
    else{
        callback();
    }



};






//----------------------------------------------------------------------------------------

//get all data-----------------------------------------------------------------------------
exports.getData=function (callback) {

    MongoClient.connect(mongodbUrl, function (err, db) {
        var collection = db.collection('newfifa');
        // console.log(collection);
        var data=collection.find();
        var d=[];
        data.forEach(function (result) {
            // console.log(result);
            d.push(result);
        });
        setTimeout(function () {
            callback(d);
        },800);

    });
};


//---------------------------------------------------------------------------------------


exports.getDataTeam=function (callback) {

    MongoClient.connect(mongodbUrl, function (err, db) {
        var collection = db.collection('newfifa');
        // console.log(collection);
        var data=collection.find({value:"teams"});
        var d=[];
        data.forEach(function (result) {
            d.push(result);
            // console.log("reslut",result);
        });
        setTimeout(function () {
            console.log("download",d);
            callback(d);
        },1500);

    });
};

exports.getDataStats=function (callback) {

    MongoClient.connect(mongodbUrl, function (err, db) {
        var collection = db.collection('newfifa');
        // console.log(collection);
        var data=collection.find({value:"Stats"});
        var d=[];
        data.forEach(function (result) {
            d.push(result);
        });
        setTimeout(function () {
            callback(d);
        },800);

    });
};


exports.getDataStadium=function (callback) {

    MongoClient.connect(mongodbUrl, function (err, db) {
        var collection = db.collection('newfifa');
        // console.log(collection);
        var data=collection.find({value:"stadium"});
        // console.log(data);
        var d=[];
        data.forEach(function (result) {
            d.push(result);
        });
        setTimeout(function () {
            callback(d);
        },800);

    });
};


cleanSheetUpdate=function (match,callback,collection,type) {
    var st=collection.find({"value":"Stats"});
    var stats=[];
    st.forEach(function (result) {
        stats.push(result);
    });
    setTimeout(function () {
        var sta=stats[0].data;
        var player=sta.player;
        var cleanSheet=player.cleanSheet;
        var flagH=false;
        var flagA=false;
        console.log("sta",sta);
        console.log("cleanSheet",cleanSheet);
        if((match.away_result==0)){

            for(var i=0;i<cleanSheet.length;i++){
                if((cleanSheet[i].name===match.homeGK)&&(cleanSheet[i].team===match.homeTeam)){
                    cleanSheet[i].matches+=1;
                    flagH=true;
                    break;
                }
            }
            if(flagH===false){
                var ex={
                    name:match.homeGK,
                    team:match.homeTeam,
                    matches:1
                };
                cleanSheet.push(ex);
            }



            player.cleanSheet=cleanSheet;
            var team=sta.team;
            var cleanSheet=team.cleanSheet;
            flagH=false;
            flagA=false;

            for(var i=0;i<cleanSheet.length;i++){
                if(cleanSheet[i].team===match.homeTeam){
                    cleanSheet[i].matches+=1;
                    flagH=true;

                }
            }
            if(flagH===false){
                var ex={
                    team:match.homeTeam,
                    matches:1
                };
                cleanSheet.push(ex);
            }


            team.cleanSheet=cleanSheet;
            sta.player=player;
            sta.team=team;

            collection.update({"value":"Stats"},{$set:{"data":sta}});


        }
        if(match.home_result==0) {


            for (var i = 0; i < cleanSheet.length; i++) {
                if ((cleanSheet[i].name === match.awayGK) && (cleanSheet[i].team === match.awayTeam)) {
                    cleanSheet[i].matches += 1;
                    flagA = false;
                    break;
                }
            }
            if (flagA === false) {
                var ex = {
                    name: match.awayGK,
                    team: match.awayTeam,
                    matches: 1
                };
                cleanSheet.push(ex);
            }


            player.cleanSheet = cleanSheet;
            var team = sta.team;
            var cleanSheet = team.cleanSheet;
            flagH = false;
            flagA = false;


            for (var i = 0; i < cleanSheet.length; i++) {
                if (cleanSheet[i].team === match.awayTeam) {
                    cleanSheet[i].matches += 1;
                    flagA = true;
                    break;
                }
            }
            if (flagA === false) {
                var ex = {
                    team: match.awayTeam,
                    matches: 1
                };
                cleanSheet.push(ex);
            }

            team.cleanSheet = cleanSheet;
            sta.player = player;
            sta.team = team;

            collection.update({"value": "Stats"}, {$set: {"data": sta}});


        }
        setTimeout(function () {


            callback(type);
        },100);




    },100);
};
