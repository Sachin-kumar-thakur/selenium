window.addEventListener("DOMContentLoaded", async (event) => {
  console.log("DOM fully loaded and parsed");
  const result = await fetch(
    "https://blognodeserver.herokuapp.com/api/person/register-person"
  );
  const data = await result.json();
  console.log(data);

  let container = document.getElementById("row-container");
  let content = '<div class="row row-cols-1 row-cols-md-4 g-2">';
  data.data.forEach((result, i) => {
    content += `<div class="col">
        <div class="card">

          <div class="card-body">
            <h5 class="card-title">${result.first} ${result.last}</h5>
            <p class="card-text">${result.email}</p>
            <a href="#" class="btn btn-primary">${result.state} ${result.city} ${result.zip}</a>
            </div>
            </div>
            </div>

  `;
  });

  content += "</div>";
  container.innerHTML += content;
});
