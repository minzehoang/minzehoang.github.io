//hiển thị các tag vụ khi load trang
//1. thêm tag vụ có nội dung điền bên trái, sau khi điền nội dung thì chữ thêm active
// hiển thị danh sách dưới

//2. lọc công việc

//3.thay đổi trạng thái công việc khi tích v vào tag vụ, gạch chéo
//4. sửa tên công việc
//5. xóa công việc

//mỗi tag vụ gồm các thuộc tính
//a) tên công việc
//b) trạng thái
//c) id (duy nhất không trùng nhau phục vụ các lệnh xóa sửa về sau)

//random id
function randomId() {
  return Math.floor(Math.random() * 1000);
}

// Mockup data mẫu
let todos = [
  {
    id: randomId(),
    title: "làm bài tập",
    status: false,
  },
  {
    id: randomId(),
    title: "xem phim",
    status: false,
  },
  {
    id: randomId(),
    title: "chạy",
    status: true,
  },
];

//truy cập vào các element

const todolistEL = document.querySelector(".todo-list");
const todoInput = document.getElementById("todo-input");
const btnAdd = document.getElementById("btn-add");

const optionAll = document.getElementById("all");
const optionUnactive = document.getElementById("unactive");
const optionActive = document.getElementById("active");

//function hiển thị các tag vụ khi load trang

function renderTodo(arr) {
  //xóa hết phần html có sẵn
  todolistEL.innerHTML = "";
  //danh sách công việc trống
  if (arr.length == 0) {
    todolistEL.innerHTML = ` <div class="todo-item ">
    <div class="todo-item-title">
        <p>Chưa có tác vụ gì</p>
    </div>
    
</div>`;
    return;
  }
  //hiển thị tag vụ ra ngoài giao diện
  let content = "";
  for (let i = 0; i < arr.length; i++) {
    const t = arr[i];
    content += `  <div class="todo-item ${
      t.status == false ? "" : "active-todo"
    }"><div class="todo-item-title">
        <input type="checkbox"   ${
          t.status == false ? "" : "checked"
        } onclick="toggleStatus(${t.id})" />
        <p>${t.title}</p>
    </div>
  
        <div class="option">
        <button class="btn btn-update" onclick="updateTodo(${t.id})">
            <img src="./img/pencil.svg" alt="icon" />
        </button>
        <button class="btn btn-delete" onclick="deleteTodo(${t.id})">
            <img src="./img/remove.svg"  alt="icon" />
        </button>
    </div></div>`;
  }
  //chèn dữ liệu mởi để hiển thị
  todolistEL.innerHTML = content;
}

//1. thêm tag vụ có nội dung điền bên trái, sau khi điền nội dung thì chữ thêm active
// hiển thị danh sách dưới
//disable nút Thêm khi input chưa có nội dung
btnAdd.disabled = true;
btnAdd.style.opacity = 0.4;
todoInput.addEventListener("input", function () {
  let input = todoInput.value;
  console.log(input);
  if (input != 0) {
    btnAdd.disabled = false;
    btnAdd.style.opacity = 1;
  } else {
    btnAdd.disabled = true;
    btnAdd.style.opacity = 0.4;
  }
});
btnAdd.addEventListener("click", function () {
  //lấy dữ liệu trong ô input
  let input = todoInput.value;

  //kiểm tra dữ liệu có trống hay k
  // if (input == "") {
  //   alert("Chưa có tên tác vụ");
  //   return;
  // }

  //tạo tag mới
  let newTodo = {
    id: randomId(),
    title: input,
    status: false,
  };

  //thêm todo mới vào trong mảng todos
  todos.push(newTodo);

  //hiển thị ngoài giao diện
  renderTodo(todos);
  todoInput.value = "";
  btnAdd.disabled = true;
  btnAdd.style.opacity = 0.4;
});

// 4. sửa tên công việc
//có hoạt động nhưng loằng ngoằng
const update = document.createElement("button");
update.innerText = "Sửa";
update.style.display = "none";
btnAdd.insertAdjacentElement("afterend", update);
function updateTodo(id) {
  //hiện nút Sửa, ẩn nút thêm
  btnAdd.style.display = "none";
  update.style.display = "block";
  update.addEventListener("click", function () {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i]["id"] == id) {
        todos[i]["title"] = todoInput.value;
      }
    }
    update.style.display = "none";
    btnAdd.style.display = "block";
  
    console.log("1")
  });
  renderTodo(todos);
}
//ấn vào nút sửa để nhập nội dung input vào


//5. xóa công việc

function deleteTodo(id) {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i]["id"] == id) {
      todos.splice(i, 1);
    }
  }
  renderTodo(todos);
}

//sửa trạng thái

function toggleStatus(id) {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i]["id"] == id && todos[i]["status"] == true) {
      todos[i]["status"] = false;
    } else if (todos[i]["id"] == id && todos[i]["status"] == false) {
      todos[i]["status"] = true;
    }
  }
  renderTodo(todos);
}

//2. lọc công việc

optionAll.addEventListener("click", function () {
  renderTodo(todos);
});

optionUnactive.addEventListener("click", function () {
  let newArr = [];
  for (let i = 0; i < todos.length; i++) {
    if (todos[i]["status"] == false) {
      newArr.push(todos[i]);
    }
  }
  renderTodo(newArr);
});

optionActive.addEventListener("click", function () {
  let newArr = [];
  for (let i = 0; i < todos.length; i++) {
    if (todos[i]["status"] == true) {
      newArr.push(todos[i]);
    }
  }
  renderTodo(newArr);
});

console.log(renderTodo(todos));
