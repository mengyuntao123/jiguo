
//验证码
var min = 60;
var time;
$('.resul a').click(function() {
    clearInterval(time);
    time = setInterval(yan,1000);
});

function yan(){
    min = --min;
    if(min>0){
        $('.resul a').html(min +"&nbsp;"+ '秒重发');
    }else{
        min = 60;
        $('.resul a').html('发送验证码')
    }
}
//注册
var tel=document.getElementsByClassName("result")[0].getElementsByTagName("input")[0]
// console.log(tel);
var user=document.getElementsByClassName("result")[1].getElementsByTagName("input")[0];
// console.log(user);
var pwd=document.getElementsByClassName("result")[2].getElementsByTagName("input")[0];
// console.log(pwd)
var respwd=document.getElementsByClassName("result")[3].getElementsByTagName("input")[0];
var iphone=/^1[3,5,6,7,8,9]\d{9}$/g;//检测手机号
var sp3=document.getElementsByClassName("sp3")[0];
var sp4=document.getElementsByClassName("sp4")[0];
var sp5=document.getElementsByClassName("sp5")[0];
var sp6=document.getElementsByClassName("sp6")[0];
var usname=/^[a-zA-Z0-9_-]{3,16}$/;//检测用户名
// console.log(usname.test(1234));
var pwd1=/^\w{6,16}$///检测密码

function fn(){
    if(tel.value==""){
      sp3.innerHTML="手机号码不能为空";
      return false;
    }else if(iphone.test(tel.value)==false){
        sp3.innerHTML="手机号码格式错误";
        return false;
    }
    else{
        sp3.innerHTML="手机号码输入正确";
    };

    if(user.value==""){
        sp4.innerHTML="用户名不能为空";
        return false;
    }
    else if(usname.test(user.value)==false){
        sp4.innerHTML="用户名格式错误";
        return false;
    }
    else{
        sp4.innerHTML="用户名输入正确";
    }
    if(pwd.value==""){
        sp5.innerHTML="密码不能为空";
        return false;
    }else if(pwd1.test(pwd.value)==false){
       sp5.innerHTML="密码格式错误";
       return false;
    } else{
        sp5.innerHTML="密码输入格式正确";
    }
    if(pwd.value!=respwd.value){
        sp6.innerHTML="两者密码不一致";
    }else if(respwd.value==""){
        sp6.innerHTML="密码不能为空"
    }else{
        sp6.innerHTML="密码一致"
    }
       
    
}