 let postdata=(...args)=>{
console.log(args);
let d={
    name:args[0],
    category:args[1],
    subCategory:args[2],
    price:args[3],
    productImage:args[4],
    quantity:args[5],
    fragment:args[6],
    overview:args[7],
}
fetch(" http://localhost:3000/product", {
    // Adding method type
    method: "POST",
    // Adding body or contents to send
    body: JSON.stringify(d),
     
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
 
// Converting to JSON
.then(response => response.json())
 
// Displaying results to console
.then(json => console.log(json));
        
}
export default postdata;