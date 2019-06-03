/**
 * Created by ashishtyagi9622 on 13/6/18.
 */
app.controller('round16',function ($scope,$http,myArrayService) {

        $scope.round16Matches=myArrayService.round16Matches;

        $scope.myArray16=myArrayService.myArray16();
        console.log($scope.myArray16);

});