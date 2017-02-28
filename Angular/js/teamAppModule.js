/**
 * Created by stijn on 28-Feb-17.
 */
var teamApp = angular.module('myTeamApp', []).controller('teamCtrl', ['$scope', function ($scope) {
    $scope.pageTitle = "Team Generator";

    $scope.people = [];
    $scope.add = function (name) {
        $scope.people.push(name);
        $scope.newName = "";
        console.log($scope);

    }
    $scope.remove = function (index) {
        $scope.people.splice(index, 1);
    }


}]);


