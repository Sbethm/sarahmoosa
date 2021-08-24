const typing = document.getElementById('typing');

function type() {
    const typeWords = ['Clear,', 'Functional,', 'Beautiful'];
    const typeLetters2 = 'Designs that speak for you'; 
    const wordsTyped = [];
    let i = 0;
    let j = 0;

    if(i < typeWords.length){

        if(j <= typeWords[i].length){
            console.log(wordsTyped.push(typeWords[i][j]));
            j++;
            setTimeout(type, 1000);
        }

        i++
    }

    
    typing.innerHTML = `${wordsTyped}`;
}

type()