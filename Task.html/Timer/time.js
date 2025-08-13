let count=3;

setInterval( 
    function inter(){
        if(count<0)return;
        document.querySelector('.para').innerHTML=count--;
          
        
    },1000
)

