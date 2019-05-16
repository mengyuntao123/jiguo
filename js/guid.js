//tap点击切换
$(".guid-head span").click(function(){
    $(".guid-head span").css("color","#a2a1a9").css("border-bottom","0px solid #fd5238");
    $(this).css("color","#fd5238").css("border-bottom","4px solid #fd5238");
});
var index = 0;//加载下标
var num = 0;//加载判断
var guid_data = doT.template($("#guid-dot").text());
//ajax请求

//默认出现
$.ajax({
    url:"../json/guid.json",
    success:function(data){
        var value = guid_data(data[num][index]);
        for(var i = 0;i < 3;i++){
            value = value += guid_data(data[num][index]);
        }
        $("#guid-bx").html(value);
    }
});
//最新
$("#new").on('click',function(){
    $.ajax({
        url:"../json/guid.json",
        success:function(data){
            num = 0;
            index = 0;
            var value = guid_data(data[num][0]);
            for(var i = 0;i < 3;i++){
                value = value += guid_data(data[num][0]);
            }


            $("#guid-bx").html(value);
            $('.gray').addClass("click").removeClass("gray");
            $(".click span").css('background','url("../img/more.png")no-repeat 0  6px').css('text-indent','20px').html('点击加载更多');

        }
    });
});
//最热
$("#hot").on('click',function(){
    $.ajax({
        url:"../json/guid.json",
        success:function(data){
            num = 1;
            index = 0;
            var value = guid_data(data[num][0]);
            for(var i = 0;i < 3;i++){
                value = value += guid_data(data[num][0]);
            }
            $("#guid-bx").html(value);
            $('.gray').addClass("click").removeClass("gray");
            $(".click span").css('background','url("../img/more.png")no-repeat 0  6px').css('text-indent','20px').html('点击加载更多');

        }
    });
});


//加载更多动画
$(".click").on("click",function(){
    $(".click span").css('background','url("../img/loading-icon.gif")no-repeat').css('text-indent','25px').html('正在加载中')
    var time=setTimeout(function(){
        $(".click span").css('background','url("../img/more.png")no-repeat 0  6px').css('text-indent','20px').html('点击加载更多');
        if(num == 0){
            $.ajax({
                url:"../json/guid.json",
                success:function(data){
                    index ++;
                    var value = guid_data(data[num][index]);
                    for(var i = 0;i < 3;i++){
                        value = value += guid_data(data[num][index]);
                    }
                    $("#guid-bx").html($("#guid-bx").html() + value);
                    if(index >= data[num].length - 1){
                        $(".click span").html("没有更多了~").css('background','none');
                        $(".click").removeClass("click").addClass("gray")
                    }
                    clearTimeout(time);
                }
            })}else if(num == 1){
            $.ajax({
                url:"../json/guid.json",
                success:function(data){
                    index ++;
                    var value = guid_data(data[num][index]);
                    for(var i = 0;i < 3;i++){
                        value = value += guid_data(data[num][index]);
                    }
                    $("#guid-bx").html($("#guid-bx").html() + value);
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
//  点击跳转
$("#guid-bx").on('click','li',function(){
    window.location.href='../guid/guid_xiangqing.html';
})
