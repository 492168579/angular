/**
 * Created by yezhaoyi on 16/7/9.
 */
var app = angular.module('myApp', [],function ($provide) {
    //自定义工厂
    $provide.factory('CustomerFactory',function () {
        return "111";
    });
    $provide.service('CustomerService',function () {
        return {
            aa:'ss'
        }
    })

});
app.controller('myCtrl', function($scope,CustomerFactory,CustomerService) {
    $scope.firstName= "John";
    console.log("CustomerFactory:"+CustomerFactory);
    console.log("CustomerService:"+CustomerService);
});

