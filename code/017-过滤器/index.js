var  app = angular.module('myApp',[]);
app.controller('firstController',function ($scope,$filter) {
    $scope.today = new Date();
    $scope.name ='Hello World';
    $scope.city =[
        {
            name :"上海" ,
            py:"shanghai"
        },
        {
            name :"北京 ",
            py:"beijinag"
        },
        {
            name :"广州" ,
            py:"guangzhou"
        }
    ];
    var  jsonString = $filter('json')($scope.city);
    console.log("jsonString:"+jsonString);
    $scope.checkName = function (obj) {
        console.log("obj:"+obj);
        if(obj.py.indexOf('h') === -1){
            return false;
        }else{
            return  true ;
        }

    }

})
