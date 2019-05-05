
window.onload = function () {
    function cla(ele, index) {
        var ele1 = document.getElementsByClassName(ele)[index];
        return ele1;
    }
    var tabs = document.querySelectorAll(".tab_top>li");
    var cons = document.querySelectorAll(".con_top>div");

    for (var i = 0; i < tabs.length; i++) {
        (function (j) {
            function lev() {
                for (var a = 0; a < tabs.length; a++) {
                    tabs[a].id = "";
                    cons[a].style.display = "none";
                }
            }
            function ov() {
                for (var a = 0; a < tabs.length; a++) {
                    tabs[a].id = "";
                    cons[a].style.display = "none";
                }
                cons[j].style.display = "block";
                tabs[j].id = "cur";
            }
            tabs[j].onmouseover = function () {
                ov();
            }
            cons[j].onmouseover = function () {
                ov();
            }
            tabs[j].onmouseleave = function () {
                setTimeout(lev(), 1000);
            }
            cons[j].onmouseleave = function () {
                setTimeout(lev(), 1000);
            }
        }(i))
    }
}

var tab = document.querySelectorAll(".tob>span");
var content = document.querySelectorAll(".content>div");

for (var i = 0; i < tab.length; i++) {
    (function (a) {
        tab[a].onclick = function () {
            console.log(this);
            for (var i = 0; i < tab.length; i++) {
                tab[i].style.textDecoration = "none";
                tab[i].style.color = "#ccc";
            }
            for (var j = 0; j < content.length; j++) {
                content[j].style.display = "none";
                this.style.color = "#000000";
                this.style.textDecoration = "underline #7adfa9";
            }
            content[a].style.display = "block";

        }
    })(i)
}

