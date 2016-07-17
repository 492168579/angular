/**
 * Created by yezhaoyi on 16/7/9.
 */
var app = angular.module('myApp', [],function ($filterProvider,$provide,$controllerProvider) {
    $filterProvider.register('filterAge',function () {
        
    });
    $provide.service('Data',function () {
        return [
            {
                name :'张三',
                age  :30,
                city :'北京'
            },
            {
                name :'李四',
                age  :15,
                city :'上海'
            }
        ]
    });
    $filterProvider.register('filterAge',function () {
        return function (obj) {
            console.log("obj:"+obj);
            var newObj = [];
            angular.forEach(obj,function (o) {
                if(o.age>20){
                    newObj.push(o);
                }
            });
            return newObj ;
        }
    });
    $controllerProvider.register('myCtrl',function ($scope,Data) {
        $scope.data = Data ;
    });
    // module.filter
}).filter('filterCity',function () {
    return function (obj) {
        console.log("obj:"+obj);
        var newObj = [];
        angular.forEach(obj,function (o) {
            if(o.city ==='北京'){
                newObj.push(o);
            }
        });
        return newObj ;
    }
});
app.controller('myCtrl', function($scope) {
    $scope.firstName= "John";
});

