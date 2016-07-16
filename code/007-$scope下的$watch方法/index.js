/**
 * Created by yezhaoyi on 16/7/9.
 */
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.firstName= "John";
    $scope.count = 0 ;
    $scope.data = {
        name :'zhangsan' , 
        count :10
    }
    
    
    
    //监听一个model每次改变时,触发第二个函数
    $scope.$watch('firstName',function (newVlaue , oldValue) {
          ++$scope.count;
     if($scope.count>30){
         $scope.firstName= "你是我天边最美的云彩!";
     }
     //监听一个对象,需要添加最后一个true
    $scope.watch('data',function () {
        
    },true)



    })
});

