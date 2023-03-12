// Write your code here!/
const element = document.getElementById("main");
element.remove("main");
const newHeader = document.createElement("h1");
//creating h1 id
newHeader.id= "victory"
//creating innerHtml inside h1
newHeader.innerHTML = "Gina is the champion"