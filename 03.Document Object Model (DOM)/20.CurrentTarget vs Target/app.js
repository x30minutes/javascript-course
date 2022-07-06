// currentTarget- always refers to the element to which the event handler has been attached to
// target identifies the element on whcih the event occured

const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    // console.log(e.currentTarget);
    // e.currentTarget.style.color = "green";
    console.log("target", e.target);
    e.target.style.color = "green";
  });
});
