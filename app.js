const downIcon  = document.querySelector('#question-active > div:nth-child(1) > div.icon-up');
const hiddenText = document.querySelector('#answer-text');
const question =document.querySelector('#question-active > div:nth-child(1) > span > p');
const upBtn =document.querySelector('.icon-down');
const upBtnNone =document.querySelector("#answer-text > p");

question.addEventListener('click', () => {
    hiddenText.classList.remove('hidden');
    hiddenText.classList.add('.hiidentextStyle')
    downIcon.classList.add('.hidden')
    upBtn.classList.remove('hidden')
});
upBtnNone.addEventListener('click', () => {
    upBtn.classList.add('hidden')
    hiddenText.classList.add('hidden')

})


