class SetLoop{
    constructor(ele){
        this.ele = ele;
        this.oul = ele.querySelector('ul');
        this.oulli = ele.querySelectorAll('ul li');
        this.ools = ele.querySelector('ol');
        this.btu1 = ele.querySelector('.btu1');
        this.btu2 = ele.querySelector('.btu2');

        this.liw = parseInt(window.getComputedStyle(this.oulli[0]).width);
        this.boll = '初始值';
        this.times;
        this.index = 1;
    }


    
 move(eles,obj,call){
    for(var type in obj){
        var old = parseInt(window.getComputedStyle(eles)[type]);
        var time = setInterval(function(){
            var val = (obj[type] - old)/3;
            val = val >0? Math.ceil(val): Math.floor(val);
            old += val;
            eles.style[type] = old + 'px';
            if(old == obj[type]){
                clearInterval(time);
                call();
            }
        },100)
    }
 }

 ollis(){
    var str = '';
    this.oulli.forEach(function(v,key){
       if(key == 0){
           str += `<li class = "active" name = '${key+1}' ></li>`;
       }else{
           str += `<li name = '${key+1}'></li>`;
    }
    })
    this.ools.innerHTML = str;
}



//复制克隆

 cass(){
    var lif = this.oulli[0];
    var lis = this.oulli[this.oulli.length-1];
    var first = lif.cloneNode(true);
    var last = lis.cloneNode(true);
    this.oul.appendChild(first);
    this.oul.insertBefore(last,lif);
    this.oul.style.width =((this.oulli.length+2)* this.liw ) + 'px';
    this.oul.style.left = -this.liw + 'px';
}

 // 轮播图
 show(){
    this.times = setInterval(()=>{
        this.index++;
     this.move(this.oul,{left: -this.index*this.liw},()=>{
         this.stopss()
     })
    },5000)
 
 }

//运动函数第三个参数的执行
 stopss(){
    this.boll = '初始值';
    if(this.index == this.oulli.length+1){
        this.index = 1;        
        this.oul.style.left = -this.index* this.liw + 'px';

    }else if(  this.index == 0){
        this.index = this.oulli.length;
        this.oul.style.left = -this.index* this.liw + 'px';

    }
     var olli = document.querySelectorAll('ol li');
    //改变光标方法一
    olli.forEach(function(v,k){
        v.style.backgroundColor = 'rgba(255,255,255,0.6)';
    })
    olli[this.index-1].style.backgroundColor = 'red';

    //改变光标方法二
    // olli.forEach(function (item) {
    //     item.className = '';
    //     if (item.getAttribute('name') == index) {
    //         item.className = 'active';
    //     }
    // })

}


//鼠标移入，移出

 overout(){
    

  
    this.ele.addEventListener('mouseover',()=>{
        clearInterval(this.times)
    });
   
    this.ele.addEventListener('mouseout',()=>{
        this.show();
    });



}



//点击ol中的li

focus(){
    this.ools.addEventListener('click',(e)=>{
        if(e.target.tagName == 'LI')
        if(this.boll != '初始值'){
            return;
        }
        this.boll = '改变值';
        this.index = e.target.getAttribute('name')-0;
        this.move(this.oul,{left: -this.index*this.liw},()=>{
            this.stopss()
        })

    })
}



// 点击左右键切换
 funs(){
    this.btu1.addEventListener('click',()=>{
        if(this.boll != '初始值'){
            return;
        }
        this.boll = '改变值';
         this.index--;
        this.move(this.oul,{left: -this.index*this.liw},()=>{
            this.stopss()
        })
    })
    this.btu2.addEventListener('click',()=>{
        if(this.boll != '初始值'){
            return;
        }
        this.boll = '改变值';
        this.index++;
        this.move(this.oul,{left: -this.index*this.liw},()=>{
            this.stopss()
        })
    })
}



//页面打开或者隐藏
 hidden(){
    
    document.addEventListener('visibilitychange' , ()=>{   
        if(document.visibilityState === 'hidden'){
            clearInterval(this.times);
        }else if(document.visibilityState === 'visible'){
          this.show();
        }
    })
}

}