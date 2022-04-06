const submit_btn = document.querySelector('.card__submit');
const card__content_1 = document.querySelector('.card__content-1');
const card__content_2 = document.querySelector('.card__content-2');
const ratingBtns = document.querySelectorAll('.rating');
const score = document.querySelector('.card__score');
let star_value = 5

submit_btn.addEventListener('click', onSubmit);
ratingBtns.forEach( btn => {
    btn.addEventListener('click', ratingsClick);
});

function onSubmit(){
    card__content_1.classList.add('hide');
    score.textContent = star_value;
    card__content_2.classList.remove('hide');
}

function ratingsClick(event) {
    ratingBtns.forEach(btn => {
        btn.classList.remove('active');
    });
    

    if (event.target.classList.contains('rating')){
        event.target.classList.add('active');
    } else {
        event.target.parentElement.classList.add('active');
    }
    star_value = event.target.textContent;
}