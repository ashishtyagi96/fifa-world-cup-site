/**
 * Created by ashishtyagi9622 on 13/6/18.
 */
app.controller('quarterFinal',function ($scope,$http,myArrayService) {

        $scope.round8Matches=myArrayService.round8Matches;

        $scope.myArray8=myArrayService.myArray8();

});