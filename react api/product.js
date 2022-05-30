
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => {
      const section = document.querySelector('section');
    const div = document.createElement('div');
    section.append(div);
      
  });