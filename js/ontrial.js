
$.ajax({
    url:"../json/ontra.json",
    type:"get",
    dataType:"json",
    success:function (a){
        var arrText = doT.template($("#interpolationtmpl").text());
        $(".pai").html(arrText(a));
    }
})