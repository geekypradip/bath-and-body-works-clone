import postdata from "./postData.js"
/*GLOBAL FLAGS*/
let categoryChecker=false,urlChecker=false;
document.getElementById('category').addEventListener('click',(e)=>{
    // console.log(e.target[0])
    // alert(e.target.value)
    // document.getElementById('subCategory').innerHTML=null;
    //********************************************************************
    /*lists of subcategory*/
    const bodycare=["Shower Body Wash","Body Scrub","Bar Soap","Shampoo & Conditioner","Body Lotion","Body Cream","Hand Cream","Lip Gloss & Balms"," Body Sprays & Mists","Perfume & Cologne","Body Wash & Shower Gel","Body Scrub","Moisturizers","Mists & Sprays"," Body Wash & Shower Gel","Body Spray & Cologne","Body Care Gift Sets"], hand_shop_and_sanitizers=["Foaming Soaps","Gel & Nourishing Soaps","Soap Holders","PocketBac Sanitizers","Sanitizer Sprays","Full-Size Sanitizers","Hand Sanitizer Holders","hand shop and sanitizers gift sets"], home_fragrance=[" 3-Wick Candles","Single Wick Candles","Candle Holders & Accessories"," Wallflowers Plugs","Wallflowers Refills","Room Sprays & Mists","Car Fragrance","Candle Gift Sets"];
    if(e.target.value!=="null"){
        categoryChecker=e.target.value;
        e.target[0].disabled="true";
        document.getElementById('subCategory').innerHTML=null;
        let liLists=createOptions(e.target.value,bodycare,hand_shop_and_sanitizers,home_fragrance);
        console.log(liLists)
        document.getElementById('subCategory').append(liLists)
    }
})
let createOptions=(v,bodycare,hand_shop_and_sanitizers,home_fragrance)=>{
 if(v=="bodycare")
 return letsgo(bodycare);
 if(v=="hand_shop_and_sanitizers")
 return letsgo(hand_shop_and_sanitizers)
 if(v=="home_fragrance")
 return letsgo(home_fragrance)
}
let letsgo=(listsItem)=>{
    let fragment=document.createDocumentFragment();
    listsItem.forEach(element => {
        let option=document.createElement("option");
        option.value=element;
        option.textContent=element;
        fragment.append(option)
    });
    return fragment;
}
let img=document.createElement('img');
document.getElementById('imgPreview').addEventListener('click',(e)=>{
    // console.log(e.target.parentNode)
    if(!document.getElementById('poster').value)
{
    document.getElementById('poster').style.borderBottom="3px solid red";return;
}
document.getElementById('poster').style.borderBottom="1px solid #000";
/*checking the product image url valid or not*/
fetch(document.getElementById('poster').value)
.then((res)=>{
    console.log(res.status)
    if(res.status>400||res.status<200){img.alt="Image not found!";urlChecker=false;return}
    
})
.catch((e)=>{
    console.log(e)
    img.alt="unsupported Image!";
})
urlChecker=document.getElementById('poster').value;
img.style.width="150px";img.src=document.getElementById('poster').value;
e.target.parentNode.append(img)
})
document.getElementById('submit').addEventListener('click',()=>{
    if(!document.getElementById('fragrance').value||!document.getElementById('overview').value||!urlChecker||!categoryChecker||!document.getElementById('name').value||!document.getElementById('price').value||!document.getElementById('quantity').value) 
    {
         alert("kia bhai form thik thak bhoro");
    return;
}
/*sending data to the imported function*/ 
postdata(document.getElementById('name').value,categoryChecker,document.getElementById('subCategory').value,document.getElementById('price').value,urlChecker,document.getElementById('quantity').value,document.getElementById('fragrance').value,document.getElementById('overview').value
 )
})