/**
 * Created by ashishtyagi9622 on 13/6/18.
 */
app.controller('groupMatch',function ($scope,$http,myArrayService) {

        $scope.groupStageMatches=myArrayService.groupStageMatches;
        console.log("hello",myArrayService);

        $scope.myArray=myArrayService.group_myArray(); //add add group array
    console.log($scope.myArray);

});
