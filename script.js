const verbs = [
    { base: "Begin", past: "Began", participle: "Begun", sentence: "I ___ my homework yesterday." },
    { base: "Break", past: "Broke", participle: "Broken", sentence: "She ___ her phone last week." },
    { base: "Bring", past: "Brought", participle: "Brought", sentence: "He ___ flowers for his mom." },
    { base: "Build", past: "Built", participle: "Built", sentence: "They ___ a new house in town." },
    { base: "Catch", past: "Caught", participle: "Caught", sentence: "He ___ the ball easily." },
    { base: "Choose", past: "Chose", participle: "Chosen", sentence: "She ___ the red dress." },
    { base: "Drive", past: "Drove", participle: "Driven", sentence: "He ___ to the city yesterday." },
    { base: "Feel", past: "Felt", participle: "Felt", sentence: "I ___ happy this morning." },
    { base: "Forget", past: "Forgot", participle: "Forgotten", sentence: "He ___ his keys again." },
    { base: "Teach", past: "Taught", participle: "Taught", sentence: "She ___ English at school." }
];

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

function generateQuiz() {
    const shuffledVerbs = shuffleArray([...verbs]);
    const questionContainer = document.getElementById("questions");
    questionContainer.innerHTML = "";

    shuffledVerbs.forEach((verb, index) => {
        const questionHTML = `
            <p>${verb.sentence.replace("___", `<input type='text' id='q${index}' data-answer='${verb.past}' required>`)} (Past: ${verb.past})</p>
        `;
        questionContainer.innerHTML += questionHTML;
    });
}

document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let score = 0;
    verbs.forEach((verb, index) => {
        const userAnswer = document.getElementById(`q${index}`).value.trim();
        if (userAnswer.toLowerCase() === verb.past.toLowerCase()) {
            score++;
        }
    });
    alert(`You scored ${score} out of ${verbs.length}!`);
});

generateQuiz();