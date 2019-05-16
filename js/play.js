//tap点击切换
$(".play-head span").click(function(){
    $(".play-head span").css("color","#a2a1a9").css("border-bottom","0px solid #fd5238");
    $(this).css("color","#fd5238").css("border-bottom","4px solid #fd5238");
});
var index = 0;//加载下标
var num = 0;//加载判断

var play_data = doT.template($("#play-dot").text());
//ajax请求

//默认出现
$.ajax({
    url:"../json/play.json",
    success:function(data){
        var value = play_data(data[num][0]);
        for(var i = 0;i < 3;i++){
            value = value += play_data(data[num][0]);
            $("#play-bx").html(value);
        }
        num = 0;
    }
});
//最新
$("#new").on('click',function(){
    $.ajax({
        url:"../json/play.json",
        success:function(data){
            num = 0;
            index = 0;
            var value = play_data(data[num][0]);
            for(var i = 0;i < 3;i++){
                value = value += play_data(data[num][0]);
            }
            $("#play-bx").html(value);
            $('.gray').addClass("click").removeClass("gray");
            $(".click span").css('background','url("../img/more.png")no-repeat 0  6px').css('text-indent','20px').html('点击加载更多');
            $("#play-bx").css('display','block');
            $(".play-main").css('display','none')
        }
    });
});
//最热
$("#hot").on('click',function(){
    $.ajax({
        url:"../json/play.json",
        success:function(data){
            num = 1;
            index = 0;
            var value = play_data(data[num][0]);
            for(var i = 0;i < 3;i++){
                value = value += play_data(data[num][0]);
            }
            $("#play-bx").html(value);
            $('.gray').addClass("click").removeClass("gray");
            $(".click span").css('background','url("../img/more.png")no-repeat 0  6px').css('text-indent','20px').html('点击加载更多');
            $("#play-bx").css('display','block');
            $(".play-main").css('display','none')
        }
    });
});
//品类
$("#class").on('click',function(){
    $("#play-bx").css('display','none');
    $(".play-main").css('display','block');
})


//加载更多动画
$(".click").on("click",function(){
    $(".click span").css('background','url("../img/loading-icon.gif")no-repeat').css('text-indent','25px').html('正在加载中');
    var time=setTimeout(function(){
        $(".click span").css('background','url("../img/more.png")no-repeat 0  6px').css('text-indent','20px').html('点击加载更多');
        if(num == 0){
            $.ajax({
                url:"../json/play.json",
                success:function(data){
                    index ++;
                    var value = play_data(data[num][index]);
                    for(var i = 0;i < 3;i++){
                        value = value += play_data(data[num][index]);
                    }
                    $("#play-bx").html($("#play-bx").html() + value);
                    console.log(index);
                    console.log(data[num].length);
                    if(index >= data[num].length - 1){
                        $(".click span").html("没有更多了~").css('background','none');
                        $(".click").removeClass("click").addClass("gray")
                    }
                    clearTimeout(time);
                }
        })}else if(num == 1){
            $.ajax({
                url:"../json/play.json",
                success:function(data){
                    index ++;
                    var value = play_data(data[num][index]);
                    for(var i = 0;i < 3;i++){
                        value = value += play_data(data[num][index]);
                    }
                    $("#play-bx").html($("#play-bx").html() + value);
                    console.log(index);
                    console.log(data[num].length);
                    if(index >= data[num].length - 1){
                        $(".click span").html("没有更多了~").css('background','none');
                        $(".click").removeClass("click").addClass("gray")
                    }
                    clearTimeout(time);
                }
            })
        }

    },1000)
});

$("#play-bx").on('click','li',function(){
    window.location.href='../guid/ontrial.html';
})



