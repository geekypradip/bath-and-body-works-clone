
let foot=document.createElement('div');
foot.style.borderTop="3px solid rgb(224, 217, 217)"
foot.style.paddingTop="20px";
foot.style.marginTop="20px";
foot.innerHTML=` <footer>
<div class="footer_first">
    <div class="light">
        <div class="light">Get email & the latest news from Bath & body works!</div>
        <div>
            <div>Enter Email</div>
            <div class="f_form">
                <input type="text">
                <img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.182/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1635673561212/images/svg-icons/UI-Information.svg?yocs=o_s_" alt="" id="info">
            </div>
        </div>
        <div>
            <div>Confirm Email</div>
            <div id="sm_form">
                <input type="text">
               <span id="foot_btn">SUBMIT</span>
            </div>
        </div>
      
</div>
<div class="light">
     <div>CUSTOMER CARE</div>
     <DIV>Help & FAQs</DIV>
     <div>Live Chat Is Busy</div>
     <div>Shipping</div>
     <div>Rturn & Exchanges</div>
     <div>Order Tracking</div>
     <div>Corporate Sales & Gifts</div>
     <div>Contact Us</div>
</div>
<div class="light">
        <div>MY ACCOUNT</div>
        <div>Sign In or Sign Up</div>
        <div>Order Tracking</div>
        <div>My Auto Refresh</div>
        <div>My Love-it List</div>
    </div>
<div class="light">
        <div>DISCOVER</div>
        <div>About Us</div>
        <div>Careers</div>
        <div>Gift Cards</div>
        <div>Shop by Fragrance</div>
        <div>Product Ingredients</div>
        <div>Get Inspired</div>
    </div>
<div class="light">
        <div>FIND US</div>
        <div>Store Locator</div>
        <div>Global Locator</div>
</div>
</div>
<div class="footer_first">
<div class="social_part">
<div>GET CONNECTED</div>
<div>
    <img src="https://cdn.freebiesupply.com/logos/large/2x/facebook-logo-2019.png" alt="helllo" class="social">
    <img src="https://www.pngkit.com/png/detail/1-16426_blue-instagram-logo-transparent.png" alt="" class="social">
    <img src="https://www.vhv.rs/dpng/d/409-4097837_transparent-background-twitter-logo-hd-png-download.png" class="social" alt="">
    <img src="https://www.pinpng.com/pngs/m/28-281520_youtube-square-youtube-logo-square-png-transparent-png.png" class="social" alt="">
    <img src="https://pngimg.com/uploads/pinterest/pinterest_PNG45.png" class="social"alt="">
</div>
</div>
<div id="footer_second_img">
<img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.182/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw0c8e6af7/images/evergreen/Happiness_Guaranteedtimes2_v2.jpg?yocs=o_s_" alt="" id="im">
</div>
</div>
</footer>`
let linkFooter=document.createElement('link');
linkFooter.rel="stylesheet";linkFooter.href="footer/dontTouch/footer.css"
document.head.append(linkFooter);
document.body.append(foot)