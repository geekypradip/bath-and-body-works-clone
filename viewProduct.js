import addProductToCart from "./manageCart.js";
var flag
document.body.onload=()=>{

    // popup start
// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("cartBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
document.querySelector('.continueShoping').addEventListener('click',()=>{
    modal.style.display = "none";
})
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
document.querySelector('.gotoCart').onclick=function() {
    window.location.href="cart/cart.html"
}
    // popup end
    
document.getElementById('cartDrc').onclick=function(){controler(-1)}
document.getElementById('cartInc').onclick=function(){controler(1)}
let cartvalue=parseInt(document.getElementById('cartValue').innerText) 
function controler(v){
    
if(v===-1&&cartvalue===1)
return;
cartvalue+=v;
document.getElementById('cartValue').innerText=cartvalue;
document.querySelector('.popqvalue').textContent=`Quantity:${cartvalue}`;
}
document.getElementById('fc').addEventListener('click',(e)=>{
    viceVersa(e)
});
document.getElementById('oc').addEventListener('click',(e)=>{
    
    viceVersa(e)
})
let viceVersa=(e)=>{
  console.log(e.target.className);
  if(e.target.className==="fa fa-angle-down no"){
       e.target.className="fa fa-angle-up yes";
       if(e.target.id==="oc"){
            document.querySelector('.overviewData').style.display="block";
            document.getElementById('fc').className="fa fa-angle-down no";
            document.querySelector('.fragranceData').style.display="none";
       }
       
        else{
            document.querySelector('.fragranceData').style.display="block";
            document.getElementById('oc').className="fa fa-angle-down no";
            document.querySelector('.overviewData').style.display="none";
        }
        
  }
 
  else{
    e.target.className="fa fa-angle-down no";
    if(e.target.id==="oc")
    document.querySelector('.overviewData').style.display="none";
    else
    document.querySelector('.fragranceData').style.display="none";
  }
 
//   console.log(document.querySelector('.fragranceData').style.display=="block")
}
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
    //   console.log("r"+responce);
      console.log(flag)
      flag=responce;
      console.log("after"+flag)
      createRecomend(responce,res)
  }).catch((error)=>console.log(error))
  createUi(res);
  // When the user clicks the button, open the modal 
btn.onclick = function() {
    let istExist=addProductToCart(localStorage.getItem("productId"),cartvalue)
    if(istExist){
            alert("product alreay in cart! you can change product quantity on cart page")
        return;
    }
    modal.style.display = "block";
  }
}).catch((e)=>{
    console.log(e)
})


let createUi=(product)=>{//making ui for popup and main product view
   document.getElementById('productImage_big').src=product.productImage;
   document.getElementById('popImg').src=product.productImage;
   document.getElementById('productImage_small').src=product.productImage;
   document.querySelector('.producttitle').textContent=product.name;
   document.querySelector('.popTitle').textContent=product.name;
   document.querySelector('.productCategory').innerHTML=`${product.category}<br>${product.subCategory}`;
   document.querySelector('.popcategory').innerHTML=`${product.category}<br>${product.subCategory}`;
   document.querySelector('.rating').innerHTML=null;
   for(let i=0;i<product.rating;i++){
       let span=document.createElement('span');
       span.className="fa fa-star checked"
    document.querySelector('.rating').append(span)
   }
   document.querySelector('.productPrice').textContent=`$ ${product.price}`;
   document.querySelector('.popPrice').textContent=`$ ${product.price}`;
   document.querySelector('.productQuantity').textContent=product.quantity;
   document.querySelector('.popQuentity').textContent=product.quantity;
   document.querySelector('.fragranceData').textContent=product.fragment;
   document.querySelector('.overviewData').textContent=product.overview;
  cartvalue=1;
  document.getElementById('cartValue').innerText=cartvalue;
   //console.log(cartvalue);
   document.querySelector('.popqvalue').textContent=`Quantity:${cartvalue}`;
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

}