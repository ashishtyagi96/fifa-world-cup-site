/**
 * Created by ashishtyagi9622 on 13/6/18.
 */
app.controller('timer',function ($scope,$interval) {
    $scope.timer=true;
    var updateTime=function () {
        $scope.Year="Years";
        $scope.Months="Months";
        $scope.Days="Days";
        $scope.Hours="Hours";
        $scope.Minutes="Minutes";
        var launchDate=14;
        var launchMonth=6;
        var launchYear=2018;
        var launchHour=20;
        var launchMinute=30;
        var launchD="Thur Jun 14 2018 20:30:00 GMT+0530 (IST)";
        var currentD=new Date();
        var currentDate=currentD.getDate();
        var currentMonth=currentD.getMonth()+1;
        var currentYear=currentD.getFullYear();
        var currentHour=currentD.getHours();
        var currentMinute=currentD.getMinutes();
        $scope.leftYears=Math.abs(launchYear-parseInt(currentYear));
        $scope.leftMonths=Math.abs(launchMonth-parseInt(currentMonth));
        $scope.leftDays=Math.abs(launchDate-parseInt(currentDate));
        $scope.leftMinutes=Math.abs(launchMinute-parseInt(currentMinute));
        $scope.leftHours=Math.abs(launchHour-parseInt(currentHour));
        if(launchDate<currentDate){
            $scope.timer=false;
        }
        if($scope.leftYears===1){
            $scope.Year="Year";
        }
        if($scope.leftMonths===1){
            $scope.Months="Month";
        }
        if($scope.leftDays===1){
            $scope.Days="Day";
        }
        if($scope.leftHours===1){
            $scope.Hours="Hour";
        }
        if($scope.leftMinutes===1){
            $scope.Minutes="Minute";
        }
        if(parseInt(currentHour)>launchHour){
            $scope.leftHours=Math.abs($scope.leftHours-12);

        }
        if(parseInt(currentMinute)>=30){
            $scope.leftHours=$scope.leftHours-1;
            $scope.leftMinutes=60-parseInt(currentMinute);
        }
        if(launchYear===parseInt(currentYear)){
            $scope.Year="";
            $scope.leftYears="";
        }
        if($scope.leftMonths===0){
            $scope.Months="";
            $scope.leftMonths="";
        }
        if($scope.leftDays===0){
            $scope.Days="";
            $scope.leftDays="";
        }
        if($scope.leftMinutes===0){
            $scope.Minutes="";
            $scope.leftMinutes="";
        }
        if($scope.leftHours===0){
            $scope.Hours="";
            $scope.leftHours="";
            $scope.leftDays-=1;
        }
    };
    updateTime();
    $interval(updateTime,1000);

//-----------------------------------------------------------------------------

});

