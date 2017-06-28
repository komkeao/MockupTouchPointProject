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
        $window.location = "formInfo.html";
    }
    $scope.init = function () {
        if($window.localStorage.getItem("firstname")=="undefined"||$window.localStorage.getItem("lastname")==undefined||$window.localStorage.getItem("lastname")=="undefined"){
            $scope.user ="นายแสงดาว สาวตะวัน";
        }else {
            $scope.user =$window.localStorage.getItem("firstname")+" "+$window.localStorage.getItem("lastname");
        }
        $scope.recover =$window.localStorage.getItem("recover")
        $scope.time=$window.localStorage.getItem("timeRecover")
        $scope.bath=($window.localStorage.getItem("timeRecover")/12)*10000
        $scope.limit_recover =$window.localStorage.getItem("recover")
        $scope.limit_time=$window.localStorage.getItem("timeRecover")
        $scope.limit_bath=($window.localStorage.getItem("timeRecover")/12)*10000
    };
    $scope.goToSummary = function () {
        $window.localStorage.setItem("salary",$scope.salary);
        $window.localStorage.setItem("payment",$scope.payment);
        $window.localStorage.setItem("Debt",$scope.Debt);
        $window.localStorage.setItem("recover",$scope.recover);
        $window.localStorage.setItem("phone",$scope.phone);
        $window.localStorage.setItem("timeRecover",$scope.timeRecover);
        $window.location = "summary.html";
    }

    $scope.goToPurpose = function () {
        $window.localStorage.setItem("firstname",$scope.firstname);
        $window.localStorage.setItem("lastname",$scope.lastname);
        $window.localStorage.setItem("age",$scope.age);
        $window.localStorage.setItem("job",$scope.job);
        $window.localStorage.setItem("phone",$scope.phone);
        $window.localStorage.setItem("time",$scope.time);
        $window.localStorage.setItem("email",$scope.email);
        $window.location = "purpose.html";
    }

    $scope.goToRegis = function () {
        $window.location = "register.html";
    }
    $scope.goToIndex = function () {
        $window.location = "index.html";
    }

    $scope.close = function () {
        $window.close();
    }

    $scope.back = function () {
    }
}]);
