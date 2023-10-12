var stickman = document.getElementById("stickman");
var obstacle = document.getElementById("obstacle");

stickman.addEventListener("click", function() {
    jump(stickman);
});
var s=stickman.offsetTop
console.log(s);
function jump(stickman) {
    if (!stickman.classList.contains("animate")) {
        stickman.classList.add("animate");
        setTimeout(function () {
            stickman.classList.remove("animate");
        }, 500);
    }
}
var obs=obstacle.getBoundingClientRect()
var x = obstacle.offsetLeft;
var y = obstacle.offsetTop;

var num=setInterval(function(){
    var sitc=stickman
    var obss=obstacle
    if(sitc.offsetLeft === obss.offsetLeft || sitc.offsetTop===460 ){
        alert("you lost refresh and start again")
    }
},10)





