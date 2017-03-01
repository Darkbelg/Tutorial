angular.module('listing.services',[])
    .service('data',['$http',function ($http) {
        "use strict"
        this.get=function (url, callback) {
            $http({method:'GET',url:url}).success(function (data,status,headers,config) {
                //this callback will be called asynchronously
                //when the response is available
                callback(data);
            }).error(function (data, status, headers, config) {
                //called ascynchronously if an error occurs
                //or server returns response with a error status.
                throw "No data from " + url;
            });

        };

        this.post = function (url, callback, obj) {
            $http({method:'POST',url:url,data:obj}).success(function (data, status, headers, config) {
                //this callback will be called asynchronously
                //when the response is available
                callback(data);
            }).error(function (data, status, headers, config) {
                //called asychronously if an error occurs
                //or server returns response with an error status.
                throw "No data returned from " + url;
            })
        }
    }]);