(function () {
    var activities = function ($http) {
        var getActivities = function () {
            return $http.get('https://nuvi-challenge.herokuapp.com/activities')
                    .then(function (response) {
                        return response.data;
                    });
        };

        return {
            getActivities:getActivities
        };
    };
    var module = angular.module("nuviModule");
    module.factory("activities", activities);
}());