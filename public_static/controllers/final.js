/**
 * Created by ashishtyagi9622 on 13/6/18.
 */
app.controller('final',function ($scope,$http,myArrayService) {

        $scope.round2Matches=myArrayService.round2Matches;

        $scope.myArray2=myArrayService.myArray2();
});
