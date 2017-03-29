/**
 * Created by stijn on 02-Mar-17.
 */
angular.module('listing.filters',[]).filter('newsFilter',function () {
    return function (items,filters) {
        //array met gefilterde data
        var filtered = [];
        //Voor elk item in items
        angular.forEach(items,function (item) {
            // matchtext word toegekent als filter qeury leeg is of  de index van de titles can de gefiltede qeury groter dan -1 is of als de beschrijving van de gefilterd qeury groter dan -1 is
            var matchText = filters.qeury == "" || item.title.indexOf(filters.qeury) > -1 || item.description.indexOf(filters.qeury) > -1;
            //dit alles om te vinden in het boek dat het qeury moet zijn en er staat query
            // console.log(matchText);
            // console.log(filters.qeury == "");
            // console.log(filters.qeury);
            // console.log(item.title.indexOf(filters.qeury) > -1);
            // console.log(item.title.indexOf(filters.qeury));
            // console.log(item.description.indexOf(filters.qeury) > -1);
            // console.log(item.description.indexOf(filters.qeury));
            //het aantal tags die geselecteerd zijn
            var selectedTags = 0;
            //aantal tags die matchen
            var tagsMatched = 0;
            //voor elke tags in tag
            angular.forEach(filters.tags,function (tag) {
                //als de tag geselecteerd is
                if(tag.selected){
                    // toekenen van plus een geslecteerde tag
                    selectedTags+=1;
                    //als de item tags labels index groter is dan 1
                    if(item.tags.indexOf(tag.label) > -1){
                        //toekennen van plus 1 voor alle gematchte tags
                        tagsMatched += 1;
                    }
                };
            });

        // toekenen aan de variable het aantal geselecteerde tags of de gematched tags als ze groter zijn dan null
        var matchAnyTag = selectedTags == 0 || tagsMatched > 0;
        //als er een match text en een match any tag is
        if(matchText && matchAnyTag){
            //het toevoegen van het item aan de gefilterde items.
            filtered.push(item);
        }
        });
        return filtered;
    }
});