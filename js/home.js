function addTwoNum() {
  let a = 5;
  let b = 7;
  alert(a + b);
}

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("registerForm")
    .addEventListener("submit", formSubmit);
});

async function formSubmit(event) {
  event.preventDefault();
  const fd = new FormData(event.target);
  const data = await JSONformData(fd);
  console.log(data);

  try {
    const response = await fetch(
      "https://blognodeserver.herokuapp.com/api/person/register-person",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const result = await response.json();
    console.log(result);
    if (response.status >= 400) {
      throw new Error(result.msg);
    }
  } catch (error) {
    console.log(error.message);
    alert(error.message);
  }
}

function JSONformData(formData) {
  let obj = {};
  for (let key of formData.keys()) {
    obj[key] = formData.get(key);
  }

  return obj;
}
