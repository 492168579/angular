var  app = angular.module('myApp',[]);
app.controller('firstController',function ($scope) {
    $scope.today = new Date();
})
