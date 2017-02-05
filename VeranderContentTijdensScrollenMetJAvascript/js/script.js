window.onload = function(){
    console.log("Hello world");
    var waypoint = new Waypoint({
        element:document.getElementById('block'),
        handler:function(direction){
            this.element.classList.remove('original');
            this.element.classList.add('change');
        },
        offset:'-5%'
    })
};