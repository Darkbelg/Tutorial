/**
 * Created by stijn on 13-Jun-17.
 */
window.addEventListener("load",function () {
    document.querySelector("main").addEventListener("mousemove",function (e) {
        var x = (e.clientX/this.clientWidth)*100;
        var y = (e.clientY/this.clientHeight)*100;
        this.style.backgroundPosition = x+"% " + y + "%";
    });
});