const add = document.querySelector('.add');
const clean = document.querySelector('.clean');
const showAdvice = document.querySelector('.showAdvice');
const showOptions = document.querySelector('.showOptions');
const input = document.querySelector('input');
const h1 = document.querySelector('h1');

let options = [];

const addAdvise = (e) => {
    e.preventDefault();
    if(input.value){
        options.push(input.value);
        alert(`Dodano ${input.value}.`)
        input.value = '';
    } else {
        alert("Enter an option")
    }
}
const resetAll = (e) => {
    e.preventDefault();
    options = [];
    // options.length = 0;
    h1.textContent = '';
    alert("Reset Copleted");
}
const giveAdvice = () => {
    if(options.length){
        const index = Math.floor(Math.random() * options.length);
        h1.textContent = options[index];
    } else {
        alert("No Avaliable Advice.");
    }
}
const listOptions = () => {
    if(options.length){
        alert(`Avaliable options : ${options.join(" --- ")}.`);
    } else {
        alert("No Avaliable Options.")
    }
}


add.addEventListener('click', addAdvise);
clean.addEventListener('click', resetAll);
showAdvice.addEventListener('click', giveAdvice);
showOptions.addEventListener('click', listOptions);