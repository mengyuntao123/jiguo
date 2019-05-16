var boxliW = $('#play-list li').first().outerWidth();
var marginL = 2 * ($('#play-list li').css('margin-left').split('px')[0] - 0);
var liw = boxliW + marginL;
// var num = 4;
var flag = true;
var Intimer = null;


//   轮播主函数
function autoplay() {
    if (flag) {
        flag = false;
        $('#play-list').animate({
            'marginLeft': -4 * liw
        }, 800, function () {
          
            $('#play-list li').slice(0, 4).appendTo($('#play-list'));
            $('#play-list').css('marginLeft', 0);
            flag = true;
          
      })
    }
}
Intimer = setInterval(autoplay, 3000);
// left  点击效果
$('.hot-left').on('click', function () {
    autoplay();

});
//  right  点击效果
$('.hot-right').on('click', function () {
    $('#play-list').css('marginLeft', -liw *4);
    if (flag) {
        flag = false; // 将 flage 设置为  false，一次动画没执行完 为false 
        // 不在执行第二次动画   执行完为 true  才继续第二次动画
        $('#play-list').animate({
            'marginLeft': 0
        }, 800, function () {
            //   动画执行完 将后几项添加到父元素最前
            $('#play-list li').slice(-4).prependTo($('#play-list'));
            flag = true;
        })
    }
});
$('.hot-sy').hover(function () {
    clearInterval(Intimer);
}, function () {
    Intimer = setInterval(autoplay, 3000);
});
$.ajax({
    url: "../json/index_sy.json",
    success: function (data) {
      Info($('#play-sy-list'), data, $('#intone'))
    }

});
$.ajax({
    url: "../json/index_guid.json",
    success: function (data) {
        Info($('#guid-list'), data, $('#inguid'))
    }

});
$.ajax({
    url: "../json/index_re.json",
    success: function (data) {
        Info($('#re-list'), data, $('#inre'))
    }

});


//数据渲染方法
function Info(parent, info, textid) {
    for (var i = 0; i < info.length; i++) {
        console.log(info.length)
        var all = parent.html();
        var dataArr = {
            src: info[i].src,
            title: info[i].title,
            small_tit: info[i].small_tit,
            price: info[i].price,
            name: info[i].name
        }
        var arrText = doT.template(textid.text());
        parent.html(all + arrText(dataArr));
    }
}
