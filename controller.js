var app = angular.module("myApp", ["ngRoute"]);
app.config(["$routeProvider",function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "index.html"
        })
        .when("/formInfo", {
            templateUrl: "formInfo.html"
        })
        .when("/summary", {
            templateUrl: "summary.html"
        })
        .when("/register", {
            templateUrl: "register.html"
        })
        .when("/purpose", {
            templateUrl: "purpose.html"
        })
}]);
app.controller('myCtrl',["$scope","$window", function ($scope, $window) {
    $scope.goToFormInfo = function (purpose) {
        //  $localStorage.purpose = purpose;
        $window.location = "/formInfo";
    }

    $scope.goToSummary = function () {
        $window.location = "/summary";
    }

    $scope.goToPurpose = function () {
        $window.location = "/purpose";
    }

    $scope.goToRegis = function () {
        $window.location = "/register";
    }
    $scope.goToIndex = function () {
        $window.location = "/";
    }

    $scope.close = function () {
        $window.close();
    }

    $scope.back = function () {
    }
}]);
