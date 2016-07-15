/**
 * Created by yezhaoyi on 16/7/9.
 */
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.nowDate= new Date();
});

