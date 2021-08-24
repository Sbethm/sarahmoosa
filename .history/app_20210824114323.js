const typing = document.getElementById('typing');
const typeWords = ['Clear,', 'Functional,', 'Beautiful'];
const wordsTyped = [];
let i = 0;
    let j = 0;
function type() {
    //const typeLetters2 = 'Designs that speak for you'; 
    
    

    if(i <= typeWords.length){

        if(j <= typeWords[i].length){
            wordsTyped.push(typeWords[i][j]);
            j++;
            setTimeout(type, 500);
        }

        i++
    }

    
    typing.innerHTML = `${wordsTyped}`;
}

type()