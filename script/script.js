// TODO Create automatically 20 div class="miniature"
let portfolio = document.getElementById("portfolio");

for (let i = 0; i < 20; i++) {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "miniature");
    portfolio.appendChild(newDiv);
}
