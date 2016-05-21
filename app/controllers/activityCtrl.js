(function () {
    var nuviModule = angular.module('nuviModule');
    var activityCtrl = function ($scope, activities, $routeParams,_) {

       

        var onActivitiesComplete = function (data) {
            var acts = _.where(data, { provider: $scope.provider });
            $scope.activities = acts;
            console.log(acts.length);
        };

        var onError = function (reason) {
            $scope.error = "Could not fetch the data.";
        };

        activities.getActivities()
           .then(onActivitiesComplete, onError);
        $scope.provider = $routeParams.provider;
    };
    
    nuviModule.controller("activityCtrl", activityCtrl);
}());

