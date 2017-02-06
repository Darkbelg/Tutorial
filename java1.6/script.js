window.onload = function () {

    filter();
    every();
    some();


}


/**
 * Filtert alle waardes eruit die niet voldoen aan de functie isGrootGenoeg
 */
function filter() {
    console.log("filter()");  
    var lijst = [1, 3, 8, 9, 5, 4, 0, 9, 11, 2];
    console.log(lijst);
    //filter(callbackfunctie) filter verijst een callbackfunctie met 3 waarden
    var nieuweLijst = lijst.filter(isGrootGenoeg);
    console.log(nieuweLijst);
}

/**
 * Zoekt todat de eerste waarde false is en returnt false
 */
function every() {
    console.log("every()");
    var lijst = [6, 9, 4, 11, 12];
    console.log(lijst);
    var geslaagd = lijst.every(isGrootGenoeg);
    console.log(geslaagd);
}

/**
 * Zoekt todat de eerste waarde true is en returnt true
 */
function some() {
    console.log("some()");
    var lijst = [6, 9, 4, 11, 12];
    console.log(lijst);
    var geslaagd = lijst.some(isGrootGenoeg);
    console.log(geslaagd);

}

function isGrootGenoeg(element, index, array) {
    return (element >= 6);
}