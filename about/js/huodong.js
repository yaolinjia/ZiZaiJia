window.onload=function(){
    // var oTab = document.getElementById("tap-bot");
    var aBtn = document.querySelectorAll(".page");
    // var oCon = document.getElementById("tab-content");
    var aDiv = document.querySelectorAll(".none");
    for (var i = 0; i < aBtn.length; i++) {
        aBtn[i].onclick = function() {
            for (var i = 0; i < aBtn.length; i++) {
                aBtn[i].className = "";
                aBtn[i].index = i;
                aDiv[i].style.display = "none";
            }
           
            aDiv[this.index].style.display = "block";
           
        };
      
    }
    var Btn = document.querySelectorAll(".nan");
    // var oCon = document.getElementById("tab-content");
    var Div = document.querySelectorAll(".none");
    for (var i = 0; i < Btn.length; i++) {
        Btn[i].onclick = function() {
            for (var i = 0; i < Btn.length; i++) {
                Btn[i].className = "";
                Btn[i].index = i;
                Div[i].style.display = "none";
            }
            this.className = "active";
            Div[this.index].style.display = "block";
           
        };
        
      
    }
    // // var oTab = document.getElementById("tap-bot");
    // var oBtn = document.querySelectorAll(".act");
    // // var oCon = document.getElementById("tab-content");
    // var oDiv = document.querySelectorAll(".none2");
    // for (var i = 0; i < oBtn.length; i++) {
    //     oBtn[i].onclick = function() {
    //         for (var i = 0; i < oBtn.length; i++) {
    //             oBtn[i].className = "";
    //             oBtn[i].index = i;
    //             oDiv[i].style.display = "none";
    //         }
    //         this.className = "tap-top";
    //         oDiv[this.index].style.display = "block";
           
    //     };
    // } 
    


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
    




    

