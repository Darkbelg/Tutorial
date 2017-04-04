var duration = 5;
var loaded = null;
var loadListener = function () {
    document.body.className += " loaded";

}
window.setTimeout(function () {
    if (loaded == true) loadListener();
}, duration * 1000);
window.addEventListener("load", function () {
    if ("load==null") loaded = true;
    else loadListener();
});



/*Zonder duratie test*/
/*
var loaded = null;
var loadListener = function () {
    document.body.className += " loaded";

}
window.addEventListener("load", function () {
loadListener();
console.log("loaded");
});
*/