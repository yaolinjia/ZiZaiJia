window.onload=function(){
    var aBtn = document.querySelectorAll(".nan");
    // var oCon = document.getElementById("tab-content");
    var aDiv = document.querySelectorAll(".none");
    for (var i = 0; i < aBtn.length; i++) {
        aBtn[i].onclick = function() {
            for (var i = 0; i < aBtn.length; i++) {
                aBtn[i].className = "";
                aBtn[i].index = i;
                aDiv[i].style.display = "none";
            }
            this.className = "active";
            aDiv[this.index].style.display = "block";
           
        };
      
    }
}