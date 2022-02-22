//sử dụng html attribute
function sayHello(){
    alert("xin chào các bạn")
}

//sử dụng dom property

const btn2 = document.getElementById("btn-2");
//function k tên aka anonymous function
btn2.onclick = function(){
    alert("Xin chào")
}

//sử dụng addEventListener

const btn3 = document.getElementById("btn-3")
btn3.addEventListener("click", function(){
    alert("Hello")
})

const btn4= document.getElementById("btn-4")
btn4.addEventListener("click", function(){
    let color = randomColor();
    document.body.style.backgroundColor = color;
})

function randomColor(){
    let arr =["black", "green", "red","yellow","grey"];
    let index = Math.floor(Math.random() * arr.length);
    return arr[index]
}