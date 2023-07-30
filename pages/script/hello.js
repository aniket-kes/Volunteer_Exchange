const questions = document.querySelectorAll('.question');
// console.log(questions);

questions.forEach(function(question) {
    // console.log(question);
    let btn = question.querySelector('.plus-minus-toggle');
    btn.addEventListener('click', function(e) {
        let question = e.target.parentElement;
        // console.log(question);
        question.parentElement.classList.toggle('show-answer');
        if (e.target.classList.contains('fa-plus-square')) {
            // console.log(e.target.classList[1]);
            e.target.classList.remove('fa-plus-square');
            e.target.classList.add('fa-minus-square');
        } else {
            e.target.classList.remove('fa-minus-square');
            e.target.classList.add('fa-plus-square');
        }

        questions.forEach(function(que) {
            // console.log(que);
            if (question != que) {
                que.parentElement.classList.remove('show-answer');
                // console.log('check');
                let btn = que.querySelector('.plus-minus-toggle');
                if (btn.classList.contains('fa-minus-square')) {

                    btn.classList.remove('fa-minus-square');
                    btn.classList.add('fa-plus-square');
                }
            }
        });
    });
});
