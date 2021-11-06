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
var tog = document.getElementById("tog");
var count = 1;
        const fnDe = async ()=>{
            let input = tog.value;
            let data = await fetch(`http://localhost:3000/product?q=${input}&_limit=4&_page=${1}`)
            let res = await data.json();
            console.log(res)
            createDeb(res)
            // console.log(product)
        }
        function deBouncer(fn,delay){
            let id;
            return ()=>{
                id && clearTimeout(id);
                id = setTimeout(()=>fn(),delay);
            }
        }
        function createDeb(data){
            let dis = document.getElementById("dis");
            dis.innerHTML = "";
            // let nextBtn = document.createElement("button");
            // nextBtn.innerText = ">>";
            // nextBtn.className = "next";
            for(let id of data){
                let div = document.createElement("div");
                let img = document.createElement("img");
                img.src = id.productImage;
                let span2 = document.createElement("span");
                let span = document.createElement("span");
                span.innerText = id.name;
                let span1 = document.createElement("span");
                span1.innerText = `$${id.price}`;
                span1.className = "amt";
                span2.append(span,span1)
                let span3 = document.createElement("span");
                let button = document.createElement("button");
                button.onclick=()=>{
                    // alert("got it")
                    localStorage.setItem("productId",id.id)
                    window.location.href = "../viewProduct.html"
                }
                button.innerText = "View Product"
                span3.innerHTML = `<i class="material-icons">favorite</i>`
                div.append(img,span2,span3,button)
                dis.append(div)
            }
            dis.style.display = "flex";
            // dis.append(nextBtn)
        }
        tog.addEventListener("keydown",deBouncer(fnDe,1000))
        function check() {
            let display = document.getElementById("dis");
            if( tog.value == ""){
                display.style.display = "none";
            }
        }
        const funCheck = setInterval(check,500)
        window.addEventListener("load",funCheck)
// let dis=(e)=>{
//     document.querySelectorAll('.child')[e] 
// }
//                                    