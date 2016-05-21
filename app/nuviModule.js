(function () {
    var nuviModule = angular.module('nuviModule', ["ngRoute"]);

    nuviModule.config(function ($routeProvider) {
        $routeProvider
            .when("/provider", {
                templateUrl: "../templates/provider.html",
                controller: "providerCtrl"
            })
            .when("/activities/:provider", {
                templateUrl: "../templates/activity.html",
                controller: "activityCtrl"
            })
            .otherwise({ redirectTo: "/provider" });
    });
}());


