/**
 * Created by stijn on 01-Mar-17.
 */
angular.module('listing.module', ['listing.services','listing.filters']).controller('listingCtrl', ['$scope', 'data',
    function ($scope, data) {
        "use strict";
        $scope.title = "Technology News";
        $scope.setData = function (data) {
            $scope.articles = data.articles;
            console.log($scope.articles);
        }
        data.get('article.json', $scope.setData);
        $scope.viewLimit = 1;
        $scope.viewMore = function (num) {
            $scope.viewLimit += num;
        }
        //default descending
        $scope.descending=true;

        $scope.filters = {
            qeury:"",
            tags:[
                {
                    label:"tag1",
                    selected:false
                },
                {
                    label:"tag2",
                    selected:false
                },
                {
                    label:"tag3",
                    selected:false
                },
                {
                    label:"tag4",
                    selected:false
                }
            ]
        }
    }]);