let users =JSON.parse(localStorage.getItem("user")) || [];
 let ui = (users) =>{
    temp =``
    users.map((ele ,user)=>{
        temp +=`
        <div class="maindiv">
        <img src="${ele.image}" alt="" class="image">
       <div class="cardbody">
       <h2>Name : ${ele.name}</h2>
       <h3>price : ${ele.price} <sup>₹</sup></h3>
       <h3>Brand : ${ele.brand} </h3>
       <button class="update"> Add to cart</button>
       </div>
    </div>`
    })
    document.getElementById("ui").innerHTML = temp
 }

 ui(users);



let userdata = (e)=>{
    e.preventDefault();
    let user ={
        image:document.getElementById("image").value,
        name:document.getElementById("name").value,
        price:document.getElementById("price").value,
        brand :document.getElementById("brand").value,
    }
    users.push(user);
    localStorage.setItem("user",JSON.stringify(users));
    ui(users);
}

document.querySelector("form").addEventListener("submit", userdata)

// filter products by price

const managelth = ()=>{
    let data = users.sort((a,b)=> a.price - b.price);
    ui(data);
}

document.getElementById("lth").addEventListener("click",managelth)

const managehtl = ()=>{
    let data = users.sort((a,b)=> b.price - a.price);
    ui(data);
}

document.getElementById("htl").addEventListener("click",managehtl)

// filter products by brand name

const handlebrand =(cat)=>{
    let data = users.filter((value)=>value.brand == cat)
    ui(data);
}


let cat =["samsung", "realme" ,"vivo" , "oppo" , "one plus" , "apple"]

for(let i=0; i<cat.length ; i++) {

    let btn = document.createElement("button");
    btn.innerHTML= cat[i],
    btn.setAttribute("id" , cat[i])
    document.getElementById("btns").append(btn)
}

for (let i=0; i<cat.length; i++){
    document
    .getElementById(cat[i])
    .addEventListener("click",()=> handlebrand(cat[i]));
}

const find = () =>{
    let value = document.getElementById("value").value;
    let data = users.filter((val)=>val.brand.includes(value.toLowerCase()));
    ui(data);
}

document.getElementById("value").addEventListener("keypress",(e)=>{
    if(e.key == "Enter"){
            find();
        }
})


document.getElementById("search").addEventListener("click",find)

