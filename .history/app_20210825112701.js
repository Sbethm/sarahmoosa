const typing = document.getElementById('typing');

const wordsTyped = [];
let i = 0;
let j = 0;

function type() {
    //const typeLetters2 = 'Designs that speak for you'; 
    const typeWords = ['Clear, ', 'Functional, ', 'Beautiful ', 'Web Designs'];
    

    if(i <= typeWords.length){

        if(j < typeWords[i].length){
            wordsTyped.push(typeWords[i][j]);
            j++;
            setTimeout(type, 200);
        }

        if(j == typeWords[i].length){
            i++;
            j = 0;
        }
        
    }

    
    typing.innerHTML = `${wordsTyped.join('')}<span class="cursor"`;
}

type()