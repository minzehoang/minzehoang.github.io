// // Lắng nghe sự kiện keydown
// document.addEventListener("keydown", function () {
//     console.log("keydown");
// });

// // Lắng nghe sự kiện keyup
// document.addEventListener("keyup", function () {
//     console.log("keyup");
// });

// // Lắng nghe sự kiện keypress
// document.addEventListener("keypress", function () {
//     console.log("keypress");
// });


document.addEventListener("keydown", function (event) {
    if (event.keyCode == 13) {
        console.log("Bạn thật đẹp trai!");
    }else if(event.keyCode == 32){
        console.log("vừa ấn nút space")
    }
     else {
        console.log("Bấm phím Enter đi, có điều bất ngờ đó!")
    }
});


document.addEventListener("keydown", function (event) {
    if (event.keyCode == 13) {
        // Thực hiện vẽ hình tròn
        drawCircle()
    } else if (event.keyCode == 32) {
        // Thực hiện vẽ hình vuông
        drawRectangle()
    } else {
        // Thực hiện thay đổi màu
        changeBackgroundColor()
    }
});

// Random màu
function randomColor() {
    let arr = ["black", "green", "blue", "yellow", "pink"];
    let index = Math.floor(Math.random() * arr.length); // về nghiên cứu
    return arr[index]
}

// Thực hiện thay đổi màu
function changeBackgroundColor() {
    // B1 : random màu
    let color = randomColor();

    // B2 : Set màu random được cho body
    document.body.style.backgroundColor = color;
}
// Thực hiện vẽ hình tròn
function drawCircle() {
    // Trước khi thêm box mới thì xóa box cũ đi
    // Truy cập vào box
    const boxEl = document.querySelector(".box");

    // Nếu box tồn tại thì mới xóa
    if(boxEl) {
        boxEl.parentNode.removeChild(boxEl);
    }

    // B1 : Tạo hình tròn : Tạo thẻ div và gán class box
    let box = document.createElement("div")
    box.classList.add("box");


    // B2 : Random vị trí
    let x = randomPosition(100, 1000) // random theo chiều ngang
    let y = randomPosition(100, 500) // random theo chiều dọc


    // B3 : Gán lại tọa độ cho thằng box
    box.style.top = `${y}px`;
    box.style.left = `${x}px`;

    document.body.appendChild(box)
}