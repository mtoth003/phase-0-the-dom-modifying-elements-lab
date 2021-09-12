// Write your code here!

main.remove();

const newHeader = document.createElement('h1');
newHeader.setAttribute("id", "victory");
newHeader.textContent = "Mike is the champion";

document.body.append(newHeader)