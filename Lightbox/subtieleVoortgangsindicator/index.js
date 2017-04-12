/**
 * Created by stijn on 11-Apr-17.
 */
var article = document.querySelector('.js-article');
var progressbar = document.querySelector('.js-progress-bar');

var getHeight = function () {
    return article.offsetHeight;
};
// var getValue = function () {
//   indicator grote van de gelezen tekst zodra het op het scherm is.
//     return window.innerHeight-(article.offsetTop-window.scrollY);
// };
var getValue = function () {
    return (window.innerHeight*0.5)-(article.offsetTop-window.scrollY);
};
var getPercentage = function () {
    var percentage = (getValue()/getHeight())*100;
    return Math.max(0,Math.min(100,percentage));
};
var onScroll = function () {
    progressbar.style.width = getPercentage()+'%';

};
window.addEventListener('scroll',onScroll);
