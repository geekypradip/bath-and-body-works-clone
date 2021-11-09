let listofcartProd=[]
  if(JSON.parse(localStorage.getItem('bathandshopcart'))){
    listofcartProd=JSON.parse(localStorage.getItem('bathandshopcart'));
    craeteCart(listofcartProd);
  }
  else
  alert("cart is empty!")
  
function craeteCart(listofcartProd){
      if(listofcartProd.length!==0){
          for(let i in listofcartProd)
          fetchui(listofcartProd[i])
      }
  }
  function fetchui(obj){
      let id=obj.id;
      let quantity=obj.quantity;
      fetch(`http://localhost:3000/product/${id}`)
      .then((res)=>{return res.json()})
     .then((res) => {console.log(res) ;createUi(res,quantity)})
     .catch((error)=>console.log(error))
  }
  
  function createUi(product,q){
      let maincard=document.createElement('div');
      maincard.className="cartfeathersHeading bg";
      let item=document.createElement('div');
      item.className='item';
        let prodImagHolder=document.createElement('div');
                prodImagHolder.className="prodImg";
                let imgcaualdiv=document.createElement('div');
                let img = document.createElement('img');
                img.className="im";
                img.src=product.productImage;
                imgcaualdiv.append(img);prodImagHolder.append(imgcaualdiv);
        let productDetails=document.createElement('div');
                productDetails.className="proddeatis";
                let productTitle=document.createElement('div');
                productTitle.className='prodtitle';
                productTitle.textContent=product.name;
                let productCategory=document.createElement('div');
                productCategory.className='prodCategory';
                productCategory.textContent=product.category;
                let promotion = document.createElement('div');
                promotion.className='promotion';promotion.textContent='promotional details';
                productDetails.append(productTitle,productCategory,promotion);
     item.append(prodImagHolder,productDetails)
     let price=document.createElement('div');
     price.className='price';
     price.textContent=`$ ${product.price}`;
     let qty=document.createElement('div');
     qty.className='qty';
        let control=document.createElement('div');
        control.className='control';
        let decrese=document.createElement('div');
            decrese.className='decrese';
            decrese.textContent='-';
        let valueholder=document.createElement('div');
            valueholder.className='valueholder';
            valueholder.textContent=q;
        let increse=document.createElement('div');
            increse.className='increse';
            increse.textContent='+';
        control.append(decrese,valueholder,increse);
        decrese.addEventListener('click',()=>quantityChanger(-1));
        increse.addEventListener('click',()=>quantityChanger(1));
        let avalaible=document.createElement('div');
        avalaible.className='avalaible';
        avalaible.textContent='avalaible';
    qty.append(control,avalaible);
    let totalprice=document.createElement('div');
    totalprice.className='totalprice';
        let flex=document.createElement('div');
        flex.className='flex';
            let finalprice=document.createElement('div');
            finalprice.textContent=`$ ${product.price*q}`;
            let remove=document.createElement('div');
            remove.className='remove';
                let removeSign =document.createElement('div');
                removeSign.textContent='X';
                removeSign.addEventListener('click',(e)=>{
                    console.log(product.id)
                   
                    e.target.parentNode.parentNode.parentNode.parentNode.remove() 
                    deletecart(product.id)
                })
            remove.append(removeSign)
                
        flex.append(finalprice,remove)
    totalprice.append(flex)
maincard.append(item,price,qty,totalprice)
document.querySelector('.cartBagContainer').append(maincard)


function quantityChanger(value){
    if(value===-1&&parseInt(valueholder.textContent)==1)return;
    valueholder.textContent=parseInt(valueholder.textContent)+value;
    let arr=[]
    if(JSON.parse(localStorage.getItem('bathandshopcart'))){
arr=JSON.parse(localStorage.getItem('bathandshopcart'));
console.log(arr)
            for(let index in arr){
                if(arr[index].id==product.id){
                    console.log("matched")
                    arr[index].quantity=valueholder.textContent;
                }
            }
            localStorage.setItem("bathandshopcart",JSON.stringify(arr))
    }  
      finalprice.textContent=`$ ${product.price*valueholder.textContent}`

}
  }
  
function deletecart(deletequery){
    let arr=[]
    if(JSON.parse(localStorage.getItem('bathandshopcart'))){
arr=JSON.parse(localStorage.getItem('bathandshopcart'));
console.log(arr)
            for(let index in arr){
                if(arr[index].id==deletequery){
                    console.log("matched")
                    arr.splice(index,1)
                    console.log("deleted")
                }
            }
            localStorage.setItem("bathandshopcart",JSON.stringify(arr))
    }
}

    // popup start
// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.querySelectorAll(".checkOutbtn")[0];
var btn1 = document.querySelectorAll(".checkOutbtn")[1];
// Get the <span> element that closes the modal
    btn.addEventListener('click',()=>{
        modal.style.display = "block";
    })
    btn1.addEventListener('click',()=>{
        modal.style.display = "block";
    })
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// document.querySelector('.continueShoping').addEventListener('click',()=>{
//     modal.style.display = "none";
// })
// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
// document.querySelector('.gotoCart').onclick=function() {
//     window.location.href="cart/cart.html"
// }
    // popup end
    var success = document.getElementById("success");
    document.querySelector('.proceed').onclick = ()=>{
        success.style.display="block";
        localStorage.removeItem("bathandshopcart")
        setTimeout(() => {
            window.location.href="/hustle/viewProduct.html";
        }, 2000);
    }