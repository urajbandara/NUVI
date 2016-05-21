(function () {
    var module = angular.module("nuviModule");
    module.factory('_', function() {
        return window._; 
    });
}());