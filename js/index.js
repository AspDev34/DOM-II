// Your code goes here

// mouseenter event

let missedTheBus = document.querySelector('h1');
missedTheBus.addEventListener('mouseenter', () => {
    missedTheBus.style.backgroundColor = 'greenYellow';
    missedTheBus.style.color = 'white';
})

// mouseleave event

missedTheBus.addEventListener('mouseleave', () => {
    alert("You're going to miss the fun!");
})

// dblclick event

let changePic = document.querySelector('.intro img');
changePic.addEventListener('dblclick', () => {
    changePic.src = 'https://cdn.pixabay.com/photo/2013/07/13/11/36/volkswagen-158463__480.png';
})

// resize event

let newSize = document.querySelector('.intro img');

window.addEventListener('resize', () => {
    newSize.style.display = 'none';
    
})

// mousedown event

let down = document.querySelector('.img-content img');
down.addEventListener('mousedown', () => {
    down.style.border = "4px solid red";
})

// mouseup event 

// let up = document.querySelector('.img-content img');
down.addEventListener('mouseup', () => {
    down.style.display = "none";
})

// wheel event *un-comment when needed.

// let wheelEvent = document.querySelector('html');
// wheelEvent.addEventListener('wheel', () => {
//     alert('Sorry, I know this is annoying. Drag the actual scrollbar.');
// })

//

// copy event 

let copyEvent = document.querySelector('p');
copyEvent.addEventListener('copy', () => {
    alert('Make sure to give me credit!');
})