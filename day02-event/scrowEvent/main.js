const btn = document.getElementById("btn")

window.addEventListener("scroll", function() {
    if(document.documentElement.scrollTop > 300) {
        // Nếu vị trí thanh cuộn > 300 thì hiển thị button
        // Và ngược lại
        btn.style.display = "block"
    } else {
        // Nếu vị trí thanh cuộn < 300 thì ẩn button
        btn.style.display = `none`
    }
})   



btn.addEventListener("click", function() {
    window.scrollTo({
        top : 0,
        behavior : "smooth"
    })
})

