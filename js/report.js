$.ajax({
    url:"../json/repo.json",
    type:"get",
    dataType:"json",
    success:function(a){
    newFunction(a);
}
});

function newFunction(a) {
    chang(a.arrList);
}

function chang(a){
    console.log(a);
    var pp="";
  for(var i=0;i<a.length;i++){
     pp+='<div class="pht1">';
     pp+='<img class="ing1" src="'+a[i].img+'"/>';
     pp+='<div class="ziti">';
     pp+=' <div class="ct">';
     pp+='<p>'+a[i].h3+'</p>';
     pp+='<p class="ps1">';
     pp+='<span class="icon1">';
     pp+='<img src="'+a[i].icon+'" alt="">'
     pp+="</span>";
     pp+='<a href="#">'+a[i].name+'</a>';
     pp+='<span>'+ a[i].date+'</span>'
     pp+='</p>';
     pp+=' <div class="icon">';
     pp+='<span><img src="'+a[i].icon1+'"></span>';
     pp+='<a href="#">'+ a[i].number1+'</a>';
     pp+='<span><img src="'+ a[i].icon2+'" alt=""></span>';
     pp+='<a href="#">'+ a[i].number2 +'</a>';
     pp+='</div>';
     pp+='</div>';
     pp+='</div>';
     pp+='<div class="zuihou">';
     pp+='<p>'+a[i].exprice+'</p>'
     pp+='</div>';
     pp+='</div>';
   
  }
  var pht_left=document.getElementsByClassName("pht-left")[0];
  pht_left.innerHTML=pp;
      console.log(pht_left);
}

$(".zu").click(function(){
    $(".photo").css("display","block");
    $(".photo1").css("display","none");
    $(this).parent().eq(0).addClass("active");
    $(this).parent().siblings().removeClass("active");
})
$(".zr").click(function(){
     


    $(".photo").css("display","none");
    $(".photo1").css("display","block");
    $(this).parent().eq(0).addClass("active");
    $(this).parent().siblings().removeClass("active");
})

 $(".loading-box a").click(function () {
        $(".loading-box a").addClass("loading");

    });