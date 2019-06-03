/**
 * Created by ashishtyagi9622 on 13/6/18.
 */
app.controller('thirdPlace',function ($scope,$http,myArrayService) {

        $scope.round2LMatches=myArrayService.round2LMatches;

        $scope.myArray2L=myArrayService.myArray2L();
});