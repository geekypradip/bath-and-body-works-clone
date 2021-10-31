let n=(v)=>{
   let store= document.querySelectorAll('.newAndNow .child')
   for(let i in store){
       if(i==v) store[v].style.display="block";
       else store[i].style.display="none";
   }
    
}
let b=(v)=>{
  let store=  document.querySelectorAll('.bodycare .child')
  for(let i in store){
    if(i==v) store[v].style.display="block";
    else store[i].style.display="none";
}
}
let h=(v)=>{
   let store= document.querySelectorAll('.handSoapSanatizer .child')
   for(let i in store){
    if(i==v) store[v].style.display="block";
    else store[i].style.display="none";
}
}
  let ho=(v)=>{
     let store=  document.querySelectorAll('.homeFragrance .child')
     for(let i in store){
        if(i==v) store[v].style.display="block";
        else store[i].style.display="none";
    }
  }  
   let g=(v)=>{

   let store= document.querySelectorAll('.gift .child')
   for(let i in store){
    if(i==v) store[v].style.display="block";
    else store[i].style.display="none";
}
   }

let patanehi=(v,e)=>{
    let l=document.querySelectorAll('.link')
    for(let i=0;i<l.length;i++){
        l[i].style.borderBottom="none";
    }
    console.log(l)
    e.style.borderBottom="3px solid blue";
    let store= document.querySelectorAll('.pp');
    // let dropdown= document.querySelectorAll('.dropdown')
    if(v==="empty"){
        for(let i in store){
           
                store[i].style.display="none";
                
             }
        }
    
    for(let i in store){
        if(i==v){store[v].style.display="block";store[v].style.display="flex"} 
        else {
            store[i].style.display="none";
            
         }
    }
}
// let dis=(e)=>{
//     document.querySelectorAll('.child')[e] 
// }
//                                    