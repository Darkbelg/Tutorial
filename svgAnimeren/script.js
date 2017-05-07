/**
 * Created by stijn on 07-May-17.
 */
(function () {
    'use strict';
    var timeline,path;
    document.addEventListener('DOMContentLoaded',function () {
        path = document.querySelector('text');
        loop();},false);
    console.log(path);
    function loop() {
            timeline.to(path,10,{strokeDasheoffset:0,ease:Power0.easeNone});
            timeline.play();
    }

    path = document.querySelector('text');
    timeline = new TimelineLite();
    timeline.set(path,{strokeDashoffset:1000});
    timeline.set(path,{strokeDasharray:1000});


    timeline.play();
    timeline.eventCallback('onComplete',function () {
        timeline.restart();});
    console.log(timeline);

})();

