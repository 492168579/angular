var  app = angular.module('myApp',[])
.factory('Data',function () {
    return {
        message:'共享数据'
    }

})
.controller('firstController',function ($scope,Data) {
        //只能使用引用类型数据
        $scope.data ={
           name:'张三'
        };
        $scope.Data = Data ;
    })
.controller('secondController',function ($scope,Data) {
        $scope.data = $scope.$$prevSibling.data;
        $scope.Data = Data ;
    });
