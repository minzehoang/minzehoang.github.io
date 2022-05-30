// Các chức năng có trong ứng dụng todolist
// 1. Thêm công việc (v)
// 2. Lọc công việc theo trạng thái
// 3. Thay đổi trạng thái cv (v)
// 4. Sửa tên cv
// 5. Xóa công việc (v)
// 6. Hiển thị danh sách công việc ban đầu (v)

// Mỗi cv bao gồm các thuộc tính gì
// 1. Tên công việc - title
// 2. Trạng thái công việc - status - (true/false)
// 3. Id (duy nhất - không trùng nhau)

// Random id
function randomId() {
    return Math.floor(Math.random() * 1000)
}

// Mockup data mẫu
let todos = []

// Truy cập vào các thành phần
const todolistEl = document.querySelector(".todo-list");
const todoInputEl = document.getElementById("todo-input"); // truy cập vào ô input
const btnAdd = document.getElementById("btn-add"); // truy cập vào nút "Thêm"

const optionAll = document.getElementById("all");
const optionUnactive = document.getElementById("unactive");
const optionActive = document.getElementById("active");

// 6. Hiển thị danh sách công việc ban đầu
function renderTodo(arr) {
    // Xóa hết dữ liệu hiện có để chuẩn bị render dữ liệu mới
    todolistEl.innerHTML = ""

    // Danh sách công việc trống
    if (arr.length == 0) {
        todolistEl.innerHTML = "Không có công việc nào trong danh sách"
        return
    }

    // Hiển thị danh sách công việc ra ngoài giao diện
    let content = ""
    for (let i = 0; i < arr.length; i++) {
        const t = arr[i]; // t đại diện cho 1 object todo
        content += `
            <div class="todo-item ${t.status == true ? "active-todo" : ""}">
                <div class="todo-item-title">
                    <input 
                        type="checkbox" 
                        ${t.status == true ? "checked" : ""}
                        onclick="toggleStatus(${t.id})"
                    />
                    <p>${t.title}</p>
                </div>
                <div class="option">
                    <button class="btn btn-update">
                        <img src="./img/pencil.svg" alt="icon" />
                    </button>
                    <button class="btn btn-delete" onclick="deleteTodo(${t.id})">
                        <img src="./img/remove.svg" alt="icon" />
                    </button>
                </div>
            </div>
        `
    }

    // Chèn dữ liệu mới để hiển thị
    todolistEl.innerHTML = content
}

// 1. Thêm công việc
btnAdd.addEventListener("click", function () {
    // B1 : Lấy dữ liệu trong ô input
    let title = todoInputEl.value

    // B2 : Kiểm tra dữ liệu có trống hay không
    if (title == "") {
        alert("Tên công việc không được để trống")
        return
    }

    // B3 : Tạo object todo mới
    let newTodo = {
        id: randomId(),
        title: title,
        status: false
    }

    // B4 : Thêm object todo mới vào trong mảng todos ban đầu
    todos.push(newTodo)
    setDataToLocalStorage()

    todoInputEl.value = "" // clear dữ liệu trong ô input để nhập cv khác
})

// 5. Xóa công việc
function deleteTodo(id) {
    // Duyệt mảng todos để tìm todo có id = id truyền vào
    // Nếu tìm thấy thì loại bỏ object todo đó ra khỏi mảng todos
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            // Sử dụng splice để xóa
            todos.splice(i, 1)
        }
    }
    setDataToLocalStorage()
}

// 3. Thay đổi trạng thái cv
function toggleStatus(id) {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            // Kiểm tra nếu công việc có status = true -> gán lại = false
            // Và ngược lại
            if (todos[i].status == true) {
                todos[i].status = false
            } else {
                todos[i].status = true
            }
        }
    }
    setDataToLocalStorage()
}

// 2. Lọc công việc theo trạng thái
optionUnactive.addEventListener("click", function() {
    // B1 : Lấy ra danh sách công việc chưa hoàn thành (ds dạng arr)
    let newArr = [];
    for (let i = 0; i < todos.length; i++) {
        if(todos[i].status == false) {
            newArr.push(todos[i])
        }
    }

    // B2 : Hiển thị ds ở bước 1 ra ngoài giao diện
    renderTodo(newArr)
})

// Lấy dữ liệu từ localStorage
function getDataFromLocalStorage() {
    // Lấy data thông qua key "todos"
    let todosLocal = localStorage.getItem("todos")

    // Nếu có data trong localStorage thì parse, còn không thì để mảng rỗng
    if(todosLocal) {
        todos = JSON.parse(todosLocal)
    } else {
        todos = [];
    }

    // Hiển thị danh sách công việc ra ngoài giao diện
    renderTodo(todos)
}

// Lưu dữ liệu vào localStorage
function setDataToLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(todos))
    renderTodo(todos)
}

// Khi web load hết html css thì gọi function getDataFromLocalStorage
window.onload = getDataFromLocalStorage;




