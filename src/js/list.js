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
  
    const arr = str.split('=');



   
    getAjax(1);

   
    function getAjax(page){
        $.ajax({
          url : '../php/goods_list.php',
         
          data : {
            cat_one_id : arr[1], 
            page : page,          
            line : 12,             
          },
          type : 'get',
          dataType : 'json',
          success : function(res){
            console.log(res);
           
            let str = '';
            res.forEach(function(item){
              str += `<li>
           <div class="name">${item.cat_one_id}</div>
           <div class="pic"><a href="detail.html?goods_id=${item.goods_id}"><img src="${item.goods_big_logo}"></a></div>
           <div class="details"><a href= "./detail.html?goods_id=${item.goods_id}">查看商品详情</a></div>
           <div class="describe">${item.goods_name}</div>
           <div class="price">￥${item.goods_price}</div>
           </li>`
                
            })
          
            $('.sol').html(str);

            
            $('.M-box').pagination({
              mode: 'fixed',               // 固定显示的页面数量
              pageCount : res[0].sumPage,  // 总页数 
              totalData : res[0].row,      // 总数据数量
              current : res[0].page,       // 当前页数
              showData : 12,                // 每页数据数量
              activeCls : 'active',        // 点中标签的样式
              coping: true,                // 显示首页末页
              homePage: '首页',            // 首页的文字内容
              endPage: '末页',             // 末页的文字内容
              prevContent: '上页',         // 上页的文字内容
              nextContent: '下页',         // 下页的文字内容
              callback : function(result){    // 点击的时候,触发的程序
                // 获取当前的页数
                let p = result.getCurrent();  // 获取当前点击的按钮,所表示的下一次请求的页数
                // 这个页数,就是下次请求的参数
                getAjax(p);                   // 点击时,再次发送ajax请求,参数是点击的按钮,表示的页数
              }
            });
          }
        })
    }

