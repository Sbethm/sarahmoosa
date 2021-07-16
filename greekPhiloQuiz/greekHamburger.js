const nav = document.getElementById('nav');
const header = document.querySelector('header');
const hamBtn = document.getElementById('hamburger');
const liAbout = document.getElementById('li--about');
const liPy = document.getElementById('li--py');
const liSocr = document.getElementById('li--socr');
const liAri = document.getElementById('li--ari');
const liQuiz = document.getElementById('li--quiz');

hamBtn.addEventListener('click', ()=> {
    hamBtn.classList.toggle('open');
    header.classList.toggle('height');
})
liAbout.addEventListener('click', ()=> {
    hamBtn.classList.toggle('open');
    header.classList.toggle('height');
})
liPy.addEventListener('click', ()=> {
    hamBtn.classList.toggle('open');
    header.classList.toggle('height');
})
liSocr.addEventListener('click', ()=> {
    hamBtn.classList.toggle('open');
    header.classList.toggle('height');
})
liAri.addEventListener('click', ()=> {
    hamBtn.classList.toggle('open');
    header.classList.toggle('height');
})
liQuiz.addEventListener('click', ()=> {
    hamBtn.classList.toggle('open');
    header.classList.toggle('height');
})



