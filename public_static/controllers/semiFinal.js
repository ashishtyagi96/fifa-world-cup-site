/**
 * Created by ashishtyagi9622 on 13/6/18.
 */
app.controller('semiFinal',function ($scope,$http,myArrayService) {

        $scope.round4Matches=myArrayService.round4Matches;

        $scope.myArray4=myArrayService.myArray4();
});