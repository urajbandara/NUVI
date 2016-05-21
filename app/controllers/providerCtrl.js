(function () {
    var nuviModule = angular.module('nuviModule');
    var providerCtrl = function ($scope, activities,_) {



        var onProviderComplete = function (data) {
            var providers = [];
            var counts = _.countBy(data, 'provider');
            var providersName = _.keys(counts);
            for (var i = 0; i < providersName.length; i++) {
                providers.push({ name: providersName[i], count: counts[providersName[i]] })
            }
            $scope.greeting = providers;
            console.log(counts);
            console.log(data.length)
        };

        var onError = function (reason) {
            $scope.error = "Could not fetch the data.";
        };

        activities.getActivities()
           .then(onProviderComplete, onError);
    };

    nuviModule.controller("providerCtrl", providerCtrl);
}());