var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "index.html"
        })
        .when("/formInfo", {
            templateUrl : "formInfo.html"
        })
});
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope,$window) {
    $scope.goToFormInfo=function () {
        $window.location="/formInfo";
    }
});
