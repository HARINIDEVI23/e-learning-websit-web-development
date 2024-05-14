
const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultContainer = document.getElementById('result');

const myQuestions = [
    {
        question: "What is the function of the Data Link Layer in the OSI model?",
        answers: {
            a: "Handles error detection and correction",
            b: "Provides logical addressing",
            c: "Manages end-to-end communication"
        },
        correctAnswer: "a"
    },
    {
        question: "Which layer of the OSI model is responsible for routing and forwarding packets?",
        answers: {
            a: "Session layer",
            b: "Networking layer",
            c: "Application layer"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the primary purpose of the Transport Layer in the OSI model?",
        answers: {
            a: "Facilitates reliable data transfer between end systems",
            b: "Handles routing and forwarding of packets",
            c: "Manages sessions between applications"
        },
        correctAnswer: "a"
    },
    {
        question: "Which protocol is responsible for converting domain names to IP addresses?",
        answers: {
            a: "FTP",
            b: "SMTP",
            c: "DNS"
        },
        correctAnswer: "c"
    },
    {
        question: "What protocol is used for sending emails over the Internet? ",
        answers: {
            a: "SNMP",
            b: "SMTP",
            c: "DHCP"
        },
        correctAnswer: "b"
    },
    {
        question: "Name a networking device used to connect multiple computers within the same local area network.",
        answers: {
            a: "Switch",
            b: "Router",
            c: "Bridge"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the purpose of the HTTP protocol?",
        answers: {
            a: "Transfer hypertext documents over the Internet",
            b: "Facilitate secure communication between servers and clients",
            c: "Resolve domain names to IP addresses"
        },
        correctAnswer: "a"
    },
    {
        question: "What protocol is responsible for securely transferring files over a network?        ",
        answers: {
            a: "DHCP",
            b: "SNMP",
            c: "FTP"
        },
        correctAnswer: "c"
    },
    {
        question: "How many bits are used to represent an IPv4 address?",
        answers: {
            a: "48",
            b: "32",
            c: "64"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the default subnet mask for a Class B IPv4 address?",
        answers: {
            a: "255.255.255.0",
            b: "255.0.0.0",
            c: "255.255.0.0"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the primary function of a firewall in a network?",
        answers: {
            a: "Monitor and control incoming and outgoing network traffic",
            b: "Translate domain names to IP addresses",
            c: "Connect multiple computers within the same local area network"
        },
        correctAnswer: "a"
    },
    {
        question: "Which type of network covers a large geographical area, often spanning cities or countries?",
        answers: {
            a: "LAN (Local Area Network)",
            b: "MAN (Metropolitan Area Network)",
            c: "WAN (Wide Area Network)"
        },
        correctAnswer: "c"
    },
    {
        question: "Which routing protocol uses distance vector algorithm and employs hop count as the metric?",
        answers: {
            a:"OSPF (Open Shortest Path First)",
            b: "RIP (Routing Information Protocol)",
            c: "BGP (Border Gateway Protocol)"
        },
        correctAnswer: "a"
    },
    {
        question: "In the IPv4 addressing scheme, which class does an IP address belong to if it starts with the range of 192 to 223 in the first octet?",
        answers: {
            a: "Class A",
            b: "Class B",
            c: "Class C"
        },
        correctAnswer: "b"
    },
    {
        question:"What is the purpose of the ARP (Address Resolution Protocol) in a TCP/IP network?",
        answers:{
            a: "To translate IP addresses to MAC addresses",
            b: "To translate domain names to IP addresses",
            c: "To manage routing tables"
        },
        correctAnswer: "a"
    }
];

function buildQuiz() {
    const output = [];

    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];

        for (const letter in currentQuestion.answers) {
            answers.push(
                `<label class="answer">
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter}: ${currentQuestion.answers[letter]}
                </label>`
            );
        }

        output.push(
            `<div class="question"> 
                <p>Question ${questionNumber + 1}: ${currentQuestion.question}</p>
            </div>
            <div class="answers"> ${answers.join('')} </div>`
        );
    });

    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');

    let numCorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
            answerContainers[questionNumber].style.color = 'lightgreen'; // Highlight correct answers
        } else {
            answerContainers[questionNumber].style.color = 'red'; // Highlight incorrect answers
        }
    });

    resultContainer.innerHTML = `You got ${numCorrect} out of ${myQuestions.length} correct.`;

    if (numCorrect > 9) {
        resultContainer.innerHTML += "<br>Congratulations! You passed!";
        resultContainer.classList.add('celebration');
        generateConfetti(100); // Generate 100 confetti particles
        // Redirect to congratulations page
        window.location.href = "congratulations.html";
    } else {
        resultContainer.innerHTML += "<br>Sorry, you didn't pass.";
    }
}


// Function to generate confetti particles
function generateConfetti(count) {
    const confettiContainer = document.createElement('div');
    confettiContainer.classList.add('confetti-container');
    for (let i = 0; i < count; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        confetti.style.animationDelay = `${Math.random()}s`; // Random animation delay
        confettiContainer.appendChild(confetti);
    }
    document.body.appendChild(confettiContainer);

    // Remove confetti after animation ends
    confettiContainer.addEventListener('animationend', () => {
        confettiContainer.remove();
    });
}

buildQuiz();

submitButton.addEventListener('click', showResults);
