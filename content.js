// import createUi from "./viewProduct.js"
const home = document.getElementById("logo");
        home.addEventListener('click',()=>{
            window.history.back(-1);
        })
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const product = urlParams.get('query')
        var count = 1;
        const next = document.getElementById("next");
        next.addEventListener('click',()=>{
            if(count!=2){
            count++;
            fn()
            }
        })
        const prev = document.getElementById("prev");
        prev.addEventListener('click',()=>{
            if(count != 1){
            count--;
            fn()
            }
            return
        })
        const title = document.getElementById("title");
        title.innerText = product;
        const fn = async ()=>{
            let data = await fetch(`http://localhost:3000/product?category=${product}&_limit=9&_page=${count}`)
            let res = await data.json();
            console.log(res)
            // console.log(product)
            createElement(res)
        }
       
        function createElement(data){
            let container = document.getElementById("grid");
                container.innerHTML = "";
            for(let id of data ){
                let subContainer = document.createElement("div");
                subContainer.id=id.id;//added by pradip
                let title = document.createElement("h3");
                let ctagory = document.createElement("h4");
                // let Subctagory = document.createElement("p2");
                let price = document.createElement("h2");
                let img = document.createElement("img");
                img.setAttribute("onclick","idpassing()")
                let btn = document.createElement("button");
                let rating = document.createElement("span");
                // let icon = document.createElement("span").className = "fa fa-star checked";
                // rating.innerText = `Rating of Product ${id.rating}`;
                let star = `<span class="fa fa-star checked"></span>`;
                let str = "";
                for(var i=0;i<id.rating;i++){
                    str += star;
                }
                rating.innerHTML = `<h5>Rating:</h5>${str}`;
                img.src = id.productImage;
               /*start*/
                img.onclick= (e)=>{
                    var perent=e.target.parentNode
                    var productId=perent.getAttribute("id");
                   localStorage.setItem("productId",productId)
                    // createUi(productId);
                    window.location.href="./viewProduct.html"

                   }
                   /*end*/
                price.innerText = `$${id.price}`;
                // Subctagory.innerText = id.subCategory;
                ctagory.innerText = id.category;
                title.innerText = id.name;
                btn.innerText = "Add To Bage";
                if(title != null && ctagory != null && price != null ){
                    subContainer.append(img,title,ctagory,price,rating,btn)
                    container.append(subContainer)
                }  
            }
            
        }
       
        const priceBtn = document.getElementById("sortPrice");
        const nameBtn = document.getElementById("sortName");
        const brandBtn = document.getElementById("sortBrand");
        const rateBtn = document.getElementById("sortRate");
        const sortName = async ()=>{
            let data = await fetch(`http://localhost:3000/product?category=${product}&_limit=9&_page=${count}&_sort=name&_order=asc`)
            let res = await data.json();
            console.log(res)
            createElement(res)
        }
        const sortRate = async ()=>{
            let data = await fetch(`http://localhost:3000/product?category=${product}&_limit=9&_page=${count}&_sort=rating&_order=desc`)
            let res = await data.json();
            console.log(res)
            createElement(res)
        }
        const sortPrice = async ()=>{
            let data = await fetch(`http://localhost:3000/product?category=${product}&_limit=9&_page=${count}&_sort=price&_order=asc`)
            let res = await data.json();
            console.log(res)
            createElement(res)
        }
        const sortBrand = async ()=>{
            let data = await fetch(`http://localhost:3000/product?category=${product}&_limit=9&_page=${count}&_sort=price&_order=desc`)
            let res = await data.json();
            console.log(res)
            createElement(res)
        }
        var arr = ["https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.181/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwc6414a5e/images/Fall2021/xcat_sms_0_fa2_hb_v2_1.jpg?yocs=s_","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.181/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw3741fbbb/images/Fall2021/xcat_sms_0_fa2_hb_v2_4.jpg?yocs=s_"];
        var i = 0;
        var fun = ()=>{
            var carasol = document.getElementById("slider");
            carasol.innerHTML = "";
            if(i==arr.length){
                i=0;
            }
            let img = document.createElement("img");
            img.src = arr[i];
            carasol.append(img);
            i++;
        }
        setInterval(fun,500)
        var arr1 = ["https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.181/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw1587deae/images/Christmas2021/cndl_titbi_595singlewicks_c1_hm_to_03.jpg?yocs=s_","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.181/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw05b82738/images/Christmas2021/cndl_titbi_595singlewicks_c1_hm_to_01.jpg?yocs=s_","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.181/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw6f423d99/images/Christmas2021/cndl_titbi_595singlewicks_c1_hm_to_02.jpg?yocs=s_"];
        var j = 0;
        var funa= ()=>{
            let carasol = document.getElementById("slider-1");
            carasol.innerHTML = "";
            if(j==arr1.length){
                j=0;
            }
            let img = document.createElement("img");
            img.src = arr1[j];
            carasol.append(img);
            j++;
        }
        setInterval(funa,500)
        nameBtn.addEventListener('click',sortName)
        rateBtn.addEventListener('click',sortRate)
        brandBtn.addEventListener('click',sortBrand)
        priceBtn.addEventListener('click',sortPrice)
        window.addEventListener("load",fn)