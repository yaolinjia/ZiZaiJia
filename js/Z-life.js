window.onload = function () {
    var ban_btn = cla('ban_btn', 0);
    var lis = ban_btn.getElementsByTagName('li');
    var ban_btn1 = cla('ban_btn1', 0);
    var lis1 = ban_btn1.getElementsByTagName('li');
    var ban_btn2 = cla('ban_btn2', 0);
    var lis2 = ban_btn2.getElementsByTagName('li');
    var ban_btn3 = cla('ban_btn3', 1);
    var lis3 = ban_btn3.getElementsByTagName('li');
    var oli = cla('carousel-item', 0);
    var oul = cla('carousel-inner', 0);

    function cla(ele, index) {
        var ele1 = document.getElementsByClassName(ele)[index];
        return ele1;
    };
    for (var i = 0; i < 4; i++) {
        (function (j) {
            lis[j].onclick = function () {
                a()
            };
            lis1[j].onclick = function () {
                a()
            };
            lis2[j].onclick = function () {
                a()
            };
            lis3[j].onclick = function () {
                a()
            };

            function a() {
                oul.style.left = (j + 1) * (-parseInt(oli.style.width)) + "px";
            };
        }(i));
    };
    var tab = cla('tab_top', 0);
    var tabs = tab.getElementsByTagName('li');
    var con = cla('con_top', 0);
    var cons = con.getElementsByTagName('div');
    for (var i = 0; i < tabs.length; i++) {
        (function (j) {
            function lev() {
                for (var a = 0; a < tabs.length; a++) {
                    tabs[a].id = "";
                    cons[a].style.display = "none";
                };
            };

            function ov() {
                for (var a = 0; a < tabs.length; a++) {
                    tabs[a].id = "";
                    cons[a].style.display = "none";
                };
                cons[j].style.display = "block";
                tabs[j].id = "cur";
            };
            tabs[j].onmouseover = function () {
                ov();
            };
            cons[j].onmouseover = function () {
                ov();
            };
            tabs[j].onmouseleave = function () {
                setTimeout(lev(), 1000);
            };
            cons[j].onmouseleave = function () {
                setTimeout(lev(), 1000);
            };
        }(i));
    };
};