document.addEventListener('click', function() {
    console.log('click');
   })
   
   document.addEventListener('mousedown', function() {
    console.log('mousedown');
   })
   
   document.addEventListener('mousemove', function() {
    console.log('mousemove');
   })
   
   document.addEventListener('mouseup', function() {
    console.log('mouseup');
   })
   document.addEventListener('click', function(event) {
    console.log(event);
   })


   // tạo hình tròn tại điểm nhấn

   document.addEventListener("mousemove", function(event){
     
    const boxEl= document.querySelector(".box");
    if(boxEl){
        boxEl.parentNode.removeChild(boxEl);
    }
    
    
    let circle = document.createElement("div")
      circle.classList.add("box");

      let x = event.offsetX;
      let y = event.offsetY;

      circle.style.top= `${y-10}px`;
      circle.style.left= `${x-10}px`;
   
        document.body.appendChild(circle)
    })