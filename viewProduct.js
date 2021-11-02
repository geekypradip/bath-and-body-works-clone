document.body.onload=()=>{
    let productId=localStorage.getItem("productId")
    fetch(`http://localhost:3000/product/${productId}`)
.then((res)=>{
    return res.json()
})
.then((res)=>{
  console.log(res)
  createUi(res)
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
}
