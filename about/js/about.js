window.onscroll = function() {
    var headr_nav = document.getElementById("headr_nav");
    var nav_top_height = headr_nav.offsetTop;

    //2.监听窗口滚动
    window.onscroll = function() {
        var scroll_top_height = scroll().top;
        // console.log(scroll_top_height);

        //3.判断
        if (scroll_top_height >= nav_top_height) {
            headr_nav.className = "nav";
        } else {
            headr_nav.className = "";
        }
    };

    function scroll() {
        if (window.pageYOffset !== null) {
            return {
                top: window.pageYOffset,
                left: window.pageXOffset
            };
        } else if (document.compatMode === "CSS1Compat") {
            //W3C
            return {
                top: document.documentElement.scrollTop,
                left: document.documentElement.scrollLeft
            };
        }

        return {
            top: document.body.scrollTop,
            left: document.body.scrollLeft
        };
    }



    // var oTab = document.getElementById("tab-list");
    // var aBtn = oTab.getElementsByTagName("li");
    // // var oCon = document.getElementById("tab-content");
    // var aDiv = document.querySelectorAll(".cont");
    // for (var i = 0; i < aBtn.length; i++) {
    //     aBtn[i].onmouseover = function() {
    //         for (var i = 0; i < aBtn.length; i++) {
    //             aBtn[i].className = "";
    //             aBtn[i].index = i;
    //             aDiv[i].style.display = "none";
    //         }
    //         this.className = "current";
    //         aDiv[this.index].style.display = "block";
    //         console.log(this.index)
    //     };
    // }




}