const home = document.getElementById("logo");
        home.addEventListener('click',()=>{
            window.location.assign("\handSoapSanatizer.html")
        })
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const product = urlParams.get('query')
        var count = 1;
        const next = document.getElementById("next");
        next.addEventListener('click',()=>{
            count++;
            fn()
        })
        const prev = document.getElementById("prev");
        prev.addEventListener('click',()=>{
            if(count != 1){
            count--;
            fn()
            }
            return
        })
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
                let title = document.createElement("h3");
                let ctagory = document.createElement("h4");
                // let Subctagory = document.createElement("p2");
                let price = document.createElement("h2");
                let img = document.createElement("img");
                let btn = document.createElement("button");
                let rating = document.createElement("span");
                // let icon = document.createElement("span").className = "fa fa-star checked";
                // rating.innerText = `Rating of Product ${id.rating}`;
                rating.innerHTML = `<h5>Rating of Product ${id.rating}</h5><span class="fa fa-star checked"></span>`;
                img.src = id.productImage;
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
        nameBtn.addEventListener('click',sortName)
        rateBtn.addEventListener('click',sortRate)
        brandBtn.addEventListener('click',sortBrand)
        priceBtn.addEventListener('click',sortPrice)
        window.addEventListener("load",fn)