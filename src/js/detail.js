var cook2 = getCookieObj(document.cookie);
       let cook3 =0;
       for(var key in cook2){
           cook3 = cook2[key]
       }
       console.log(cook3);
    if(cook3==null){
        $(".login").css('display', "block");
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





    let str = decodeURIComponent(window.location.search);
    str = str.substr(1);
    let result = [];
  
    const arr = str.split('=');
    console.log(arr);
    $.ajax({
      url:'../php/goods_detail.php',
      type:'post',
      data:{goods_id : arr[1]},
      dataType : 'json',
      success : function(res){

        console.log(res);

        
        result = res;
      

       
        let str = '';
        str = `  <div class="info">商品详细信息</div>
    <div class="narrate">
        <div class="pic"><img src="${res.goods_small_logo}"></div>
        <div class="rit">
            <div class="text">${res.goods_name}</div>
            <div class="pre">￥${res.goods_price}</div>
            <div class="num">购买数量*1</div>
            <div class="buy"><span class="span1">立即购买</span><span class="span2"><a href="#">加入购物车</a></span></div>
        </div> 
    </div>
    <div class="inf">
        <div>商品详细信息</div>
        <div>相关商品</div>
    </div>
    <div class="pic2"> ${res.goods_introduce}</div>`;
            
           
            $('#detal').html(str);
      }
    })

   
    $('#detal').on('click' , '.span2' , function(){

     
        
        const cookieObj = getCookieObj(document.cookie);

        if( cookieObj.login === undefined ){
        
            let bool = window.confirm('您还没有登录,点击确定,跳转登录页面');
            if(bool === true){
           
              window.location.href = `./login.html?${window.location.href}`;
            }else{
            
              return false;
            }
        }else if(cookieObj.login === cook3){

            window.alert('加入购物车成功');
            window.location.href = './shooping.html';

           
            
            if(localStorage.getItem('cart') === null  ){
            
              result.num = 1;     // 购买数量信息,第一次默认是1
              result.buy = true   // 默认当前商品是购买状态
            
            
              var arr = [];
            
              arr.push(result);
              
            }else{
             
               let bool = true;

            
              var arr = JSON.parse(localStorage.getItem('cart')) ;

             
              arr.forEach(function(item){
               
                if(item.goods_id === result.goods_id){
                    item.num++;
                 
                     bool = false;
                }
              
              })
              
              
              if(bool === true){
                result.buy = true;
                result.num = 1;
                arr.push(result);  
              
                
              }

            }

            
            localStorage.setItem('cart' , JSON.stringify(arr) );
           
        }
    })



   
   

    