const data = [
  {
    title: "Chỉ số BMI dưới 18,5 là thiếu cân",
    content: "Bạn cần áp dụng chế độ ăn và thể thao để tăng cân.",
    image:
      "https://images.unsplash.com/photo-1541306912932-f6bed7f462eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  },
  {
    title: "Chỉ số BMI từ 18,5 đến 24,9 là bình thường",
    content: "Bạn có một cơ thể tốt.",
    image:
      "https://images.unsplash.com/photo-1579047440583-43a690fe2243?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  },
  {
    title: "Chỉ số BMI ở giữa 25,0 và 29,9 được coi là thừa cân",
    content:
      "Tuy nhiên, tình trạng chưa quá trầm trọng nên bạn có thể tìm ngay các phương pháp giảm cân hiệu quả tự nhiên và kết hợp luyện tập. Nếu áp dụng điều độ và kiên trì, chỉ cần tốn khoảng vài tháng là bạn có ngay vóc dáng rất ưng ý rồi đó.",
    image:
      "https://images.unsplash.com/photo-1573879541250-58ae8b322b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  },
  {
    title: "Chỉ số BMI bằng hoặc trên 30 được xem là béo phì",
    content:
      "Với mức cân nặng này, cơ thể của bạn phải gặp rất nhiều áp lực hàng ngày, đặc biệt trọng lượng mỡ tạo áp lực lên cơ xương và các cơ quan làm ảnh hưởng đến sinh hoạt và sức khỏe của bạn.",
    image:
      "https://images.unsplash.com/photo-1573879026263-0ae3b9599d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=620&q=80",
  },
];

let height = document.querySelector("#height");
let weight = document.querySelector("#weight");
let calc = document.querySelector("#btn-submit");
let imgBox = document.querySelector(".image-box");
let sayHello = document.querySelector(".say-hello");

//gọi class "input" để thay đổi màu khung khi điền nội dung vào ô input
let input = document.querySelectorAll(".input");

let alert = document.querySelectorAll("small");
//gọi bộ output
let output = document.querySelector(".result-container");
let outputNum = document.querySelector(".result-num");
let outputTittle = document.querySelector(".result-title");
let outputContent = document.querySelector(".result-content");

let bmi;

let result;
//function hiện nội dung của data
function show(input) {
  imgBox.style.backgroundImage = `url(${input["image"]})`;
  outputTittle.innerText = input["title"];
  outputContent.innerText = input["content"];
}
//click vào kiểm tra để tính số liệu theo giá trị của 2 ô input
calc.addEventListener("click", function () {
  bmi = (weight.value * 10000) / (height.value * height.value);
  if (height.value == "") {
    alert[0].style.visibility = "visible";
    alert[0].innerText = "Chiều cao không thể để trống";
  } else if (weight.value == "") {
    alert[1].style.visibility = "visible";
    alert[1].innerText = "Cân nặng không thể để trống";
  } else {
    sayHello.classList.add("hide");
    output.classList.remove("hide");
    result = Math.round(bmi * 10) / 10;
    outputNum.innerText = result;

    if (bmi < 18.5) {
      show(data[0]);
    } else if (bmi <= 24.9) {
      show(data[1]);
    } else if (bmi <= 29.9) {
      show(data[2]);
    } else {
      show(data[3]);
    }

    height.value = "";
    weight.value = "";
  }
});

//function add remove class success và error
function addrev(input, index) {
    alert[index].innerText ="";
  let x = Number(input);
  if (x > 0) {
    input[index].classList.add("success");

    input[index].classList.remove("error");
  } else if (x == 0) {
    input[index].classList.remove("success");

    input[index].classList.remove("error");
  } else {
    input[index].classList.remove("success");

    input[index].classList.add("error");
  }
}
//kiểm tra nội dung input ở ô chiều cao

height.addEventListener("input", function () {
  alert[0].innerText = "Chiều cao không đúng định dạng";
  addrev(height.value, 0);
});

weight.addEventListener("input", function () {
  alert[1].innerText = "Cân nặng không đúng định dạng";
  addrev(weight.value, 1);
});
