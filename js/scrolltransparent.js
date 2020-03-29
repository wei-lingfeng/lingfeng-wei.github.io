window.onscroll=function(){
    var h =document.documentElement.scrollTop||document.body.scrollTop;
    console.log(h*2.5);      //控制台查看监听滚动  
    var headerTop =document.getElementById("header");            
    if( h >=40) {       //header的高度是40px;     
        headerTop.style.background="#fff";            
        headerTop.style.color="rgba(66,65,66,1)";            
    }else{    
        if(h<10){
            //40*2.5=100;这样透明度就可以由0渐变到100%；
            headerTop.style.background="rgba(255,255,255,0.0"+h*2.5+")";  
            headerTop.style.color="rgba(66,66,66,0.0"+h*2.5+")";            
        }else if(h>10 && h<= 40){
            headerTop.style.background="rgba(255,255,255,0."+h*2.5+")"; 
            headerTop.style.color="rgba(66,66,66,0."+h*2.5+")";            

        }            

    }        
};