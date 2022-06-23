// //Tranverse the DOM
// // Select items
// const btns = document.querySelectorAll('.question-btn');

// // Event listener
// btns.forEach(function(btn){
//     btn.addEventListener('click', function(e){
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle("show-text")
//     });
// })

//Selectors inside the element

//Select Items
const questions = document.querySelectorAll('.question');

questions.forEach(function(question){
    const btn = question.querySelector('.question-btn');
    // console.log(btn);
    btn.addEventListener('click', function(){
        questions.forEach(function(item){
            if(item !== question){
                item.classList.remove("show-text");

            }
        })
        question.classList.toggle("show-text");
    })
})