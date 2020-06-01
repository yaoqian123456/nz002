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



     const cateArr = JSON.parse(localStorage.getItem('cart'));
    console.log(cateArr)

    setPage(cateArr);

    function setPage(array) {
    
      let NUM = 0;
  
      let PAY = 0;


      let str = `

      <div class="panel panel-info ">
       
        <div class="panel-footer">
          <ul class="cart-list">`;

     
      array.forEach(function (item) {
        str += `<li class="cart-item clear">
                  <div class="left">
                    <input name="checked" goods_id="${item.goods_id}" type="checkbox" ${item.buy === true ? 'checked' : ''}>
                  </div>
                  <div class="right">
                    <div class="media">
                      <div class="media-left">
                        <a href="#">
                          <img class="media-object" src="${item.goods_small_logo}" alt="...">
                        </a>
                      </div>
                      <div class="media-body">
                        <h4 class="media-heading">${item.goods_name}</h4>
                        <p>
                          <i class="glyphicon glyphicon-yen"></i>
                          <span>${item.goods_price}</span>
                        </p>
                        <div class ="flx">
                        <div class="btn-group pull-right" role="group" aria-label="...">
                          <button type="button" name="lost" goods_id="${item.goods_id}" class="btn btn-default" ${ item.num == 1 ? 'disabled' : '' }>-</button>
                          <button type="button" class="btn btn-default" disabled>${item.num}</button>
                          <button type="button" name="odd" goods_id="${item.goods_id}" class="btn btn-default" ${ item.num == item.goods_number ? 'disabled' : '' }>+</button>
                        </div>
                        <button name="del" goods_id="${item.goods_id}"  class="del btn btn-danger">删除</button>
                      </div>
                      </div>
                    </div>
                  </div>
                </li>`;
      
      
        if(item.buy === true){
        
          NUM += item.num;  // 数量是 += 累加
          PAY += item.num * item.goods_price;   // 钱数是 数量*单价
        }
      
      })

     
      str += `</ul>
        </div>
      </div>
      </div>
      <div class = "sum">
        <p class = "p5"> 共计<span>${NUM}</span>件商品， 合计<span>${ parseInt(PAY*100)/100}元</span></p>
        <div class = 'rrit'>
        <div class = 'gou'><a href="./index.html">继续购物</a></div>
        <p class = "p3">立即购买</p>  
        </div>
      
      </div>
      
      `;


      $('#cart').html(str);

    };

    

    const oDiv = document.querySelector('#cart');

    oDiv.addEventListener('click' , function(e){
    
     

      if(e.target.getAttribute('name') === 'checked'){
      
        let goods_id = e.target.getAttribute('goods_id');
        cateArr.forEach(function(item){
        
          if(item.goods_id === goods_id){
       
            item.buy = $(e.target).prop('checked');
          }
        })

      }

    
      if(e.target.getAttribute('name') === 'del'){
     
        let goods_id = e.target.getAttribute('goods_id');
        cateArr.forEach(function(item , key){
      
          if(item.goods_id === goods_id){
         
            cateArr.splice(key,1);
          }
        })
      }

     
      if(e.target.getAttribute('name') === 'odd'){
        
        let goods_id = e.target.getAttribute('goods_id');
        cateArr.forEach(function(item , key){
       
          if(item.goods_id === goods_id){
          
            item.num++;
          }
        })
      }

   
      if(e.target.getAttribute('name') === 'lost'){
     
        let goods_id = e.target.getAttribute('goods_id');
        cateArr.forEach(function(item , key){
         
          if(item.goods_id === goods_id){
        
            item.num--;
          }
        })
      }

    
      setPage(cateArr);
     
      localStorage.setItem('cart' , JSON.stringify(cateArr) );
    })

    






  