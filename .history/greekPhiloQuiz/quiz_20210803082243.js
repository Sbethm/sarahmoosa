//QUIZ CODE
function buildQuiz() {
    //variable to store the HTML output
    const output = [];
    //for each question...
    myQuestions.forEach( 
        (currentQuestion, questionNumber) => {
            //variable to store the list of possible answers
            const answers =[];
            //and for each available answer..
            for(letter in currentQuestion.answers){
                //...add an HTML radio button
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${currentQuestion.answers[letter]} 
                    </label>`
                );
            }
            //add this question and its answers to the output
            output.push(
                `<div class="slide">
                    <div class="question"> ${currentQuestion.question} </div>
                    <div class="answers"> ${answers.join('')} </div>
                </div>`
            );
        }
    );
    //finally combine out output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
};

function showResults() {
    //gather answer containers from the quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');
    //keep track of user's answers
    let pyth = 0;
    let socr = 0;
    let ari = 0;
    //for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
        //find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        //add up values
        if(userAnswer === 'p'){
            pyth++;
        }else if(userAnswer === 's'){
            socr++;
        }else{
            ari++;
        }
        //show results
        if(pyth > socr && pyth > ari) {
            results.innerHTML = `<div class='results'>You were <span>Pythagoras</span>!  You created a closed community with like minded people, and together, you vowed that you would never speak about what you learned or did there. With your brethren you practiced music, wrestling, and the mystic art of numbers. 
            <br><br>
            <span>Pythagoras</span> believed that when the body died, the soul moved on to another body and claimed that he was once the son of the god Hermes. 
            <br><br>
            Who were you in your past life? Maybe you were Pythagoras himself!</div>`;
        } else if(socr > pyth && socr > ari) {
            results.innerHTML = `<div class='results'>You were <span>Socrates</span>! You were one of the ugliest men Ancient Greece had ever seen, but something about your wisdom drew others in to listen to your words. 
            <br><br>
            <span>Socrates</span> claimed teach nothing, but he told everyone that he believed knowledge was virtue. He questioned every idea that Ancient Greeks believed, from the gods to the law to why the sun rises and sets. 
            <br><br>
            Do you question everything in the search for knowledge and virtue as Socrates did?</div>`;
        } else if(ari > pyth && ari > socr) {
            results.innerHTML = `<div class='results'>You were <span>Aristotle</span>. You were a student of Plato and learned from him about Socrates' logical questioning. Not only did you question, you also searched for the answers. He used the first forms of the scientific method to study the world. 
            <br><br>
            <span>Aristotle</span> also was the tutor of Alexander the Great who, while out on war campaigns, gathered animal and plant specimens for his beloved teacher to study. With the knowledge he gathered, Aristotle created a library full of knowledge. Do you study the world around you with the same thirst for knowledge?</div>`;
        } else {
            results.innerHTML = `<div class='results'>You can't seem to decide which philosopher to follow. Perhaps you should start your own school of philosophy! So, go ahead, grab your tools, build a time machine, and teach those Ancient Greeks your new crazy, philosophical ideas!</div>`;
        }
            quizContainer.style.display = `none`;
            submit.style.display = `none`;
            previousButton.style.display = `none`;
    });
};

// New functions go here
function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
        previousButton.style.display = 'none';
    } else {
        previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submit.style.display = 'inline-block';
    } else {
        nextButton.style.display = 'inline-block';
        submit.style.display = 'none';
    }
}

function showNextSlide() {
    showSlide(currentSlide + 1);
}

function showPreviousSlide() {
    showSlide(currentSlide - 1);
}

// Variables
// Same code as before
const quizContainer = document.getElementById('quiz');
const submit = document.getElementById('submit');
const results = document.getElementById('results');

//questions and answers
const myQuestions = [
    {
        question: "Your early years were important in shaping your future as a philosopher. Who laid the early foundation of your life?",
        answers: {
            p: "a father who was a wealthy gem-engraver",
            s: "a father who was a simple stone worker",
            a: "a father who was an intelligent physician to the king"
        }
    }, 
    {
        question: "You founded a school on principals that you hoped would help lead young Greeks to attaining further knowledge. What was the founding principal of your school?",
        answers: {
            p: "a life of abstinence from sexual pleasure and physical extravagance along with frequent fasting and vegetarianism",
            s: "you never founded a school and, in fact, claimed to know and teach nothing",
            a: "a focus on cooperative research and a school that was led by the students"
        }
    },
    {
        question: "In the time of Ancient Greece, the gods were worshipped in temples by many. Were you a devote worshipper?",
        answers: {
            p: "You believed that everything was made of numbers, even the gods, and that the number three was a holy symbol of the god Apollo.",
            s: "You never claimed to believe or not but you vigorously questioned those that did and the logic behind their beliefs",
            a: "You threw away the idea that the gods had a hand in reason and instead observed the natural world to find reason."
        }
    }, 
    {
        question: "During these ancient times, democracy was a new and relatively unknown form of government. There was great political strife between those who favored democracy and those who favored an oligarchy, a government ruled by a king. What was your ideas on these forms of government?",
        answers: {
            p: "The idea of democracy was rejected by you and your followers.",
            s: "You never supported either side and criticized both.",
            a: "You created a mathematical formula that combined the benefits of both systems."
        }
    }, 
    {
        question: "You spent many years developing your wisdom and teaching young minds, but every life must come to an end, even that of a great philosopher such as yourself. How did you die?",
        answers: {
            p: "While you were attending a lecture with your fellow colleagues, the building you were in was set a fire by an opposing political party, and you perished in the flames along with many of your peers.",
            s: "You were put on trail by the government, found guilty, and executed for having polluted the minds of the young with radical thoughts and for not worshipping the gods of Ancient Greece.",
            a: "Instead of remaining in a country that accused you of impiety towards the gods, you escaped to your mother's land where you lived out the rest of your life."
        }
    } 
]

// Kick things off
buildQuiz();

// Pagination
// New code here
const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

// Show the first slide
showSlide(currentSlide);

// Event listeners
// New event listeners here
previousButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

//submit button eventListener (showResults)
submit.addEventListener('click', showResults);
