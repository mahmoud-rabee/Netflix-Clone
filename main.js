// Show Answers When Click on Question
let questions = document.querySelectorAll('.question');

questions.forEach(function(question){
    let hidden = true;
    question.addEventListener('click', function() {
        if(hidden === true) {
            questions.forEach(function(question){
                question.nextSibling.nextSibling.classList.add("hidden");
            })
            question.nextSibling.nextSibling.classList.remove("hidden");
            question.children[1].innerHTML = "&#10005";
            hidden = false;
        } else {
            question.nextSibling.nextSibling.classList.add("hidden");
            question.children[1].innerHTML = "&#10011";
            hidden = true;
        }
    })
})// Show Answers When Click on Question
