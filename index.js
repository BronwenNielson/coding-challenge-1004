const buttons = document.querySelectorAll ('button')
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log('clicked')
    })
});

const basic = 19.99
const professional = 24.99
const master = 39.99

document.querySelector('#input-label').addEventListener ('click', () => {
    if (!document.querySelector('#toggle').checked) {
        document.querySelector('#basic').textContent = basic
        document.querySelector('#professional').textContent = professional
        document.querySelector('#master').textContent = master
    } else {
        document.querySelector('#basic').textContent = basic * 12
        document.querySelector('#professional').textContent = professional *12
        document.querySelector('#master').textContent = master * 12

    }
});