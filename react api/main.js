const frame = (p) => {
    const productFrame = document.createElement("div");
    productFrame.classList.add("productframe")
    productFrame.innerHTML = `
    <a href="#">
   
    <div>
    <img src="${p.image}">
    </div> <span>${p.title}</span>
    <span>Giá: ${p.price}$</span></a>
       `;
  
    return productFrame;
  };
  
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
      const createFrame = json.map(frame);
  
      document.querySelector("section").append(...createFrame);
    });
  