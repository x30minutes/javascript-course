// allows select dynamic elements
// event propagation - order the event are fired
// event bubbling - clicked element first then bubbles up -- default
// event capturing  fires at the root and fires until reaches target

const container = document.querySelector(".container");
const list = document.querySelector(".list-items");

function showBubbling(e) {
  console.log("currentTarget", e.currentTarget);
  console.log("target", e.target);
  if (e.target.classList.contains("link")) {
    console.log(`you clicked on a link`);
  }
}

function stopPropagation(e) {
  console.log(`you clicked on list`);
  e.stopPropagation();
}

list.addEventListener("click", showBubbling, { capture: true });
container.addEventListener("click", showBubbling, { capture: true });
