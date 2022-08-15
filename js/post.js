const postButton = document.getElementById("loadPost");
postButton.addEventListener("click", async (event) => {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await result.json();
  console.log(posts);

  let container = document.getElementById("row-container");
  let content = '<div class="row">';
  posts.forEach((result, i) => {
    content += `<div class="col-sm-4>  <div class="card">
    <div class="card-body">
      <h5 class="card-title">${result.title}</h5>
      <p class="card-text">${result.body}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`;
  });

  content += "</div>";
  container.innerHTML += content;
});
