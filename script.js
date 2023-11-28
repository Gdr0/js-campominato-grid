const gridElement = document.getElementById("grid");

for (let i = 1; i <= 100; i++) {
  const newElement = createMyElement("div", "square");
  gridElement.append(newElement);
  newElement.append(i);
}

function createMyElement(tagtype, classname) {
  const currentElement = document.createElement(tagtype);
  currentElement.classList.add(classname);
  return currentElement;
}
