/**
 *
 * Created by ashishtyagi9622 on 12/6/18.
 */

app.controller('ctrl',function ($scope,$http,$route,$interval,myArrayService) {



$scope.r16Done=true;
$scope.groupStageDone=true;
    $scope.finalSubmit=function () {
        var home_squad=angular.element(document.querySelectorAll("div.row2.playerList"));
        var away_squad=angular.element(document.querySelectorAll("div.row5.playerList"));
        var awa=$scope.teamsName[$scope.currentMatch.away_team];
        var hom=$scope.teamsName[$scope.currentMatch.home_team];
        if((home_squad.length===11)&&(away_squad.length===11)){
            console.log("All selected");
            var homeSquad=[];

            for(var i=0;i<home_squad.length;i++){
                var name=home_squad[i].childNodes[0].textContent;
                var number=home_squad[i].childNodes[2].textContent;
                var obj={
                    name:name,
                    number:number
                };
                homeSquad[i]=obj;
            }
            var awaySquad=[];
            for(var i=0;i<away_squad.length;i++){
                var name=away_squad[i].childNodes[0].textContent;
                var number=away_squad[i].childNodes[2].textContent;
                var obj={
                    name:number,
                    number:name
                };
                awaySquad[i]=obj;
            }
            // console.log(homeSquad,awaySquad);
            // var ho=JSON.stringify(homeSquad);
            // var aw=JSON.stringify(awaySquad);
            var away_result=$scope.changedAway;
            var home_result=$scope.changedHome;
            var matchName=$scope.currentMatch.name;
            $.ajax({
                type:'POST',
                url:'http://localhost:4000/updateSquadAll',
                contentType:'application/json',
                data:JSON.stringify({
                    home_squad:homeSquad,
                    away_squad:awaySquad,
                    away_result:away_result,
                    home_result:home_result,
                    matchName:matchName,
                    homeGK:$scope.homeGoalkeeper,
                    awayGK:$scope.awayGoalkeeper,
                    homeTeam:hom,
                    awayTeam:awa,
                    homePenalty:$scope.changedHomeP,
                    awayPenalty:$scope.changedAwayP
                }),
                success:function (data) {
                    var type=data.type;
                    console.log(type);
                    console.log("return from squad update",parseInt(type));
                    if(type>0&&type<49){
                        $scope.toggleSide= {
                            groupCon: true,
                            r16Con: false,
                            quarterCon: false,
                            semiCon: false,
                            thirdCon: false,
                            finalCon: false,
                            matchDetails:false
                        }    ;
                        if(type==48){
                            $scope.groupStageDone=true;
                            $.ajax({
                                type:'POST',
                                url:'http://localhost:4000/updateGroup',
                                data:{name:"done"

                                },
                                success:function (data) {
                                    console.log("return to updateScorer ",data);


                                }
                            });
                        }
                        $scope.toggleSide1.matchDetails=true;
                        $route.reload('/admin');
                    }
                    else if(type>48&&type<57){
                        console.log("type between");

                        location.reload('/admin');
                        $scope.toggleSide= {
                            groupCon: false,
                            r16Con: true,
                            quarterCon: false,
                            semiCon: false,
                            thirdCon: false,
                            finalCon: false,
                            matchDetails:false
                        }    ;
                        $scope.toggleSide1= {
                            groupCon: false,
                            r16Con: true,
                            quarterCon: false,
                            semiCon: false,
                            thirdCon: false,
                            finalCon: false,
                            matchDetails:false
                        }    ;

                    }
                    else if(type>56&&type<61){
                        $scope.toggleSide= {
                            groupCon: false,
                            r16Con: false,
                            quarterCon: true,
                            semiCon: false,
                            thirdCon: false,
                            finalCon: false,
                            matchDetails:false
                        }    ;
                        $scope.toggleSide1.matchDetails=true;
                        location.reload();

                    }
                    else if(type==61||type==62){
                        $scope.toggleSide= {
                            groupCon: false,
                            r16Con: false,
                            quarterCon: false,
                            semiCon: true,
                            thirdCon: false,
                            finalCon: false,
                            matchDetails:false
                        }    ;
                        $scope.toggleSide1.matchDetails=true;
                        location.reload();

                    }
                    else if(type==63){
                        $scope.toggleSide= {
                            groupCon: false,
                            r16Con: false,
                            quarterCon: false,
                            semiCon: false,
                            thirdCon: true,
                            finalCon: false,
                            matchDetails:false
                        }    ;
                        $scope.toggleSide1.matchDetails=true;
                        location.reload();

                    }
                    else{
                        $scope.toggleSide= {
                            groupCon: false,
                            r16Con: false,
                            quarterCon: false,
                            semiCon: false,
                            thirdCon: false,
                            finalCon: true,
                            matchDetails:false
                        }    ;
                        $scope.toggleSide1.matchDetails=true;
                        location.reload();

                    }



                }
            })





        }
        else{
            $('.errorMessage')[0].style.visibility='visible';
            setTimeout(function () {
                $('.errorMessage')[0].style.visibility='hidden';
            },2000);
        }
        // console.log(home_squad,away_squad);
    };

    $scope.addingUpdatePersonal=function (home,away,type) {
        console.log("adding");
        // console.log($scope.currentMatch);
                // console.log(home_squad,away_squad);
        var  e = angular.element(document.querySelectorAll("div.updateOption > select"))[0].value;
        // console.log(e[0].value);
        var c= angular.element(document.querySelectorAll("div.updateTime > textarea"))[0].value+"'";
        // console.log(c);
        // $scope.currentMatch.home_result=home;
        // $scope.currentMatch.away_result=away;
        // $scope.currentMatch.finished=true;
        // var home_squad=angular.element(document.querySelectorAll("div.row2.playerList"));
        // var away_squad=angular.element(document.querySelectorAll("div.row5.playerList"));

        // console.log("current match",$scope.currentMatch);
        // console.log(home,away);
        var n=$scope.currentPlayerName;
        var matchName=$scope.currentMatch.name;
        var awa=$scope.teamsName[$scope.currentMatch.away_team];
        var hom=$scope.teamsName[$scope.currentMatch.home_team];
        if((e==="goal")||(e==="ownGoal")){
            $.ajax({
                type:'POST',
                url:'http://localhost:4000/updateScorer',
                data:{
                    name:n,
                    time:c,
                    type:e,
                    matchName:matchName,
                    team:type,
                    homeTeam:hom,
                    awayTeam:awa
                },
                success:function (data) {
                    console.log("return to updateScorer ",data);

                        $('.popBox')[0].style.display="none";

                        $('.popBox1')[0].style.display="none";

                }
            });

        }
        else if(e==="assist"){
            $.ajax({
                type:'POST',
                url:'http://localhost:4000/updateAssist',
                data:{
                    name:n,
                    time:c,
                    type:e,
                    matchName:matchName,
                    team:type,
                    homeTeam:hom,
                    awayTeam:awa
                },
                success:function (data) {
                    console.log("return to updateAssist ",data);
                    $('.popBox')[0].style.display="none";

                    $('.popBox1')[0].style.display="none";
                }
            });
        }
        else{
            $.ajax({
                type:'POST',
                url:'http://localhost:4000/updateRedCards',
                data:{
                    name:n,
                    time:c,
                    type:e,
                    matchName:matchName,
                    team:type,
                    homeTeam:hom,
                    awayTeam:awa
                },
                success:function (data) {
                    console.log("return to updateRedCard",data);
                    $('.popBox')[0].style.display="none";

                    $('.popBox1')[0].style.display="none";
                }
            });
        }




    };


    $scope.cancelPop=function () {
        $('.popBox')[0].style.display="none";
    };
    $scope.cancelPop1=function () {
        $('.popBox1')[0].style.display="none";
    };
    $scope.updateGoal=function () {
        $scope.currentPlayerName=this.x[2];
        // console.log(this.x[2]);
        $('.popBox')[0].style.display="block";
    };
    $scope.updateGoal1=function () {
        $scope.currentPlayerName=this.x[2];
        // console.log(this.x[2]);
        $('.popBox1')[0].style.display="block";
    };

    // $interval(checkSquad_home,6000);
    // $interval(checkSquad_away,6000);
    $scope.addDetails=function () {
        console.log($scope.currentMatch);
        $scope.vs=!$scope.vs;


    };
    $scope.clicking_now=function () {
        // console.log("dragging");
    };
    $scope.changeDetailsP=function (team,value) {
        if(value!==""){
            // console.log("change happening");
            if(team==="home"){
                $scope.changedHomeP=value;
            }
            else{
                $scope.changedAwayP=value;
            }
        }
    };
    $scope.changeDetails=function (team,value) {

        if(value!==""){
            // console.log("change happening");
            if(team==="home"){
                $scope.changedHome=value;
            }
            else{
                $scope.changedAway=value;
            }
        }
        if(($scope.changedHome==$scope.changedAway)&&($scope.changedHome!=null)){
            $('div.penaltyAdmin')[0].style.display="block";
        }
    };

    //adding player home -----------------------------------------------------------


    playerSelect1=function () {
        // console.log("yeyeyey");
        $(".row2").removeClass("selected");
        var index=$scope.addPlayerIndex;
        var t=$scope.addPlayerType;
        if(t==="Defender"){
            angular.element(document.querySelectorAll("div.defender > div.row2"))[index].className+=" playerList";
        }
        else if(t==="Midfielder"){
            angular.element(document.querySelectorAll("div.midfielder > div.row2"))[index].className+=" playerList";
        }
        else if(t==="Forward"){
            angular.element(document.querySelectorAll("div.forward > div.row2"))[index].className+=" playerList";
        }
        else{
            angular.element(document.querySelectorAll("div.goalkeeper > div.row2"))[index].className+=" playerList";

        }

    };

    $scope.playerSelect=function (x) {
        $(".row2").removeClass("selected");
        var index=this.$index;
        var t=this.x[1];
        var v="";
        if(t==="Defender"){
            angular.element(document.querySelectorAll("div.defender > div.row2"))[this.$index].className+=" selected";
            v="Defender";
        }
        else if(t==="Midfielder"){
            angular.element(document.querySelectorAll("div.midfielder > div.row2"))[this.$index].className+=" selected";
            v="Midfielder";
        }
        else if(t==="Forward"){
            angular.element(document.querySelectorAll("div.forward > div.row2"))[this.$index].className+=" selected";
            v="Forward";
        }
        else{
            angular.element(document.querySelectorAll("div.goalkeeper > div.row2"))[this.$index].className+=" selected";
            v="Goalkeeper";
            $scope.homeGoalkeeper=x[2];
        }


        $scope.addPlayer=x;
        // console.log("new",x);
        $scope.addPlayerIndex=this.$index;
        $scope.addPlayerType=v;

    };
    $scope.addingPlayer=function (val,x) {


        if(x!==undefined){
            // console.log(team);
            // console.log("helllle",x);
            // console.log(this);
            var c="div."+val+" > div.circlePlayer";
            // console.log(c);
            angular.element(document.querySelectorAll(c)).addClass("done");
            angular.element(document.querySelectorAll(c))[0].innerHTML="";
            angular.element(document.querySelectorAll(c))[0].innerHTML="<div class='settingNumber'>"+x[0]+"</div>"
            playerSelect1();
        }

    };

    //-----------------------------------------------------------------------

    //adding player away team

    playerSelect2_n=function () {
        // console.log("yeyeyey");
        $(".row5").removeClass("selected");
        var index=$scope.addPlayerIndex1;
        var t=$scope.addPlayerType1;
        if(t==="Defender"){
            angular.element(document.querySelectorAll("div.defender > div.row5"))[index].className+=" playerList";
        }
        else if(t==="Midfielder"){
            angular.element(document.querySelectorAll("div.midfielder > div.row5"))[index].className+=" playerList";
        }
        else if(t==="Forward"){
            angular.element(document.querySelectorAll("div.forward > div.row5"))[index].className+=" playerList";
        }
        else{
            angular.element(document.querySelectorAll("div.goalkeeper > div.row5"))[index].className+=" playerList";

        }

    };

    $scope.playerSelect_n=function (x) {
        $(".row5").removeClass("selected");
        var index=this.$index;
        var t=this.x[1];
        var v="";
        if(t==="Defender"){
            angular.element(document.querySelectorAll("div.defender > div.row5"))[this.$index].className+=" selected";
            v="Defender";
        }
        else if(t==="Midfielder"){
            angular.element(document.querySelectorAll("div.midfielder > div.row5"))[this.$index].className+=" selected";
            v="Midfielder";
        }
        else if(t==="Forward"){
            angular.element(document.querySelectorAll("div.forward > div.row5"))[this.$index].className+=" selected";
            v="Forward";
        }
        else{
            angular.element(document.querySelectorAll("div.goalkeeper > div.row5"))[this.$index].className+=" selected";
            v="Goalkeeper";
            $scope.awayGoalkeeper=x[2];
        }


        $scope.addPlayer1=x;
        $scope.addPlayerIndex1=this.$index;
        $scope.addPlayerType1=v;

    };
    $scope.addingPlayer_n=function (val,x) {


        if(x!==undefined){
            // console.log(team);
            // console.log("helllle",x);
            // console.log(this);
            var c="div."+val+" > div.circlePlayer1";
            // console.log(c);
            angular.element(document.querySelectorAll(c)).addClass("done1");
            angular.element(document.querySelectorAll(c))[0].innerHTML="";
            angular.element(document.querySelectorAll(c))[0].innerHTML="<div class='settingNumber'>"+x[0]+"</div>"
            playerSelect2_n();
        }

    };

    //----------------------------------------------------------------------
    $scope.matchDetails=function (x,y,flag) {
        console.log("hlojojo",this);
        $scope.currentMatch=x;
        $scope.vs=x.finished;
        if(x.name>0&&x.name<49){
            $scope.toggleSide= {
                groupCon: false,
                r16Con: false,
                quarterCon: false,
                semiCon: false,
                thirdCon: false,
                finalCon: false,
                matchDetails:true
            }    ;
            $scope.toggleSide1= {
                groupCon: true,
                r16Con: false,
                quarterCon: false,
                semiCon: false,
                thirdCon: false,
                finalCon: false
            }    ;
        }
        else if(x.name>48&&x.name<57){
            $scope.toggleSide= {
                groupCon: false,
                r16Con: false,
                quarterCon: false,
                semiCon: false,
                thirdCon: false,
                finalCon: false,
                matchDetails:true
            }    ;
            $scope.toggleSide1= {
                groupCon: false,
                r16Con: true,
                quarterCon: false,
                semiCon: false,
                thirdCon: false,
                finalCon: false
            }    ;
        }
        else if(x.name>56&&x.name<61){
            $scope.toggleSide= {
                groupCon: false,
                r16Con: false,
                quarterCon: false,
                semiCon: false,
                thirdCon: false,
                finalCon: false,
                matchDetails:true
            }    ;
            $scope.toggleSide1= {
                groupCon: false,
                r16Con: false,
                quarterCon: true,
                semiCon: false,
                thirdCon: false,
                finalCon: false
            }    ;
        }
        else if(x.name==61||x.name==62){
            $scope.toggleSide= {
                groupCon: false,
                r16Con: false,
                quarterCon: false,
                semiCon: false,
                thirdCon: false,
                finalCon: false,
                matchDetails:true
            }    ;
            $scope.toggleSide1= {
                groupCon: false,
                r16Con: false,
                quarterCon: false,
                semiCon: true,
                thirdCon: false,
                finalCon: false
            }    ;
        }
        else if(x.name==63){
            $scope.toggleSide= {
                groupCon: false,
                r16Con: false,
                quarterCon: false,
                semiCon: false,
                thirdCon: false,
                finalCon: false,
                matchDetails:true
            }    ;
            $scope.toggleSide1= {
                groupCon: false,
                r16Con: false,
                quarterCon: false,
                semiCon: false,
                thirdCon: true,
                finalCon: false
            }    ;
        }
        else if(x.name==64){
            $scope.toggleSide= {
                groupCon: false,
                r16Con: false,
                quarterCon: false,
                semiCon: false,
                thirdCon: false,
                finalCon: false,
                matchDetails:true
            }    ;
            $scope.toggleSide1= {
                groupCon: false,
                r16Con: false,
                quarterCon: false,
                semiCon: false,
                thirdCon: false,
                finalCon: true
            }    ;
        }



        var h=x.home_team;
        var a=x.away_team;
        $scope.home=x.home_result;
        $scope.away=x.away_result;

        $scope.home_flag=flag[h-1];
        $scope.away_flag=flag[a-1];
        $scope.home_name=h;
        $scope.away_name=a;

        if(x.finished===true){

            var playing11_home=x.home_squad.squad;
            var playing11_away=x.away_squad.squad;
            var homeScorer=x.home_squad.scorer;
            var awayScorer=x.away_squad.scorer;
            var homeAssist=x.home_squad.assists;
            var awayAssist=x.away_squad.assists;
            var homeRedCard=x.home_squad.redCards;
            var awayRedCard=x.away_squad.redCards;



            var groupGoal = {};
            var groupOwnGoal = {};
            var homeGoal = [];
            var homeOwnGoal = [];
            for (var i = 0; i < homeScorer.length; i++) {


                var groupNamen = homeScorer[i].name;
                // console.log("hello",i,homeScorer[i].type);
                if(homeScorer[i].type==="goal"){
                    if (!groupGoal[groupNamen]) {
                        groupGoal[groupNamen] = [];
                    }
                    groupGoal[groupNamen].push(homeScorer[i].time);
                    // console.log(groupGoal);

                }
                else{

                    if (!groupOwnGoal[groupNamen]) {
                        groupOwnGoal[groupNamen] = [];
                    }
                    groupOwnGoal[groupNamen].push(homeScorer[i].time);
                    // console.log(groupOwnGoal);

                }

            }

            for(var v in groupGoal){
                homeGoal.push({name:v,time:groupGoal[v],type:'goal'})
            }
            for(var v in groupOwnGoal){
                homeOwnGoal.push({name:v,time:groupOwnGoal[v],type:'ownGoal'})
            }


            var groupGoal = {};
            var groupOwnGoal = {};
            var awayGoal = [];
            var awayOwnGoal = [];
            for (var i = 0; i < awayScorer.length; i++) {


                var groupNamen = awayScorer[i].name;

                if(awayScorer[i].type==="goal"){
                    if (!groupGoal[groupNamen]) {
                        groupGoal[groupNamen] = [];
                    }
                    groupGoal[groupNamen].push(awayScorer[i].time);

                }
                else{

                    if (!groupOwnGoal[groupNamen]) {
                        groupOwnGoal[groupNamen] = [];
                    }
                    groupOwnGoal[groupNamen].push(awayScorer[i].time);
                    // console.log(groupOwnGoal);

                }


            }

            for(var v in groupGoal){
                awayGoal.push({name:v,time:groupGoal[v],type:'goal'})
            }
            for(var v in groupOwnGoal){
                awayOwnGoal.push({name:v,time:groupOwnGoal[v],type:'ownGoal'})
            }

            console.log(homeGoal,homeOwnGoal,awayGoal,awayOwnGoal);

            console.log(homeAssist,awayAssist);
            $scope.playing11_home=playing11_home;
            $scope.playing11_away=playing11_away;
            $scope.homeScorerG=homeGoal;
            $scope.awayScorerG=awayGoal;
            $scope.homeScorerOG=homeOwnGoal;
            $scope.awayScorerOG=awayOwnGoal;
            $scope.homeAssist=homeAssist;
            $scope.awayAssist=awayAssist;
            $scope.homeRedCard=homeRedCard;
            $scope.awayRedCard=awayRedCard;

            if((homeGoal.length===0)&&(awayGoal.length===0)&&(homeOwnGoal.length===0)&&(awayOwnGoal.length===0)){
                // $('.centerLine').style.borderRight='0';
                // console.log(angular.element(document.querySelectorAll('div.centerLine')))
                $scope.showCenterLine=false;

                // $('.centerLine').style.borderLeft='0';
            }
            else{
                $scope.showCenterLine=true;
            }
            var subs_home=[];
            var subs_away=[];
            $http.get('/getTeam').then(function (response) {
                var squads=response.data[0].data;
                var squad=[];
                for(var i=0;i<squads.length;i++){
                    squad.push(squads[i].squad);
                }

                var homeSquad=squad[h-1];
                var awaySquad=squad[a-1];

                for(var i=0;i<homeSquad.length;i++){
                    var j;
                    for(j=0;j<playing11_home.length;j++){
                        if(homeSquad[i][0]==playing11_home[j].number){
                            break;
                        }
                    }
                    if(j==playing11_home.length){
                        subs_home.push({name:homeSquad[i][2],number:homeSquad[i][0]});
                    }
                }
                for(var i=0;i<awaySquad.length;i++){
                    var j;
                    for(j=0;j<playing11_away.length;j++){
                        if(awaySquad[i][0]==playing11_away[j].number){
                            break;
                        }
                    }
                    if(j==playing11_away.length){
                        subs_away.push({name:awaySquad[i][2],number:awaySquad[i][0]});
                    }
                }
                $scope.subs_home=subs_home;
                $scope.subs_away=subs_away;


            })


        }
        else if(x.finished===false){

            $scope.currentMatch=x; //for overall access of current match details
            // console.log("lol",y);
            // console.log(flag[h]);


            $http.get("/getTeam").then(function (response) {
                // console.log("get team ",response);
                if(!$scope.vs){
                    var team1=response.data[0].data;
                    $scope.playerTeamNameHome=response.data[0].data[h-1].name;
                    $scope.playerTeamNameAway=response.data[0].data[a-1].name;

                    // console.log("home team",response.data[h-1].name);
                    // console.log("away team",response.data[a-1].name);
                    var squads=[];
                    for(var i=0;i<team1.length;i++){
                        squads.push(team1[i].squad);
                    }

                    var homeGroup = squads[h-1].reduce(function (r, a) {
                        r[a[1]] = r[a[1]] || [];
                        r[a[1]].push(a);
                        return r;
                    }, Object.create(null));
                    var awayGroup = squads[a-1].reduce(function (r, a) {
                        r[a[1]] = r[a[1]] || [];
                        r[a[1]].push(a);
                        return r;
                    }, Object.create(null));
                    // console.log(homeGroup,awayGroup);
                    $scope.homeGroup=homeGroup;
                    $scope.awayGroup=awayGroup;



                }


            });
        }

    };


    $scope.backButton=function () {
        $scope.showTeam=false;
    };
    $scope.changeActive=function (index) {
        $http.get("/getTeam").then(function (response) {
            $scope.showTeam=!$scope.showTeam;
            var data=response.data[0].data;
            // console.log(data[index]);
            $scope.activeTeam=data[index];
        });
    };
    // console.log("run");
    $scope.toggleSide1= {
        groupCon: true,
        r16Con: false,
        quarterCon: false,
        semiCon: false,
        thirdCon: false,
        finalCon: false,
        matchDetails:false
    }    ;
    $scope.toggleSide= {
        groupCon: true,
        r16Con: false,
        quarterCon: false,
        semiCon: false,
        thirdCon: false,
        finalCon: false,
        matchDetails:false
    }    ;
    $scope.flipMatch=function (name) {
        $scope.toggleSide= {
            groupCon: false,
            r16Con: false,
            quarterCon: false,
            semiCon: false,
            thirdCon: false,
            finalCon: false,
            matchDetails:false
        };
        $scope.toggleSide1= {
            groupCon: false,
            r16Con: false,
            quarterCon: false,
            semiCon: false,
            thirdCon: false,
            finalCon: false,
            matchDetails:false
        };
        $scope.toggleSide[name]=true;
        $scope.toggleSide1[name]=true;
        // console.log($scope.toggleSide);

    };
    $http.get("/getTeam").then(function (response) {
        //squad loading
        //-----------------------------------------------------------------------------
        // flag names and team details of top scorer red cards
        console.log("getting",response);
        var teamsData=response.data[0].data;

        var teams=[];
        var flags=[];
        var tableVal=[];



        for(var i=0;i<teamsData.length;i++){
            teams.push(teamsData[i].name);
            flags.push(teamsData[i].flag);
            tableVal.push(teamsData[i].table);
        }
        var groups=[];
        var name_flag=[];
        for(var i=0;i<8;i++){
            var name="Group"+" "+String.fromCharCode(i+65);
            var teamName=[];
            var flagLink=[];
            var val=[];
            for(var j=i*4;j<(i*4)+4;j++){

                var ob={
                    team:teams[j],
                    flag:flags[j],
                    tableVal:tableVal[j]
                };
                val.push(ob);
                name_flag.push(ob);
            }

            var obj={
                name:name,
                val:val
            };
            groups.push(obj);
        }
        var groups1=[];
        // var tableVal1=[];
        // var tableVal2=[];
        for(var i=0;i<groups.length/2;i++){
            groups1.push(groups[i]);
            // tableVal1.push(tableVal[i]);
        }
        $scope.flags=flags;
        $scope.groups1=groups1;
        var groups2=[];
        for(var i=groups.length/2;i<groups.length;i++){
            groups2.push(groups[i]);
            // tableVal2.push(tableVal[i]);

        }
        $scope.groups2=groups2;
        // $scope.tableGroup1=tableVal1;
        // $scope.tableGroup2=tableVal2;
        $scope.name_flag=name_flag;

        //------------------------------------------------------------------------------------------



        //team names in <teamsName>
        var teams=response.data[0].data;
        var teamsName=["World Cup 2018"];

        for(var i=0;i<teams.length;i++){
            var c=teams[i].is;
            teamsName.push(teams[i].name);

        }
        $scope.teamsName=teamsName;

        //--------------------------------------------------------------------------------



    });


    $http.get("/getStadium").then(function (response) {

        //stadium names in <stadiumNames>
        var stadiumName=response.data[0].data;
        var stadiumNames=[];
        stadiumNames.push("stadiums");
        for(var i=0;i<stadiumName.length;i++){
            stadiumNames.push(stadiumName[i].name);
        }
        $scope.stadiumNames=stadiumNames;
        $scope.stadiumName=stadiumName;



    });


    // function groupStageComplete() {
    //     var a=[];
    //     var b=[];
    //     var c=[];
    //     var d=[];
    //     var e=[];
    //     var f=[];
    //     var g=[];
    //     var h=[];
    //     var winner_a;
    //     var runner_a;
    //     var winner_b;
    //     var runner_b;
    //     var winner_c;
    //     var runner_c;
    //     var winner_d;
    //     var runner_d;
    //     var winner_e;
    //     var runner_e;
    //     var winner_f;
    //     var runner_f;
    //     var winner_g;
    //     var runner_g;
    //     var winner_h;
    //     var runner_h;
    //     $http.get('/getTeam').then(function (response) {
    //         var data=response.data[0].data;
    //         var i=0;
    //
    //         for(;i<4;i++){
    //             a.push({
    //                 id:data[i].id,
    //                 table:data[i].table
    //             });
    //         }
    //         for(;i<8;i++){
    //             b.push({
    //                 id:data[i].id,
    //                 table:data[i].table
    //             });
    //         }
    //         for(;i<12;i++){
    //             c.push({
    //                 id:data[i].id,
    //                 table:data[i].table
    //             });
    //         }
    //         for(;i<16;i++){
    //             d.push({
    //                 id:data[i].id,
    //                 table:data[i].table
    //             });
    //         }
    //         for(;i<20;i++){
    //             e.push({
    //                 id:data[i].id,
    //                 table:data[i].table
    //             });
    //         }
    //         for(;i<24;i++){
    //             f.push({
    //                 id:data[i].id,
    //                 table:data[i].table
    //             });
    //         }
    //         for(;i<28;i++){
    //             g.push({
    //                 id:data[i].id,
    //                 table:data[i].table
    //             });
    //         }
    //         for(;i<32;i++){
    //             h.push({
    //                 id:data[i].id,
    //                 table:data[i].table
    //             });
    //         }
    //         a.sort(function(a, b){
    //             return b.table.points-a.table.points
    //         });
    //         a.sort(function (a,b) {
    //             return b.table.goalDifference-a.table.goalDifference
    //         });
    //
    //         b.sort(function(a, b){
    //             return b.table.points-a.table.points
    //         });
    //         b.sort(function (a,b) {
    //             return b.table.goalDifference-a.table.goalDifference
    //         });
    //         c.sort(function(a, b){
    //             return b.table.points-a.table.points
    //         });
    //         c.sort(function (a,b) {
    //             return b.table.goalDifference-a.table.goalDifference
    //         });
    //         d.sort(function(a, b){
    //             return b.table.points-a.table.points
    //         });
    //         d.sort(function (a,b) {
    //             return b.table.goalDifference-a.table.goalDifference
    //         });
    //         e.sort(function(a, b){
    //             return b.table.points-a.table.points
    //         });
    //         e.sort(function (a,b) {
    //             return b.table.goalDifference-a.table.goalDifference
    //         });
    //         f.sort(function(a, b){
    //             return b.table.points-a.table.points
    //         });
    //         f.sort(function (a,b) {
    //             return b.table.goalDifference-a.table.goalDifference
    //         });
    //         g.sort(function(a, b){
    //             return b.table.points-a.table.points
    //         });
    //         g.sort(function (a,b) {
    //             return b.table.goalDifference-a.table.goalDifference
    //         });
    //         h.sort(function(a, b){
    //             return b.table.points-a.table.points
    //         });
    //         h.sort(function (a,b) {
    //             return b.table.goalDifference-a.table.goalDifference
    //         });
    //         winner_a=a[0].id;
    //         runner_a=a[0].id;
    //         winner_b=b[0].id;
    //         runner_b=b[0].id;
    //         winner_c=c[0].id;
    //         runner_c=c[0].id;
    //         winner_d=d[0].id;
    //         runner_d=d[0].id;
    //         winner_e=e[0].id;
    //         runner_e=e[0].id;
    //         winner_f=f[0].id;
    //         runner_f=f[0].id;
    //         winner_g=g[0].id;
    //         runner_g=g[0].id;
    //         winner_h=h[0].id;
    //         runner_h=h[0].id;
    //
    //     })
    //
    //     $http.get('/get').then(function (response) {
    //
    //     })
    // }


});

