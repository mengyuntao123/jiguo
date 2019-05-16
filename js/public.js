// 广告返回顶部
$('.backtop').on('click',function(){
   
    var   backtimer=setInterval(function(){
        var backheight=$(document).scrollTop();
        backheight-=100;
        $(document).scrollTop(backheight);
        if($(document).scrollTop()==0){
            clearInterval(backtimer);
        }
      },30);
    });   
      
//广告位置固定
var fix_height=$('.backtop').css('top').split('px')[0]-0;
var fix_left=$('.backtop').css('left').split('px')[0]-0;
$(document).scroll(function(){
   
    var top=$(document).scrollTop();
    if(top>=fix_height){
        $('.backtop').fadeIn('30');
    }else{
        $('.backtop').fadeOut('30');
    }
    //  广告位显示隐藏
   $('.backtop').css({
      left:fix_left,
      top:fix_height+top
  })
});
//  返回顶部移入移出
$('.backtop').hover(function(){
    $(this).css('backgroundColor','#505050');
},function(){
    $(this).css('backgroundColor','rgba(232, 232, 232)');
});

$('.nav-list ul li').click(function(){
 
    $('.nav-list ul li').find('a').removeClass('nav-list-on');
    $(this).find('a').addClass('nav-list-on');
});

//   点击加载更多


$('.load-more').on('click', function () {
   
    $.ajax({
        url: "../json/index_sy.json",
      beforeSend: function () {
              $('.loading-down').hide();
              $('.loading-icon').show();
          },
          success: function (data) {
          $('.loading-down').show();
              $('.loading-icon').hide();
        Info($('#play-sy-list'), data, $('#intone'));
    },
          error: function (error) {
              alert(error);
        }
  
  });
  
  
  });



 



