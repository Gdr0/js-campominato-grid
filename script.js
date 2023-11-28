const gridElement = document.getElementById("grid");
const buttonPlay = document.getElementById("play");

buttonPlay.addEventListener(
  "click",
  function () {
    for (let i = 1; i <= 100; i++) {
      const newElement = createMyElement("div", "square");
      newElement.addEventListener("click", function () {
        this.classList.add("clicked");
        console.log(i);
      });
      gridElement.append(newElement);
      newElement.append(i);
    }
  },
  { once: true }
);

function createMyElement(tagtype, classname) {
  const currentElement = document.createElement(tagtype);
  currentElement.classList.add(classname);
  return currentElement;
}
