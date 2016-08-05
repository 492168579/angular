/**
 * Created by yezhaoyi on 16/7/9.
 */
var app = angular.module('myApp', [],function () {

 }).controller('firstController',function ($scope) {
    $scope.hobbies =[
        {
         id:1,
         name:"足球"
       },
       {
        id:2,
        name:"篮球"
       },
       {
        id:3,
        name:"乒乓球"
       }
    ];
    $scope.data = {
      hobbies:[1,2]
    };
    $scope.toggleHobbySelection = function (id) {
      var index = $scope.data.hobbies.indexOf(id);
      if(index === -1){
       $scope.data.hobbies.push(id);
      }else{
       $scope.data.hobbies.splice(index,1);
      }
     console.log($scope.data.hobbies);
    }
});
   






