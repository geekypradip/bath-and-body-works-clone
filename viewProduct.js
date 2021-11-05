var flag
document.body.onload=()=>{
    let productId=localStorage.getItem("productId")
    fetch(`http://localhost:3000/product/${productId}`)
.then((res)=>{
    return res.json()
})
.then((res)=>{
  console.log(res)
  //createUi(res);
  fetch(`http://localhost:3000/product?category=${res.category}&_sort=price&_order=desc`)
  .then((responce)=>{
      return responce.json()
  }).then((responce)=>{
      console.log("r"+responce);
      console.log(flag)
      flag=responce;
      console.log("after"+flag)
      createRecomend(responce,res)
  }).catch((error)=>console.log(error))
  createUi(res);
}).catch((e)=>{
    console.log(e)
})

}
let createUi=(product)=>{
   document.getElementById('productImage_big').src=product.productImage;
   document.getElementById('productImage_small').src=product.productImage;
   document.querySelector('.producttitle').textContent=product.name;
   document.querySelector('.productCategory').innerHTML=`${product.category}<br>${product.subCategory}`;
   document.querySelector('.rating').innerHTML=null;
   for(let i=0;i<product.rating;i++){
       let span=document.createElement('span');
       span.className="fa fa-star checked"
    document.querySelector('.rating').append(span)
   }
   document.querySelector('.productPrice').textContent=`$ ${product.price}`;
   document.querySelector('.productQuantity').textContent=product.quantity;
   document.querySelector('.fragranceData').textContent=product.fragment;
   document.querySelector('.overviewData').textContent=product.overview;
   //console.log(flag)
  createRecomend(flag,product)
}
let createRecomend=(products,viewingProduct)=>{
    /*static solution*/
    // for(let i=0;i<4;i++){
    //     if(products[i].id!==viewingProduct.id){
    //         document.querySelectorAll('.poster>img')[i].src=products[i].productImage;
    //    document.querySelectorAll('.recoProdName')[i].textContent=products[i].name;
    //    document.querySelectorAll('.recoProdcat')[i].textContent=products[i].category;
    //    document.querySelectorAll('.recoPrice')[i].textContent=`$ ${products[i].price}`;
    //    document.querySelectorAll('.recomendCard')[i].addEventListener('click',()=>{
    //        createUi(products[i])
    //    })
    // }   
   
    // }
    /*alernative dynamic solution*/
    document.querySelector('.recomendProductsHolder').innerHTML=null;
    for(let i in products){
       
        if(products[i].id!==viewingProduct.id){
            let recomendCard= document.createElement('div');
            recomendCard.className='recomendCard';
            let poster= document.createElement('div');
            poster.className="poster";
            let img = document.createElement("img");
            img.src=products[i].productImage;
            poster.append(img);
            let recoProdName= document.createElement('div');
            recoProdName.className="recoProdName";
            recoProdName.textContent=products[i].name;
            let recoProdcat=document.createElement('div');
            recoProdcat.className="recoProdcat lightText";
            recoProdcat.textContent=products[i].category;
            let recoPrice= document.createElement('div');
            recoPrice.className="recoPrice lightText";
            recoPrice.textContent=`$ ${products[i].price}`;
            let recoOffer= document.createElement('div');
            recoOffer.className="recoOffer";
            recoOffer.textContent=`including exited offer`;
            recomendCard.append(poster,recoProdName,recoProdcat,recoPrice,recoOffer);
            document.querySelector('.recomendProductsHolder').append(recomendCard);
            // console.log("hii")
            recomendCard.addEventListener('click',()=>{
                window.scrollBy(0,-1000)
                     createUi(products[i]);
                     localStorage.setItem("productId",products[i].id);
                    //  window.location.href="./viewProduct.html"
              })
        }
    }
}
let i=setInterval(()=>{
    document.querySelector('.recomendProductsHolder').scrollBy(10,0);
},50);
let delay=7000;
setInterval(()=>{
    // delay/=10;
    clearInterval(i)
    document.querySelector('.recomendProductsHolder').scrollBy(-40,0);
},delay);
document.getElementById('right').addEventListener('click',()=>{
   scr(200,0) 
})
document.getElementById('left').addEventListener('click',()=>{
    scr(-200,0)
})
let scr=(x,y)=>{
    document.querySelector('.recomendProductsHolder').scrollBy(x,y);
    console.log("scrolling..")
}

