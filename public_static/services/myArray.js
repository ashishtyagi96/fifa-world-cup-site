/**
 * Created by ashishtyagi9622 on 21/6/18.
 */
app.factory('myArrayService',function ($http) {
    var details={};
    var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    details.group_myArray=function () {
        myArray = [];
        $http.get("/get").then(function (response) {
            var groupMatches = [];
            var matches = response.data[5].data;
            for (var i = 97; i <= 104; i++) {
                var c = String.fromCharCode(i);
                var b = matches[c].matches;
                for (var j = 0; j < b.length; j++) {
                    groupMatches.push(b[j]);
                }
            }
            groupMatches = groupMatches.sort(function (a, b) {
                return parseFloat(a.name) - parseFloat(b.name);
            });
            var matchDay = [];
            var groupMatchDetails = [];
            for (var i = 0; i < groupMatches.length; i++) {
                var d = new Date(groupMatches[i].date);
                var c = days[d.getDay()] + " " + d.getDate() + " " + monthNames[d.getMonth()] + " " + d.getFullYear();
                matchDay.push(c);
                var obj = {
                    date: c,
                    details: groupMatches[i]
                };
                groupMatchDetails.push(obj);
            }
            // $scope.groupStageMatches=groupMatches;//add groupStageMatches here

            details.groupStageMatches = groupMatches;
            var group = {};
            for (var i = 0; i < groupMatchDetails.length; i++) {
                var groupNamen = groupMatchDetails[i].date;
                if (!group[groupNamen]) {
                    group[groupNamen] = [];
                }
                group[groupNamen].push(groupMatchDetails[i].details);
            }

            for (var groupNamen in group) {
                myArray.push({group: groupNamen, dayDate: group[groupNamen]});
            }
            // $scope.myArray=myArray;  //add add group array

        });
        return myArray;
    };
    details.myArray16=function () {
        myArray = [];
        $http.get("/get").then(function (response) {
            var r16Matches=[];
            matches=response.data[4].data.round_16.matches;
            for(var j=0;j<matches.length;j++){
                r16Matches.push(matches[j]);
            }
            details.round16Matches=r16Matches;
            // $scope.round16Matches=r16Matches;

            var matchDay16=[];
            var r16MatchDetails=[];
            for(var i=0;i<r16Matches.length;i++){
                var d=new Date(r16Matches[i].date);
                var c=days[d.getDay()]+" " + d.getDate()+" " +monthNames[d.getMonth()]+" "+d.getFullYear();
                matchDay16.push(c);
                var obj={
                    date:c,
                    details:r16Matches[i]
                };
                r16MatchDetails.push(obj);
            }

            var group = {};
            for (var i = 0; i < r16MatchDetails.length; i++) {
                var groupNamen = r16MatchDetails[i].date;
                if (!group[groupNamen]) {
                    group[groupNamen] = [];
                }
                group[groupNamen].push(r16MatchDetails[i].details);
            }

            for (var groupNamen in group) {
                myArray.push({group: groupNamen, dayDate: group[groupNamen]});
            }
            // console.log(myArray);
            // $scope.myArray16=myArray;

        });

        return myArray;

    };
    details.myArray8=function () {
        myArray = [];
        $http.get('get').then(function (response) {
            var r8Matches=[];
            matches=response.data[4].data.round_8.matches;
            for(var j=0;j<matches.length;j++){
                r8Matches.push(matches[j]);
            }
            // $scope.round8Matches=r8Matches;

            details.round8Matches=r8Matches;
            var matchDay8=[];
            var r8MatchDetails=[];
            for(var i=0;i<r8Matches.length;i++){
                var d=new Date(r8Matches[i].date);
                var c=days[d.getDay()]+" " + d.getDate()+" " +monthNames[d.getMonth()]+" "+d.getFullYear();
                matchDay8.push(c);
                var obj={
                    date:c,
                    details:r8Matches[i]
                };
                r8MatchDetails.push(obj);
            }

            var group = {};
            for (var i = 0; i < r8MatchDetails.length; i++) {
                var groupNamen = r8MatchDetails[i].date;
                if (!group[groupNamen]) {
                    group[groupNamen] = [];
                }
                group[groupNamen].push(r8MatchDetails[i].details);
            }

            for (var groupNamen in group) {
                myArray.push({group: groupNamen, dayDate: group[groupNamen]});
            }

        });
        return myArray;
    };
    details.myArray4=function () {
        myArray = [];
        $http.get('get').then(function (response) {
            var r4Matches=[];
            matches=response.data[4].data.round_4.matches;
            for(var j=0;j<matches.length;j++){
                r4Matches.push(matches[j]);
            }
            // $scope.round4Matches=r4Matches;

            details.round4Matches=r4Matches;
            var matchDay4=[];
            var r4MatchDetails=[];
            for(var i=0;i<r4Matches.length;i++){
                var d=new Date(r4Matches[i].date);
                var c=days[d.getDay()]+" " + d.getDate()+" " +monthNames[d.getMonth()]+" "+d.getFullYear();
                matchDay4.push(c);
                var obj={
                    date:c,
                    details:r4Matches[i]
                };
                r4MatchDetails.push(obj);
            }

            var group = {};
            for (var i = 0; i < r4MatchDetails.length; i++) {
                var groupNamen = r4MatchDetails[i].date;
                if (!group[groupNamen]) {
                    group[groupNamen] = [];
                }
                group[groupNamen].push(r4MatchDetails[i].details);
            }

            for (var groupNamen in group) {
                myArray.push({group: groupNamen, dayDate: group[groupNamen]});
            }


        });
        return myArray;
    };
    details.myArray2L=function () {
        myArray = [];
        $http.get('get').then(function (response) {
            var r2LMatches=[];
            matches=response.data[4].data.round_2_loser.matches;
            for(var j=0;j<matches.length;j++){
                r2LMatches.push(matches[j]);
            }
            // $scope.round2LMatches=r2LMatches;

            details.round2LMatches=r2LMatches;
            var matchDay2L=[];
            var r2LMatchDetails=[];
            for(var i=0;i<r2LMatches.length;i++){
                var d=new Date(r2LMatches[i].date);
                var c=days[d.getDay()]+" " + d.getDate()+" " +monthNames[d.getMonth()]+" "+d.getFullYear();
                matchDay2L.push(c);
                var obj={
                    date:c,
                    details:r2LMatches[i]
                };
                r2LMatchDetails.push(obj);
            }
            var group = {};
            for (var i = 0; i < r2LMatchDetails.length; i++) {
                var groupNamen = r2LMatchDetails[i].date;
                if (!group[groupNamen]) {
                    group[groupNamen] = [];
                }
                group[groupNamen].push(r2LMatchDetails[i].details);
            }

            for (var groupNamen in group) {
                myArray.push({group: groupNamen, dayDate: group[groupNamen]});
            }


        });
        return myArray;
    };
    details.myArray2=function () {
        myArray = [];
        $http.get('get').then(function (response) {
            var r2Matches=[];
            matches=response.data[4].data.round_2.matches;
            for(var j=0;j<matches.length;j++){
                r2Matches.push(matches[j]);
            }
            // $scope.groupStageMatches=groupMatches;

            // $scope.round2Matches=r2Matches;

            details.round2LMatches=r2Matches;

            var matchDay2=[];
            var r2MatchDetails=[];
            for(var i=0;i<r2Matches.length;i++){
                var d=new Date(r2Matches[i].date);
                var c=days[d.getDay()]+" " + d.getDate()+" " +monthNames[d.getMonth()]+" "+d.getFullYear();
                matchDay2.push(c);
                var obj={
                    date:c,
                    details:r2Matches[i]
                };
                r2MatchDetails.push(obj);
            }

            var group = {};
            for (var i = 0; i < r2MatchDetails.length; i++) {
                var groupNamen = r2MatchDetails[i].date;
                if (!group[groupNamen]) {
                    group[groupNamen] = [];
                }
                group[groupNamen].push(r2MatchDetails[i].details);
            }

            for (var groupNamen in group) {
                myArray.push({group: groupNamen, dayDate: group[groupNamen]});
            }


        });
        return myArray;
    };


    return details;
});