/**
 * Created by yezhaoyi on 16/7/9.
 */
var app = angular.module('myApp', [],function () {

 })
    //隐式的依赖注入
    .controller('firstController',function ($scope) {

    })
    //显示的依赖注入,推荐使用显示依赖注入,方便代码发布
    .controller('secondController',['$scope',function (a) {
        console.log("a:"+a);
    }]);

function otherController(a) {
    console.log(a);
}
otherController.$inject=['$scope'];




