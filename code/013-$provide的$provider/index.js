/**
 * Created by yezhaoyi on 16/7/9.
 */
var app = angular.module('myApp', [],function ($provide) {
    //自定义服务
    $provide.provider('CustomerService',function () {
        this.$get = function () {
            return {
                message:'CustomerService message'
            }
        }
    });
});
app.controller('myCtrl', function($scope,CustomerService) {
    $scope.firstName= "John";
    console.log("CustomerService:"+CustomerService.message)
});

