let table=document.querySelector(".table")
if(localStorage.getItem("basket")!=null){

    let arr=JSON.parse(localStorage.getItem("basket"));
    table.classList.remove("d-none")
    arr.forEach(product=>{
        let tr=`
            
        <tr>
           
            <td><img src="${product.imgUrl}" alt="" width="150" height="150"></td>
            <td>${product.name}</td>
            <td>${product.price.slice(0,product.price.length-1)}</td>
            <td>${product.count}</td>
            <td><i class="fa-solid fa-trash"></i></td>
            <td>${product.totalPrice}</td>
        </tr>
            
        
        `
        table.lastElementChild.innerHTML+=tr;

    });
}