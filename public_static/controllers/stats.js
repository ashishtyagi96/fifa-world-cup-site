/**
 * Created by ashishtyagi9622 on 13/6/18.
 */
app.controller('stats',function ($scope,$http) {
    $http.get("/getStats").then(function (response) {

        var teams=[];
        var flags=[];
        var tableVal=[];
        // console.log("heelo");
        var data=response.data[0].data;
        // console.log("score",data);

        var topScorer=data.player.topScorer;
        var mostAssist=data.player.mostAssist;
        var cleanSheet=data.player.cleanSheet;
        var redCards=data.player.redCard;
        $scope.topScorer=topScorer;
        $scope.mostAssist=mostAssist;
        $scope.cleanSheet=cleanSheet;

        $scope.redCard=redCards;
        var goal=data.team.goal;
        $scope.goal=goal;
        var cleanSheetT=data.team.cleanSheet;
        $scope.cleanSheetT=cleanSheetT;
        var redCardT=data.team.redCard;
        $scope.redCardT=redCardT;
        // console.log(response);
    });

});