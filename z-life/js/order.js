     function cla(ele, index) {
         var ele1 = document.getElementsByClassName(ele)[index];
         return ele1;
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