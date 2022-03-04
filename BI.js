var cd=document.getElementById("cd");
cd.onmousedown=function(event){
    var event=event;
    var pageX=event.pageX;
    var pageY=event.pageY;
    var cdX=pageX-cd.offsetLeft;
    var cdY=pageY-cd.offsetTop;

    document.onmousemove=function(event){
        var event= event;
        var pageX=event.pageX;
        var pageY=event.pageY;
        cd.style.left=pageX-cdX+"px";
        cd.style.top=pageY-cdY+"px";

    } 
}
document.onmouseup=function(){
        document.onmousemove=null;
    }  

