//tap点击切换
$(".use-head>span").click(function(){
    $(".use-head>span").css("color","#a2a1a9").css("border-bottom","0px solid #fd5238");
    $(this).css("color","#fd5238").css("border-bottom","4px solid #fd5238");
});
$(".use-head>p>span").click(function(){
    $(".use-head>p>span").css("color","#a2a1a9");
    $(this).css("color","#000");
});

var index = 0;//加载下标
var num = 0;//判断加载

var use_data = doT.template($("#use-dot").text());
//ajax请求

//默认出现
$.ajax({
    url:"../json/use.json",
    success:function(data){
        $("#use-bx").html(use_data(data[num][index]));
    }
});
//大众试用
$("#VW").on('click',function(){
    $.ajax({
        url:"../json/use.json",
        success:function(data){
            if(num == 1){
                $(".use-head>p>span").css("color","#a2a1a9");
                $("#all").css("color","#000");
            }
            var value = use_data(data[num]);
            $("#use-bx").html(value);
            num = 0;
            index = 0;
            $(".type").show();
            $('.gray').addClass("click").removeClass("gray");
            $(".click span").css('background','url("../img/more.png")no-repeat 0  6px').css('text-indent','20px').html('向下拉加载更多');
            }

    });
});
//全部
$("#all").on('click',function(){
    $.ajax({
        url:"../json/use.json",
        success:function(data){
            num = 0;
            index = 0;
            var value = use_data(data[num][0]);
            $("#use-bx").html(value);
            $('.gray').addClass("click").removeClass("gray");
            $(".click span").css('background','url("../img/more.png")no-repeat 0  6px').css('text-indent','20px').html('向下拉加载更多');
        }
    });
});
//申请中
$("#apple").on('click',function(){
    $.ajax({
        url:"../json/use.json",
        success:function(data){
            num = 1;
            index = 0;
            var value = use_data(data[num][0]);
            $("#use-bx").html(value);
            $('.gray').addClass("click").removeClass("gray");
            $(".click span").css('background','url("../img/more.png")no-repeat 0  6px').css('text-indent','20px').html('向下拉加载更多');

        }
    });
});
//试用中
$("#try").on('click',function(){
    $.ajax({
        url:"../json/use.json",
        success:function(data){
            num = 2;
            index = 0;
            var value = use_data(data[num][0]);
            $("#use-bx").html(value);
            $('.gray').addClass("click").removeClass("gray");
            $(".click span").css('background','url("../img/more.png")no-repeat 0  6px').css('text-indent','20px').html('向下拉加载更多');

        }
    });
});
//已结束
$("#over").on('click',function(){
    $.ajax({
        url:"../json/use.json",
        success:function(data){
            num = 3;
            index = 0;
            var value = use_data(data[num][0]);
            $("#use-bx").html(value);
            $('.gray').addClass("click").removeClass("gray");
            $(".click span").css('background','url("../img/more.png")no-repeat 0  6px').css('text-indent','20px').html('向下拉加载更多');

        }
    });
});
//体验师专享
$("#vip").on('click',function(){
    $.ajax({
        url:"../json/use.json",
        success:function(data){
            num = 4;
            index = 0;
            var value = use_data(data[num][0]);
            $("#use-bx").html(value);
            $(".type").hide();
            $('.gray').addClass("click").removeClass("gray");
            $(".click span").css('background','url("../img/more.png")no-repeat 0  6px').css('text-indent','20px').html('向下拉加载更多');

        }
    });
});
//加载更多
$(window).scroll(function(e){
    //获取当前页面的总高度 - 1
    var all = document.documentElement.offsetHeight - 1;
    //获取当前滚动条高度 + 页面可视高度
    var top = document.documentElement.scrollTop + document.documentElement.clientHeight;
    if(all < top){//判断是否到底部
        $(".click span").css('background','url("../img/loading-icon.gif")no-repeat').css('text-indent','25px').html('正在加载中');
        var time=setTimeout(function(){
            $(".click span").css('background','url("../img/more.png")no-repeat 0  6px').css('text-indent','20px').html('向下拉加载更多');

            if(num == 0){
                $.ajax({
                    url:"../json/use.json",
                    success:function(data){
                        if(index <= data[num].length - 1){
                            index ++;
                            var value = use_data(data[num][index]);
                            $("#use-bx").html($("#use-bx").html() + value);
                            if(index >= data[num].length - 1){
                                $(".click span").html("没有更多了~").css('background','none');
                                $(".click").removeClass("click").addClass("gray")
                            }
                            clearTimeout(time);
                        }

                    }
                })
            }else if(num == 1){
                $.ajax({
                    url:"../json/use.json",
                    success:function(data){
                        index ++;
                        var value = use_data(data[num][index]);
                        $("#use-bx").html($("#use-bx").html() + value);
                        if(index >= data[num].length - 1){
                            $(".click span").html("没有更多了~").css('background','none');
                            $(".click").removeClass("click").addClass("gray")
                        }
                        clearTimeout(time);
                    }
                })
            }else if(num == 2){
                $.ajax({
                    url:"../json/use.json",
                    success:function(data){
                        index ++;
                        var value = use_data(data[num][index]);
                        $("#use-bx").html($("#use-bx").html() + value);
                        if(index >= data[num].length - 1){
                            $(".click span").html("没有更多了~").css('background','none');
                            $(".click").removeClass("click").addClass("gray")
                        }
                        clearTimeout(time);
                    }
                })
            }else if(num == 3){
                $.ajax({
                    url:"../json/use.json",
                    success:function(data){
                        index ++;
                        var value = use_data(data[num][index]);
                        $("#use-bx").html($("#use-bx").html() + value);
                        if(index >= data[num].length - 1){
                            $(".click span").html("没有更多了~").css('background','none');
                            $(".click").removeClass("click").addClass("gray")
                        }
                        clearTimeout(time);
                    }
                })
            }else if(num == 4){
                $.ajax({
                    url:"../json/use.json",
                    success:function(data){
                        index ++;
                        var value = use_data(data[num][index]);
                        $("#use-bx").html($("#use-bx").html() + value);
                        if(index >= data[num].length - 1){
                            $(".click span").html("没有更多了~").css('background','none');
                            $(".click").removeClass("click").addClass("gray")
                        }
                        clearTimeout(time);
                    }
                })
            }

        },1000)
    }

});
