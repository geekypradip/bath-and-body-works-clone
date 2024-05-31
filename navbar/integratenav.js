let link = document.createElement("link");
link.rel = "stylesheet";
link.href = "navbar/dontTouch/nav.css";
let ilink = document.createElement("link");
ilink.rel = "stylesheet";
ilink.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
document.head.append(link, ilink);
let content = document.createElement("div");
content.innerHTML = `<div class="nav">
<div class="empty"></div>
<div class="logo"> <img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.17f/on/demandware.static/-/Sites-BathAndBodyWorks-Library/en_US/v1635414384794/images/Christmas2021/christmas_logo_site.svg?yocs=o_s_" alt="Logo" id="logo"></div>

<div class="search">
<input id="tog" type="text" placeholder="search your product">
<img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.17f/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dw38807d78/images/svg-icons/UI-Search-v2.svg?yocs=o_s_" alt="search" id="searchIcon">
</div>
<div class="userLogo">
<img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.17f/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dwae347297/images/svg-icons/UI-MyAccount.svg?yocs=o_s_" alt="userLogo">
</div>
<div class="cart">

<img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.17f/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1635500765187/images/svg-icons/UI-AddToBag.svg?yocs=o_s_" alt="cartLogo" id="cartclick">

</div>
</div>
<div class="header">
<div class="dropdown" data-dropdown>

<div class="link" onmouseover="patanehi(0,this)"><a href="/">NEW & NOW</a></div>

</div>

<div class="dropdown" data-dropdown>

<div class="link" onmouseover="patanehi(1,this)"><a href="/bodycare.html">BODY CARE</a></div>

</div>


<div class="dropdown" data-dropdown>
<div class="link" onmouseover="patanehi(2,this)"><a href="/handSoapSanatizer.html"> HAND SOAPS $ SANITIZERS</a></div>
</div>
<div class="dropdown" data-dropdown>

<div class="link" onmouseover="patanehi(3,this)"><a href="/bodycare.html"> HOME FRAGRANCE </a></div>

</div>


<div class="dropdown" data-dropdown>
<div class="link" onmouseover="patanehi(4,this)"><a href="/gifts.html">GIFT</a></div>
</div>

<div class="dropdown" data-dropdown>
<div class="link" onmouseover="patanehi('empty',this)"><a href="/gifts.html">TOP OFFERS</a></div>
</div>
</div>
<div class="container">
<div class="newAndNow pp">
    <div class="parent">
            <div onmouseover="n(0)">NEW $ NOW</div>
            <div>EXPLORE NEW & NOW</div>
    </div>
    <div class="childs">
        <div class="child">
            <div>NEW & NOW</div>
           <div>New Arrivals</div>
            <div>Christmas Collection</div>
           <div>Best Sellers</div>
           <div>Aromatherapy Shop</div>
             <div>Men's Shop</div>
     </div>

    </div>
    <div class="static">
            <div>get inpired</div>
            <div>shop by fragrance</div>
    </div>
 </div>
   <!-- djjdjdjd  -->
   <!-- <hr> -->
   <div class="bodycare pp">
    <div class="parent">
        <div onmouseover="b(0)">FEATURED</div>
        <div onmouseover="b(1)">BATH $ SHOWER</div>
        <DIV onmouseover="b(2)">MOISTURIZERS</DIV>
        <DIV onmouseover="b(3)">FRAGRANCE</DIV>
        <DIV onmouseover="b(4)">AROMATHERAPY</DIV>
        <DIV onmouseover="b(5)">MEN'S</DIV>
        <DIV onmouseover="b(6)">GIFT SETS</DIV>
        <DIV>EXPLORE BODY CARE</DIV>
    </div>
    <div class="childs">
        <div class="child">
         <div>NEW Body  care</div>
          <div>Customer Fabourites</div>
         <div>Retired Fragrance</div>
         <div>Travel Size </div>
    </div>
    <div class="child">
        <div>All bath & shower </div>
         <div>Body wash & shower gel </div>
        <div>Body Scrub</div>
        <div>Bar soap </div>
        <div>Shampoo & Conditioner</div>
        <div>bath Accessories</div>
    </div>
    <div class="child">
        <div>All Moisturizers</div>
         <div>Body Lotion</div>
        <div>Body Cream</div>
        <div>Hand Cream</div>
        <div>lip Gloss & Balms</div>
    </div>
    <div class="child">
        <div>All Fragrance</div>
         <div>Body Sprays & Mists </div>
        <div>Perfume & Cologne</div>
    </div>
    <div class="child">
        <div>All Aromatherapy</div>
         <div>Body wash & shower gel</div>
        <div>Body Scrub</div>
        <div>Moisturizers</div>
        <div>Mists & Sprays</div>
    </div>
    <div class="child">
        <div>All men's</div>
         <div>Body wash & shower gel</div>
        <div>Moisturizers</div>
        <div>Body Sprays & cologne</div>
    </div>
    <div class="child">
        <div>Body Care Gift Sets</div>
    </div>
    </div>

    <div class="static">
        <div>BODY CARE OFFERS</div>
        <div>Buy 3,Get 3 Free Selct Body Care </div>
        <div>Buy 2 Get 1 Free Travel, Hand & Lip Care</div>
    </div>
   </div>
   <!-- <hr>   ggjjgjgjj -->
   <!-- <hr> -->
   <div class="handSoapSanatizer pp">
    <div class="parent">
        <div onmouseover="h(0)">FEATURED</div>
        <div onmouseover="h(1)">HAND SOAPS </div>
        <DIV onmouseover="h(2)">HAND SANITIZERS</DIV>
        <DIV onmouseover="h(3)">GIFT SETS</DIV>
        <DIV>EXPLORE HAND SOAPS & SANITIZERS</DIV>
    </div>
    <div class="childs">
        <div class="child">
         <div>NEW Hand soap & sanitizers</div>
          <div>Gentle & clean hand soaps</div>
    </div>
    <div class="child">
        <div>All hand soaps</div>
         <div>foaming soaps  </div>
        <div>gel & nourshing soaps </div>
        <div>soap holder</div>
    </div>
    <div class="child">
        <div>All hand sanitizers</div>
         <div>pocketbac sanitizers</div>
        <div>sanitizers Sprays</div>
        <div>Full-size sanitizers</div>
        <div>Hand sanitizers holders</div>
    </div>
    <div class="child">
        <div>hand soap & sanitizers gift sets </div>
    </div>

    </div>

    <div class="static">
        <div>HAND SOAPS & SANITIZERS  OFFERS</div>
        <div>6/$27 or 4/$20 hand soaps </div>
        <div>$8 hand sanitizers 5-packs</div>
        <div>3/$1 hand sanitizers sprays</div>
    </div>
   </div>
    <!-- <hr>   ggjjgjgjj -->
    <!-- <hr> -->
    <div class="homeFragrance pp">
     <div class="parent">
         <div onmouseover="ho(0)">FEATURED</div>
         <div onmouseover="ho(1)">CANDLES</div>
         <DIV onmouseover="ho(2)">AIR FRESHENERS</DIV>
         <DIV onmouseover="ho(3)">GIFT SETS</DIV>
         <DIV>EXPLORE HOME FRAGRANCE</DIV>
     </div>
     <div class="childs">
         <div class="child">
          <div>NEW Home fragrance</div>
           <div>The white barn shop</div>
     </div>
     <div class="child">
         <div>All candles</div>
          <div>3-wick candles</div>
         <div>single wick candles </div>
         <div>candle holder & Accessories</div>
     </div>
     <div class="child">
         <div>All wallflowers</div>
          <div>wallflowers plugs</div>
         <div>wallflowers refillis</div>
         <div>room spray & Mists</div>
         <div>car fragrance</div>
     </div>
     <div class="child">
         <div>candle gift sets </div>
     </div>

     </div>

     <div class="static">
         <div>HOME FRAGRANCE  OFFERS</div>
         <div>$5.96 all single wick candles</div>
         <div>$8 wallflowers</div>
         <div>3/$1 room spray</div>
     </div>
    </div>
     <!-- <hr>   ggjjgjgjj -->
   <!-- <hr> -->
   <div class="gift pp">
    <div class="parent">
        <div onmouseover="g(0)">FEATURED</div>
        <div onmouseover="g(1)">GIFTS BY PRICE</div>
        <DIV onmouseover="g(2)">GIFT BY RECIPIENT</DIV>
        <DIV onmouseover="g(3)">COLLECTION</DIV>
        <DIV onmouseover="g(4)">GIFT CARD</DIV>
        <DIV onmouseover="g(5)">EXPLORE GIFTS</DIV>
    </div>
    <div class="childs">
        <div class="child">
         <div>christmas gift guide</div>
          <div>gift sets</div>
          <div>stocking stuffers</div>
    </div>
    <div class="child">
        <div>$15 & under gifts</div>
         <div>$30 & under gifts</div>
        <div>$50 & under gifts</div>
    </div>
    <div class="child">
        <div>gift for her</div>
         <div>gift for him</div>
        <div>gift for everyone</div>
        <div>gifts for the hostess</div>
    </div>
    <div class="child">
        <div>gift boxes & bags</div>
        <div>accessories</div>
    </div>
    <div class="child">
        <div>E-gift cards</div>
        <div>gift cards</div>
    </div>
    </div>

   </div>
</div>
<div id="dis">
</div>`;

document.body.insertBefore(content, document.body.firstChild);
let script = document.createElement("script");
script.src = "navbar/dontTouch/navbar.js";
document.body.append(script);
