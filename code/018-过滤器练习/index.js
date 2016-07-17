/**
 * Created by yezhaoyi on 16/7/9.
 */
var app = angular.module('myApp', [])
.service('productData',function () {
    return [
        {
            id : '1',
            name:"phone",
            price:5000
        },
        {
            id : '2',
            name:"mac",
            price:6000
        },
        {
            id : '3',
            name:"paid",
            price:7000
        },
        {
            id : '4',
            name:"watch",
            price:8000
        }
    ]
        
    
    
    
    
    
}).controller('productController', function($scope,productData) {
        $scope.products  = productData ;
        $scope.orderType = 'id' ;
        $scope.order='';
        $scope.changeOrder = function (orderType) {
            $scope.orderType = orderType ;
            if($scope.order===''){
                $scope.order='-';
            }else{
                $scope.order='';
            }

        }

});

