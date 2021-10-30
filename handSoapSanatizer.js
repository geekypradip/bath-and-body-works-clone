const btn = document.getElementById("btn-fom");
        const btnFg = document.getElementById("btn-gell");
        const btnFs = document.getElementById("btn-sanatizer");
        const btnAll = document.getElementById("btn-all");
        btn.addEventListener('click',()=>{
            let q = btn.innerText;
            let searchParams = new URLSearchParams();
            searchParams.append("query", `${q}`);
            console.log(searchParams.toString());
            let url = 'content.html'
            window.location.assign(`${url}?${searchParams.toString()}`);
        })
        btnFg.addEventListener('click',()=>{
            let q = btnFg.innerText;
            let searchParams = new URLSearchParams();
            searchParams.append("query", `${q}`);
            console.log(searchParams.toString());
            let url = 'content.html'
            window.location.assign(`${url}?${searchParams.toString()}`);
        })
        btnFs.addEventListener('click',()=>{
            let q = btnFs.innerText;
            let searchParams = new URLSearchParams();
            searchParams.append("query", `${q}`);
            console.log(searchParams.toString());
            let url = 'content.html'
            window.location.assign(`${url}?${searchParams.toString()}`);
        })
        btnAll.addEventListener('click',()=>{
            let q = "BODY CARE";
            let searchParams = new URLSearchParams();
            searchParams.append("query", `${q}`);
            console.log(searchParams.toString());
            let url = 'content.html'
            window.location.assign(`${url}?${searchParams.toString()}`);
        })