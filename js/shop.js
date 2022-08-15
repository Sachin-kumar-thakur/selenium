window.addEventListener("DOMContentLoaded", async (event) => {
  console.log("DOM fully loaded and parsed");
  const result = await fetch("https://fakestoreapi.com/products");
  const data = await result.json();

  let container = document.getElementById("row-container");
  let content = '<div class="row row-cols-1 row-cols-md-4 g-2">';
  data.forEach((result, i) => {
    content += `<div class="col">
        <div class="card">
        <img src=${result.image} class="card-img-top" alt=${result.title}>
          <div class="card-body">
            <h5 class="card-title">${result.title}</h5>
            <p class="card-text">${result.description.substring(0, 48)}</p>
            <a href="#" class="btn btn-primary">&#x20B9; ${result.price}</a>
            </div>
            </div>
            </div>
       
  `;
  });

  content += "</div>";
  container.innerHTML += content;
});
