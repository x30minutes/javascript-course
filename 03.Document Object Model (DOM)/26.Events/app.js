/*
The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images and subframes to finish loading.

window.addEventListener('DOMContentLoaded'), function(){
  //your code goes here
});

document.addEventListener...

*/

// window.addEventListener("DOMContentLoaded", function () {
//   const heading = document.querySelector("h1");
//   console.log(heading);
//   heading.style.color = "red";
// });

//it makes sense if script is loaded in head other than body

/*
The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images. This is in contrast to DOMContentLoaded, which is fired as soon as the page DOM has been loaded, without waiting for resources to finish loading

windows.addEventListener('load', function(){
    //your code goes here
});

 */

/*
Scroll Event - on element or document

window.addEventListener('scroll', function(){
    console.log(window.scrollY + 'px');
    console.log(window.scrollX + 'px');
});

document

scrollY - return the number of pixels the document is currently scrolled along the vertical axis (pageYOffset)

scrollX- return the number of pixels the document is currently scrolled along the horizontal axis (pageXOffset)
*/

// window.addEventListener("scroll", function () {
//   console.log(window.scrollY + "px");
//   console.log(window.scrollX + "px");
// });

/*
innerWidth - The read-only Window property the interior width of the window in pixels

innerHeight - The read only property of the Window interface, returns the interior height of the window in pixels

The Element.getBoundingClientRect() method returns a DOMRect object providing information about the size of a element and its position relative to the viewport.
*/

console.log("height :" + window.innerHeight);
console.log("width :" + window.innerWidth);

const btn = document.querySelector(".btn");
const box = document.querySelector(".box");

btn.addEventListener("click", function () {
  const values = box.getBoundingClientRect();
  console.log(values);
});

window.addEventListener("resize", function () {
  console.log(window.innerWidth);
});
