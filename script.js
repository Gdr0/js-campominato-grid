const gridElement = document.getElementById("grid");
const buttonPlay = document.getElementById("play");
const difficile = document.getElementById("difficile");
const facile = document.getElementById("facile");

// buttonPlay.addEventListener(
//   "click",
//   function () {
//     for (let i = 1; i <= 100; i++) {
//       const newElement = createMyElement("div", "square");
//       newElement.addEventListener("click", function () {
//         this.classList.add("clicked");
//         console.log(i);
//       });
//       gridElement.append(newElement);
//       newElement.append(i);
//     }
//   },
//   { once: true }
// );

function createMyElement(tagtype, classname) {
  const currentElement = document.createElement(tagtype);
  currentElement.classList.add(classname);
  return currentElement;
}
facile.addEventListener("click", function () {
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
});

difficile.addEventListener("click", function () {
  buttonPlay.addEventListener(
    "click",
    function () {
      for (let i = 1; i <= 81; i++) {
        const newElement = createMyElement("div", "square-diff");
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
});
