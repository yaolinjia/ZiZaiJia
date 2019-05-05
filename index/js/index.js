//轮播图
$("#carousel_1").FtCarousel();


// 吸顶导航
var headr_nav = document.getElementById("headr_nav");
var nav_top_height = headr_nav.offsetTop;

//2.监听窗口滚动
window.onscroll = function () {
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

// 顶部TAB切换第三内容
var $icon3 = $('#icon3');
var $icon3_li = $icon3.find("li");
var Path;
$icon3_li.hover(function () { //当鼠标经过li时
    Path = $(this).find("img").attr('src');
    $(this).find("img").attr('src', $(this).find("img").attr('hover_src'));
    $(this).find("p").css({
        color: "#5fdd9a"
    })

}, function () {
    $(this).find("img").attr('src', Path);
    $(this).find("p").css({
        color: "#000"
    })
});



// 头部tab切换

$('#tab-list').on('mouseenter', '.tab-list_items', function () {
    $(this).find('a').addClass("active").siblings().find('a').removeClass("active");
    $("#tab_content").show();
    $("#tab_content .cont").hide().eq($(this).index()).show();

})
$('#tab-list').on('mouseleave', '.tab-list_items', function () {
    $(this).find('a').removeClass("active");
    
})
$("#TAB").mouseleave(function(){
    $("#tab_content").hide();
})

//底部tab切换
$('#cyjx').on('click', '.kinds_item', function () {
    $(this).addClass("active").siblings().removeClass("active");
    $("#cyjx .pro_list").hide().eq($(this).index()).show();
})
$('#zasj').on('click', '.tab_item', function () {
    $(this).addClass("active").siblings().removeClass("active");
    $("#zasj .zzsj_list").hide().eq($(this).index()).show();
})

var $input = $('#searchContent .search_input');

//点击搜索按钮
$('#user .search').click(function () {
    $('#searchContent').show();
    $('#zhezhao').show();
    $input.focus();
})
//点击关闭按钮
$('#searchContent .return_icon').click(function () {
    $(this).parent().hide();
    $('#zhezhao').hide();
})
// //输入框聚焦
$input.focus(function () {
    $(this).parent().next().next().show();
    $(this).parent().parent().css({height:492});
    if ($input.val() != "") {
        $(this).parent().next().show();
        $(this).parent().next().next().hide();
    }
})


//输入框失焦
$input.blur(function () {
    $(this).parent().next().hide();
    $(this).parent().next().next().hide();
    $(this).parent().parent().css({height:407});
    // if ($(this).val() !='') {
    //     $('.val_list').prepend("<li>" + $(this).val() + "</li>")
    // }else{
    //     return false;
    // }
})

//点击搜索
$('#searchContent .search_icon').on('click', function () {
    location.reload([true])
})



//鼠标悬浮购物车图标
$('#user .car').hover(function () {
    $(this).find('.your_car').fadeIn();
},function () {
    $(this).find('.your_car').fadeOut();
})

$input.bind('input propertychange', function () {
    $(this).parent().next().next().hide();
    if ($input.val() == "") {
        $(this).parent().next().next().show();
        $(this).parent().parent().css({height:407});
    }else{
        $(this).parent().parent().css({height:492});
        $(this).parent().next().next().hide();
    }
})

$input.get(0).oninput = function () {
    $.ajax({
        url:'https://sug.so.360.cn/suggest',
        type:'get',
        data:'word=' + $input.val() + '&encodein=utf-8&encodeout=utf-8&pq=',
        dataType:'jsonp',
        success:function (data) {
            // console.log(data);

            var count = -1;
            $('.search_res').html('');

            //动态添加li标签
            $.each(data.s, function(i, val){
                var $liNode = '<li>' + val + '</li>';
                $('.search_res').append($liNode);
            })
            //把输入框的内容添加到数组里
            data.s.push($input.val())
            //鼠标悬浮改变li的样式
            var $len = $('.search_res').children().length;
            $('.search_res').on('mouseover', 'li', function () {
                count = $(this).index();
                $(this).css({
                    color:'#5EDF9A',
                    backgroundColor:'rgb(236, 236, 236)'
                }).siblings().css({
                    color:'#505050',
                    backgroundColor:'#fff'
                })
            })

            //点击灭个li标签时跳转到相应的链接
            $('.search_res').on('click', 'li', function () {
                searchSkip($(this).html())
            })

            //点击回车键跳转相应的链接
            $input.keyup(function (e) {
                if (e.which == 13) {
                    searchSkip($(this).html());
                }
                //点击向下和向上箭头选择搜索的内容
                if (e.which == 40) {
                    count++;
                    count = count % ($len + 1);
                    if (count == $len) {
                        $('.search_res li').css({
                            color:'#505050',
                            backgroundColor:'#fff'
                        })
                    }else{
                        $('.search_res li').eq(count).css({
                            color:'#5EDF9A',
                            backgroundColor:'rgb(236, 236, 236)'
                        }).siblings().css({
                            color:'#505050',
                            backgroundColor:'#fff'
                        })
                    }
                    $(this).val(data.s[count]);
                }else if(e.which == 38){
                    count--;
                    if (count == -1) {
                        count = $len;
                        $('.search_res li').css({
                            color:'#505050',
                            backgroundColor:'#fff'
                        })
                    }else if (count == -2) {
                        count = $len - 1;
                    }
                    $('.search_res li').eq(count).css({
                        color:'#5EDF9A',
                        backgroundColor:'rgb(236, 236, 236)'
                    }).siblings().css({
                        color:'#505050',
                        backgroundColor:'#fff'
                    })
                    $(this).val(data.s[count]);
                }
            })
        }
    })
}

//跳转到搜索页面
function searchSkip(search){
    location.href="https://www.so.com/s?ie=utf-8&fr=none&src=sug-local&q="+search;
}
