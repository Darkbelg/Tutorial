/**
 * Created by stijn on 02-Mar-17.
 */
angular.module('listing.filters',[]).filter('newsFilter',function () {
    return function (items,filters) {
        angular.forEach(items,function (item) {
            console.log(item);
        });
        return items;
    }
})