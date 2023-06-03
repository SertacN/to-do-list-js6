const addForm = document.querySelector(".add");
const todo = document.querySelector(".todos");
const search = document.querySelector(".search input");

// Listeye Eleman Ekleme
addForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const handleChange = addForm.add.value.trim();
  const todoHTML = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${handleChange}</span>
    <i class="far fa-trash-alt delete"></i>`;
  if (handleChange.length) {
    todo.insertAdjacentHTML("beforeend", todoHTML);
    addForm.add.value = "";
  }
});
// Listeden Eleman Silme
todo.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete")) {
    event.target.parentElement.remove();
  }
});

// Liste içinde Arama Yapma
search.addEventListener("keyup", (event) => {
  const handler = event.target.value.trim().toLowerCase();
  filterHandler(handler);
});

function filterHandler(e) {
  Array.from(todo.children).forEach((listItem) => {
    if (listItem.textContent.toLowerCase().includes(e)) {
      listItem.classList.remove("filtered");
    } else {
      listItem.classList.add("filtered");
    }
  });
}
