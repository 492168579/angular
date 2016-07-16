var  app = angular.module('myApp',[]);
app.controller('cartController',function ($scope) {
    $scope.cart =[
        {
            id :1000 ,
            name:'iphone6',
            quantity:10,
            price:3000
        },
        {
            id :1001 ,
            name:'iphone7',
            quantity:11,
            price:4000
        },
        {
            id :1002 ,
            name:'iphone8',
            quantity:10,
            price:5000
        }
    ];
    /**
     * 计算总价
     * @returns {number}
     */
    $scope.totalPrice = function () {
        var total = 0 ;
        angular.forEach($scope.cart,function (item) {
            total += item.quantity*item.price;
        })
        return total ;
    }
    /**
     * 计算总数
     * @returns {number}
     */
    $scope.totalQuantity =function () {
        var total = 0 ;
        angular.forEach($scope.cart,function (item) {
            total+=parseInt(item.quantity);
        })
        return total ;
    }
    /**
     * 移除一项
     * @param id
     */
    $scope.remove =function (id) {
        var index = findIndex(id);
        if(index!==-1){
            $scope.cart.splice(index,1)
        }

    }
    /**
     * 为某个产品增加一个数量
     * @param id
     */
    $scope.add = function (id) {
        var index = findIndex(id);
        if(index!==-1){
            $scope.cart[index].quantity++;
        }
    }
    /**
     * 减少数量
     * @param id
     */
    $scope.reduce = function (id) {
        var index = findIndex(id);
        if(index!==-1){
          var item = $scope.cart[index];
            if(item.quantity>1){
                --item.quantity;
            }else{
                var returnKey = confirm('确定从购物车删除?');
                if(returnKey){
                    $scope.remove(id);
                }
            }
        }
    }
    $scope.$watch('cart',function (newValue,oldValue) {
        angular.forEach(newValue ,function (item,key) {
               if(item.quantity<1){
                   var returnKey = confirm('确定从购物车删除?');
                   if(returnKey){
                       $scope.remove(item,key);
                   }else{
                       item.quantity = oldValue[key].quantity;
                   }
               }
        })
    },true);




    findIndex = function (id) {
        var index = -1 ;
        angular.forEach($scope.cart,function (item,key) {
            if(id ===item.id){
                index = key ;
                return ;
            }
        });
        return index ;

    }









});