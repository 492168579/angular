/**
 * Created by yezhaoyi on 16/7/9.
 */
var app = angular.module('myApp', []);

app.controller('firstController',function ($scope) {
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
      hobbies:[1,2],
        city:321
    };
    $scope.toggleHobbySelection = function (id) {
      var index = $scope.data.hobbies.indexOf(id);
      if(index === -1){
       $scope.data.hobbies.push(id);
      }else{
       $scope.data.hobbies.splice(index,1);
      }
     console.log($scope.data.hobbies);
    };
    $scope.cities =[
        {
            name:'上海',
            parent:0,
            id : 1
        },
        {
            name:'上海市',
            parent:1,
            id : 12
        },
        {
            name:'浦东区',
            parent:12,
            id : 123
        },
        {
            name:'浦西区',
            parent:12,
            id : 124
        },
        {
            name:'北京',
            parent:0,
            id : 2
        },
        {
            name:'北京市',
            parent:2,
            id : 21
        },
        {
            name:'大兴区',
            parent:21,
            id : 211
        },
        {
            name:'山东',
            parent:0,
            id : 3
        },
        {
            name:'济南市',
            parent:3,
            id : 31
        },
        {
            name:'泰安市',
            parent:3,
            id : 32
        },
        {
            name:'青岛市',
            parent:3,
            id : 33
        },
        {
            name:'肥城',
            parent:32,
            id : 321
        },
        {
            name:'东平',
            parent:32,
            id : 322
        },
        {
            name:'泰山区',
            parent:32,
            id : 322
        }
    ];
    this.findCityId = function  (parent) {
        var parentId  ;
        angular.forEach($scope.cities,function (city) {
            if (city.id === parent){
                parentId = city.parent ;
                return ;
            }
        });
        return parentId ;
    };



    if($scope.data.city!==undefined){
        $scope.data.area     =  this.findCityId($scope.data.city);
        $scope.data.province =  this.findCityId($scope.data.area);
    }

});
app.filter('cityFilter',function () {
    return function (data,parent) {
        console.log('data:'+data+"parent:"+parent);
        var  filterData = [] ;
        angular.forEach(data,function (obj) {
            if(obj.parent===parent){
                filterData.push(obj)
            }

        });
        return filterData;
    }
});
   






