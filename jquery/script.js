//Truy cập

//Thay đổi nội dung
// .html(), .text()
$("#heading").text("Hellooooooooo");
$("#heading").html("<strong><i>Hell</i>ooooooooo<strong>");

//thay đổi css
//cách 1
$("#heading").css("color", "#fff");
$("#heading").css("background-color", "red");
//cách 2
$("#heading").css({ "color": "green", "background-color": "black" });


//Truy cập vào nhiều phần tử để thay đổi css
$(".list li").each(function(index, element){
 $(element).css("color", "blue")
})

//cho thẻ li 1 thành màu đỏ
$(".list li").first().css("color","red")

//cho thẻ li cuối nền vàng
$(".list li").last().css("background-color","yellow")

//cho thẻ li thứ 2 to hơn
$(".list li").eq(1).css("font-size","5em")

//lắng nghe sự kiện ẩn hiện heading
$(".btn").click(function(){
    $("#heading").fadeToggle(500, function(){
        $("body").css("background-color", "#ccc")
    })
})

//Thêm phần tử
//prepend: thêm vào đàu thằng cha

$(".list").prepend("<li>new item</li>")

//append: thêm vào cuối thằng cha

$(".list").append("<li>old item</li>")


//before: thêm vào trước
$(".list").before("<p>before item</p>")

//after: thêm vào sau
$(".list").after("<p>before item</p>")


//xóa item 2
$(".list li").eq(2).remove();

//class

$("#heading").addClass("fontsize4em")