window.onload = function () {
    //固定导航
    window.onscroll = function () {
        var nav = document.querySelector(".nav");
        var nav_Top = document.body.scrollTop || document.documentElement.scrollTop;

        if (nav_Top > 33) {
            nav.style.top = 0;
        }
        if (nav_Top < 33) {
            nav.style.top = 33 + "px";
        }
    }
    //导航条
    var oUl = document.querySelector(".nav-cont");
    var aLi = oUl.getElementsByTagName("li");
    var line = oUl.querySelectorAll(".nav-line");
    for (var i = 0; i < aLi.length; i++) {
        aLi[i].index = i;
        aLi[i].onmouseover = function () {
            for (var j = 0; j < aLi.length; j++) {
                line[j].style.display = "none";
            }
            line[this.index].style.display = "block";
        }
        aLi[i].onmouseout = function () {
            for (var j = 0; j < aLi.length; j++) {
                line[j].style.display = "none";
            }
        }
    }
    //底部图片点击事件
    var seePic = document.querySelectorAll(".see-pic");
    var hiddlePic = document.querySelectorAll(".hiddle-pic");
    var bpic = document.querySelectorAll(".b-pic");
    for (var i = 0; i < bpic.length; i++) {
        bpic[i].index = i;
        bpic[i].onmouseover = function () {
            for (var j = 0; j < seePic.length; j++) {
                seePic[j].style.display = "block";
                hiddlePic[j].style.display = "none";
            }
            hiddlePic[this.index].style.display = "block";
            seePic[this.index].style.display = "none";
        }
        bpic[i].onmouseout = function () {
            for (var j = 0; j < seePic.length; j++) {
                seePic[j].style.display = "block";
                hiddlePic[j].style.display = "none";
            }
        }
    }
    //z-life导航悬停出现详情导航
    var banBox = document.querySelector(".banner_box");
    var z_kist = document.querySelector(".z-life-list");
    var timer = null;
    aLi[0].onmouseover = function () {
        line[this.index].style.display = "block";
        banBox.style.display = "block";
        z_kist.style.display = "block";
    };
    aLi[0].onmouseout = function () {
        timer = setTimeout(function () {
            banBox.style.display = "none";
            z_kist.style.display = "none";
        }, 500);
    };
    banBox.onmouseover = function () {
        clearTimeout(timer);
    };
    banBox.onmouseout = function () {
        timer = setTimeout(function () {
            banBox.style.display = "none";
            z_kist.style.display = "none";
        }, 500);
    };




//z-life导航悬停出现内部tab切换
var list_title = document.querySelector(".list-left");
var list_li = list_title.querySelectorAll("li");
var list_right=document.querySelectorAll(".list-right");
for(var i=0;i<list_li.length;i++){
    list_li[i].index=i;
    list_li[i].onmouseover=function(){
        for(var j=0;j<list_li.length;j++){
            list_right[j].style.display="none";
            list_li[j].className="";
        }
        this.className="action";
        list_right[this.index].style.display="block";
    }
}

//点击综合下来菜单展开
var selectTt=document.getElementById("select-tt");
var selectList=document.getElementById("orderListSelect");
var k=true;
selectTt.onclick=function(){
    if(k){
        selectList.style.display="block";
        k=false;
    }
    else{
        selectList.style.display="none";
        k=true;
    }
}
//左侧点击加号显示事件
var xianshi=document.querySelectorAll(".xianshi");
var yincang=document.querySelectorAll(".yincang");
var l_detail=document.querySelectorAll(".l-detail")
var s=true;
for(var i=0;i<xianshi.length;i++){
    xianshi[i].index=i;
    xianshi[i].onclick=function(){
        this.style.display="none";
        yincang[this.index].style.display="block";
        var l_d_display=l_detail[this.index].style.display;
        if(l_d_display=="none"){
            l_detail[this.index].style.display="block";
        }
    }
}
for(var i=0;i<yincang.length;i++){
    yincang[i].index=i;
    yincang[i].onclick=function(){
        this.style.display="none";
        xianshi[this.index].style.display="block";
        var l_d_display=l_detail[this.index].style.display;
        if(l_d_display=="block"){
            l_detail[this.index].style.display="none";
        }
    }
}







}