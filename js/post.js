const postButton = document.getElementById("loadPost");
postButton.addEventListener("click", async (event) => {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await result.json();
  console.log(posts);

  let container = document.getElementById("row-container");
  let content = '<div class="row row-cols-1 row-cols-md-4 g-2">';
  posts.forEach((result, i) => {
    content += `<div class="col">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${result.title}</h5>
            <p class="card-text">${result.body}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        </div>
       
  `;
  });

  content += "</div>";
  container.innerHTML += content;
});
