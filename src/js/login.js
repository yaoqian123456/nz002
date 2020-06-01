   
          $('.ent').click(function(){
         
            if($('.in1').val() === ''){
                $('.s1').html('您的账号输入为空');
                return;
            }
          if($('.in2').val() == ''){
              $('.s2').html('您输入的密码为空');
              return;
          }

          var usernames =  $('.in1').val();
          var userpass =   $('.in2').val();
          $.ajax({
              url : '../php/login.php',
              type : 'post',
              data : {username : usernames, userpwd: userpass},
              dataType : 'json',
              success:function(res){
                  if(res == 1){
                      setCookies( "login",usernames, 7*24*60*60);
                      window.alert('您登陆成功，请点击确定返回');
                      let str = decodeURIComponent(window.location.search);
                     str = str.substr(1);
                      window.location.href = str;
                  }else{
                     $('.yz').html('您登陆的账号或密码有误，请重新登陆');
                  }
              }

          })
         
        })



                 
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