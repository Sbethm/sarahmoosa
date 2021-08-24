const typing = document.getElementById('typing');

const wordsTyped = [];
let i = 0;
let j = 0;

function type() {
    //const typeLetters2 = 'Designs that speak for you'; 
    const typeWords = ['Clear,', 'Functional,', 'Beautiful'];
    

    if(i <= typeWords.length){

        if(j < typeWords[i].length){
            wordsTyped.push(typeWords[i][j]);
            j++;
            setTimeout(type, 500);
        }

        if(j == typeWords[i].length){
            i++;
            
        }
        
    }

    
    typing.innerHTML = `${wordsTyped.join('')}`;
}

type()