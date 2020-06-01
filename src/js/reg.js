var str = '0123456789abcdefghijklmnopqrstuvwxyzABCEDEFGHIJKLMNOPQRSTUVWXYZ';
var oVc = document.querySelector('[name="vc"]');
oVc.innerHTML = setVc(str);


var oBtnReset = document.querySelector('[name="reset"]');
oBtnReset.onclick = function () {
    oVc.innerHTML = setVc(str);
}


var oIptUserName = document.querySelector('[name="us"]');
var oSpanUserName = document.querySelector('[name="username"]');

// 获取焦点,在span标签中输入提示
oIptUserName.onfocus = function () {
    oSpanUserName.innerHTML = '请您输入账号,不能为空,长度是8-16位';
    oSpanUserName.style.color = 'black';

}


oIptUserName.onchange = function () {
    // 验证数据长度在8-16位之间
    var usernameValue = oIptUserName.value;
    let reg2 = /^\w{6,18}$/;
    if (reg2.test(usernameValue)==true ) {
        oSpanUserName.innerHTML = '您输入的账号符合规范';
        oSpanUserName.style.color = 'black';
       
    }
    // if (usernameValue.length >= 8 && usernameValue.length <= 16) {
    //     oSpanUserName.innerHTML = '您输入的账号符合规范';
    //     oSpanUserName.style.color = 'black';

   
    // }
     else {
        oSpanUserName.innerHTML = '您输入的账号不符合规范';
        oSpanUserName.style.color = 'red';
    }
}

const oBtnReg = document.querySelector('[name="reg"]');

oBtnReg.addEventListener('click' , ()=>{
    // 1,获取input标签数据,做验证

    // 账号
    let username = document.querySelector('[name="us"]').value;
    // 密码
    let userpwd1 = document.querySelector('[name="up1"]').value;
    // 确认密码
    let userpwd2 = document.querySelector('[name="up2"]').value;
    // 验证码
    let vc2 = document.querySelector('[name="vc2"]').value;
    // 验证码的文字
    let vc1 = document.querySelector('[name="vc"]').innerHTML;


    

    if(username == ''){
        window.alert('账号不能为空');
        return;
    }
    let reg2 = /^\w{6,18}$/;
    if (!(reg2.test(username)) ) {
     
        return;
    }

    if(userpwd1 == ''){
        window.alert('密码不能为空');
        return;
    }

    if(userpwd2 == ''){
        window.alert('确认密码不能为空');
        return;
    }

    if(vc2 == ''){
        window.alert('验证码不能为空');
        return;
    }

    // 确认密码必须和密码一致
    if(userpwd1 !== userpwd2){
        window.alert('密码和确认密码不一致');
        return;
    }

    // 验证码必须正确
    // 统一验证码的大小写,也即是不区分验证码输入的大小写
    if(vc1.toLowerCase() !== vc2.toLowerCase() ){
        window.alert('验证码不正确');
        return;
    }

   $.ajax({
       url: '../php/reg.php',
       type: 'post',
       data:{regname:username,regpwd:userpwd1},
       dataType: 'json',
       success:function(res){
           if(res == 1){
            //    let num = 3;
        //        $('.yz').html(`您已注册成功，3秒后返回`)
        //    var times = setInterval(function(){

        //         num--;
               
        //         $('.yz').html(`您已注册成功，${num}秒后返回`)
        //         if(num == 0){
        //             window.location.href = '../index.html';
        //         }
        //        },1000)
               $('.yz').html('您已注册成功，请<a href="./login.html">登录</a>').css({color: 'black'});
           }else{
            $('.yz').html('您注册的账号已存在，请重新注册');
           }
       }
    
       
   })
   

})







function setVc(str) {
    var vc = '';
    while (vc.length < 6) {
        var num = parseInt(Math.random() * str.length);

        if (vc.indexOf(str[num]) === -1) {
            vc += str[num];
        }
    }
    return vc;
}



  
var cook2 = getCookieObj(document.cookie);
let cook3 =0;
for(var key in cook2){
   cook3 = cook2[key]
}
console.log(cook3);
if(cook3==null){
$(".login").css('display', 'block');
$(".user").css('display','none');
}else{        

$(".login").css('display', "none");
$(".user").html(cook3);
$(".user").css('display','block');
}
$('.quit').click(function () {
     let tc = window.confirm('是否确认退出登录');
     if (tc == true) {
         setCookies('login', '222', -1);
     }


 })
 $('.login').click(function () {

     var cook1 = getCookieObj(document.cookie);
     console.log(cook1);
     if (cook1.login === '1') {
         window.alert('您已登陆过了，请不要重复登录');
     } else {
         window.location.href = './login.html';
     }

 })
 $('.shooping').click(function () {
     var cook2 = getCookieObj(document.cookie);
     console.log(cook2);
     if (cook2.login === undefined) {
         let dl = window.confirm('您还没有登录，点击确认跳转登录页面');
         if (dl == true) {
             window.location.href = './login.html';

         }
     }
     else {
         window.location.href = './shooping.html';
     }


 })

const oli = document.querySelector('#header ul .ll');
const ool  = document.querySelector('#header .ll .u2');

 $( oli).click(function(){
 $(ool).slideToggle( 500 , )
 } )



const oli2 = document.querySelector('#fix ul .ll');
const ool2  = document.querySelector('#fix .ll .u2');

 $( oli2).click(function(){
 $(ool2).slideToggle( 500 , )
 } )




$(window).scroll(function(){
 
 if($(window).scrollTop() > 200){
    
     $('#fix').slideDown();
    
 }else{
    
     $('#fix').slideUp();
     
 }
})


