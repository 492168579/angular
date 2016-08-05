/**
 * Created by yezhaoyi on 16/7/9.
 */
var app = angular.module('myApp', [],['$compileProvider',function ($compileProvider) {
    $compileProvider.directive('customTags',function () {
        return{
            restrict:'EC',
            template:'<div>custom-tags-html</div>'
        }
        
    })
    
}]);





