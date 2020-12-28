const questions = [
    {
        question: 'Is the child free from any physical violence, psychological abuse or neglect?',
        options: [
            { text: '0', num: 0 },
            { text: '4', num: 4 },
            { text: '7', num: 7 },
            { text: '10', num: 10 }
        ]
    },
    {
        question: 'Is the child protected from the use of hallucinogens, narcotics, alcohol, tobacco products or any other drugs?',
        options: [
            { text: '0', num: 0 },
            { text: '4', num: 4 },
            { text: '7', num: 7 },
            { text: '10', num: 10 }
        ]
    },
    {
        question: 'Is the child receiving the necessary care and protection?',
        options: [
            { text: '0', num: 0 },
            { text: '4', num: 4 },
            { text: '7', num: 7 },
            { text: '10', num: 10 }
        ]
    },
    {
        question: 'Does the child live in an accessible and adequate home? ',
        options: [
            { text: '0', num: 0 },
            { text: '4', num: 4 },
            { text: '7', num: 7 },
            { text: '10', num: 10 }
        ]
    },
    {
        question: 'Does the child have access to maintenance and support from a responsible parent?',
        options: [
            { text: '0', num: 0 },
            { text: '4', num: 4 },
            { text: '7', num: 7 },
            { text: '10', num: 10 }
        ]
    },
    {
        question: 'Is the child exposed to appropriate facilities, infrastructure and disaster preparedness? ',
        options: [
            { text: '0', num: 0 },
            { text: '4', num: 4 },
            { text: '7', num: 7 },
            { text: '10', num: 10 }
        ]
    },
    {
        question: 'Is the child being cared for by a responsible parent or guardian?',
        options: [
            { text: '0', num: 0 },
            { text: '4', num: 4 },
            { text: '7', num: 7 },
            { text: '10', num: 10 }
        ]
    },
    {
        question: 'Does the child have access to good quality health care, clean water, nutritious food and a clean environment?',
        options: [
            { text: '0', num: 0 },
            { text: '4', num: 4 },
            { text: '7', num: 7 },
            { text: '10', num: 10 }
        ]
    },
    {
        question: 'Is the child engaged in learning in the formal education system?',
        options: [
            { text: '0', num: 0 },
            { text: '4', num: 4 },
            { text: '7', num: 7 },
            { text: '10', num: 10 }
        ]
    },
    {
        question: 'Does the child have access to leisure, play and participate in extracurricular activities?',
        options: [
            { text: '0', num: 0 },
            { text: '4', num: 4 },
            { text: '7', num: 7 },
            { text: '10', num: 10 }
        ]
    },
    {
        question: 'Does the child have basic life skills, values and attitudes necessary for survival and development?',
        options: [
            { text: '0', num: 0 },
            { text: '4', num: 4 },
            { text: '7', num: 7 },
            { text: '10', num: 10 }
        ]
    },
    {
        question: 'Is the child protected from economic exploitation?',
        options: [
            { text: '0', num: 0 },
            { text: '4', num: 4 },
            { text: '7', num: 7 },
            { text: '10', num: 10 }
        ]
    },
]
const questionContainerElement = document.getElementById('question-container')
const answerButton =  document.getElementById('answer-buttons')
const intructions = document.getElementById('intruc')
const safetyElement = document.getElementById('safety-btn')
const scoreBtn = document.getElementById('score-btn')
const container = document.getElementById('main')
const assessement = document.getElementById('assessement')
const organization = document.getElementById('organization')
const home = document.getElementById('home-btn')
const assessementTips = document.getElementById('asssessmentTips')
var allNumbers = []
let currentQuestionIndex, questionsArray, number, rating
const safety = document.getElementById('safety')
const security = document.getElementById('security')
const welfare = document.getElementById('welfare')
const miscellaneous = document.getElementById('miscellaneous')
const overall = document.getElementById('overall')
const category = localStorage.getItem('category')
const questCount = document.getElementById('questCount')
const nextButton = document.getElementById('next-btn')
const questionElement = document.getElementById('question')

nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

if (category === 'safety') {
    rating = ['Very Safe', 'Safe', 'Some Risks', 'Not Safe']
    questionsArray = questions.slice(0, 3)
    startGame()
} else if (category === 'security') {
    rating = ['Very Secure', 'Secure', 'Some Risks', 'Not Secure']
    questionsArray = questions.slice(3, 6)
    startGame()
} else if (category === 'welfare') {
    rating = ['Best Welfare', 'Welfare', 'Some Risks', 'No Welfare']
    questionsArray = questions.slice(6, 9)
    startGame()
} else if (category === 'miscellaneous') {
    rating = ['In interest', 'Maybe', 'Inconclusive', 'Not in interest']
    questionsArray = questions.slice(9, 12)
    startGame()
} else {
    rating = ['Yes', 'Monitor', 'Supervise', 'No']
    questionsArray = questions.slice(9, 12)
    startGame()
}

function goToHome() {
    resultContainer.classList.remove('is-hidden')
    questCount.classList.add('is-hidden')
    container.classList.add('is-hidden')
    scoreBtn.classList.add('is-hidden')
    scoreBtn.classList.add('is-hidden')
    resultContainer.classList.add('is-hidden')
    container.classList.remove('is-hidden')
    intructions.classList.remove('is-hidden')
}

(function() {
    var burger = document.querySelector('.navbar-burger');
    var menu = document.querySelector('.navbar-menu');
    burger.addEventListener('click', function() {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
})();

function startGame() {
    console.log('Started')
    currentQuestionIndex = 0
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(questionsArray[currentQuestionIndex])
}

function showQuestion(question) {
    questCount.innerText = currentQuestionIndex.toString() + " out of " + questionsArray.length.toString()
    questionElement.innerText = question.question
    question.options.forEach(answers => {
        const button = document.createElement('button')
        button.innerText = answers.text
        button.classList.add('button')
        button.classList.add('is-link')
        button.dataset.num = answers.num
        button.addEventListener('click', selectAnswer)
        answerButton.appendChild(button)
    })
}

function resetState() {
    clearStateClass(document.body)
    nextButton.classList.add('is-hidden')
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild)
    }
}

function selectAnswer(e) {
    var selectedButton = e.target
    var num = selectedButton.dataset.num
    allNumbers.push(num)
    setStatusClass(document.body, num)
    Array.from(answerButton.children).forEach(button => {
        setStatusClass(button)
    })
    if (questionsArray.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('is-hidden')
        console.log('nexxxxtttt')
    } else {
        scoreBtn.classList.remove('is-hidden')
        var total = 0;
        for(var i = 0; i < allNumbers.length; i++) {
            num = parseInt(allNumbers[i])
            total += num;
        }
        var avg = total / allNumbers.length;
        localStorage.setItem('results', avg.toFixed(1))
    }
}

function setStatusClass(element) {
    clearStateClass(element)
    element.classList.add('num')
}

function clearStateClass(element) {
    element.classList.remove('is-hidden')
}