// Render số box = số lượng màu ra ngoài màn hình bằng javascript (5 box)
// Box được tạo bởi thẻ div, có class=“box”, background tương ứng với từng mã màu
// Cập nhật số lượng total box trong thẻ <span> có class “points”
// Khi bấm vào box bất kỳ thì box đó biến mất, đồng thời số lượng total box giảm đi 1
// Khi click vào nút “more box” thì số lượng box tăng lên 5 (tương ứng với 5 màu trong mảng colors), đồng thời số lượng total box cũng tăng lên 5

let colors = ["#3498db", "#9b59b6", "#e74c3c", "#2c3e50", "#d35400"];
let colorsCopy = [...colors];

// Render box
function renderBox(arr) {
    let content = "";
    for (let i = 0; i < arr.length; i++) {
        content += `
            <div 
                class="box" 
                style="background-color: ${arr[i]}"
                onclick="deleteBox(${i})"
            >
            </div>`
        
    }
    $(".boxes").html(content)

    // Update số lượng box
    updateTotalBox(arr)
}

renderBox(colorsCopy)

// Update total box
function updateTotalBox(arr) {
    $(".points").text(arr.length)
}

// Thêm box
$("#btn").click(function() {
    colorsCopy = [...colorsCopy, ...colors]
    renderBox(colorsCopy)
})

// Xóa box
function deleteBox(index) {
    for (let i = 0; i < colorsCopy.length; i++) {
        if(i == index) {
            colorsCopy.splice(i, 1)
        }
    }
    renderBox(colorsCopy)
}
