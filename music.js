document.addEventListener("DOMContentLoaded",function(){
    console.log('helslo')

    const wh1=new Audio("key01.ogg");
    const wh2=new Audio("key03.ogg");
    const wh3=new Audio("key05.ogg");
    const wh4=new Audio("key06.ogg");
    const wh5=new Audio("key08.ogg");
    const wh6=new Audio("key10.ogg");
    const wh7=new Audio("key12.ogg");
    const wh8=new Audio("key13.ogg");
    const wh9=new Audio("key15.ogg");
    const wh10=new Audio("key17.ogg");
    const wh11=new Audio("key18.ogg");
    const wh12=new Audio("key20.ogg");
    const wh13=new Audio("key22.ogg");
    const wh14=new Audio("key24.ogg");

    const bh1=new Audio("key02.ogg");
    const bh2=new Audio("key04.ogg");
    const bh3=new Audio("key07.ogg");
    const bh4=new Audio("key09.ogg");
    const bh5=new Audio("key11.ogg");
    const bh6=new Audio("key14.ogg");
    const bh7=new Audio("key16.ogg");
    const bh8=new Audio("key19.ogg");
    const bh9=new Audio("key21.ogg");
    const bh10=new Audio("key23.ogg");

    document.querySelectorAll('.mypiano').forEach(function(button){
        console.log('helsloa')
        button.onclick=function(){ 
            //console.log('hello');
            let id=button.id;

            if(id==="w1"){

                wh1.play()
            }

            else if(id==="w2"){
                wh2.play()
            }

            else if(id==="w3"){
                wh3.play()
            }

            else if(id==="w4"){
                wh4.play()
            }

            else if(id==="w5"){
                wh5.play()
            }

            else if(id==="w6"){
                wh6.play()
            }

            else if(id==="w7"){
                wh7.play()
            }

            else if(id==="w8"){
                wh8.play()
            }

            else if(id==="w9"){
                wh9.play()
            }

            else if(id==="w10"){
                wh10.play()
            }
            
            else if(id==="w11"){
                wh11.play()
            }

            else if(id==="w12"){
                wh12.play()
            }

            else if(id==="w13"){
                wh13.play()
            }

            else if(id==="w14"){
                wh14.play()
            }

            
        

    }

})

    document.querySelectorAll('.myblack').forEach(function(button){
        
        button.onclick=function(){ 
            //console.log('hello');
            let id=button.id;

            if(id==="b1"){

                bh1.play()
            }

            else if(id==="b2"){
                bh2.play()
            }

            else if(id==="b3"){
                bh3.play()
            }

            else if(id==="b4"){
                bh4.play()
            }

            else if(id==="b5"){
                bh5.play()
            }

            else if(id==="b6"){
                bh6.play()
            }

            else if(id==="b7"){
                bh7.play()
            }

            else if(id==="b8"){
                bh8.play()
            }

            else if(id==="b9"){
                bh9.play()
            }

            else if(id==="b10"){
                bh10.play()
            }
        }
    })




    
})