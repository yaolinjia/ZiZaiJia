window.onload=function(){
    var oTabL = document.getElementById("tab-list");
    var aLi = oTabL.getElementsByTagName("li");
    // var oCon = document.getElementById("tab-content");
    var cont = document.querySelectorAll(".cont");
    for (var i = 0; i < aLi.length; i++) {
        aLi[i].onmouseover = function() {
            for (var i = 0; i < aLi.length; i++) {
                aLi[i].className = "";
                aLi[i].index = i;
                cont[i].style.display = "none";
            }
            this.className = "current";
            cont[this.index].style.display = "block";
           
        };
        aLi[i].onmouseout = function() {
            for (var i = 0; i < aLi.length; i++) {
                aLi[i].className = "";
                aLi[i].index = i;
                cont[i].style.display = "none";
            }           
        };
    }
}
