const container = document.querySelector(".container");
const gridBtn = document.querySelector(".main-create");
const restartBtn = document.querySelector(".main-restart");

function createGrid() {
  const gridSizeInput = document.querySelector(".main-input");
  const val = parseInt(gridSizeInput.value);

  container.innerHTML = ""

  for (let i = 0; i < val * val; i++) {
    const containerItem = document.createElement("div");
    containerItem.classList.add("container-item");
    containerItem.classList.add("clean");
    container.setAttribute("style", `grid-template-columns: repeat(${val}, 1fr); grid-template-rows: repeat(${val}, 1fr);`)
    container.appendChild(containerItem);


    containerItem.addEventListener("mouseover", () => {
      containerItem.classList.remove("clean");
      containerItem.classList.add("painted");
    })
  }

}

gridBtn.addEventListener("click", createGrid);