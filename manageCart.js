let addProductToCart=(prodId,prodQuan)=>{
    let cartArr=[]
    let cartobj=
    {
        id:prodId,
        quantity:prodQuan
    }
    if(!JSON.parse(localStorage.getItem('bathandshopcart'))){  
    cartArr.push(cartobj)
    localStorage.setItem('bathandshopcart',JSON.stringify(cartArr))
    }
    else{
        let fetchcartArr=JSON.parse(localStorage.getItem('bathandshopcart'))
        for(let i in fetchcartArr){
            if(prodId===fetchcartArr[i].id)
            return true;
            // cartArr.push(fetchcartArr[i])
        }
        for(let j in fetchcartArr){
            // if(prodId===fetchcartArr[i].id)
            // return false;
            cartArr.push(fetchcartArr[j])
        }
        cartArr.push(cartobj)
        localStorage.setItem('bathandshopcart',JSON.stringify(cartArr));
    }
    
}
export default addProductToCart;
