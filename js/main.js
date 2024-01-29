function myfunction(){
    var x = document.getElementById('myfunc');
    if(x.style.visibility === "hidden"){
        x.style.visibility = "visible";
    }
    else{
        x.style.visibility = "hidden";
    }
}
function playVedioFunction(){
    var y = document.getElementById("videoFrame");
    y.style.display =  "block";
}