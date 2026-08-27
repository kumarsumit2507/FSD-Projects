const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer__button");
const nextButton = document.getElementById("next__btn");

let currentQueIndex = 0;
let userScore = 0;

const questions =
    [
        {
            question: "Which of the following is responsible for managing memory, processes, and hardware in an OS?",
            answers: [
                { text: "Kernel", correct: true },
                { text: "Shell", correct: false },
                { text: "Compiler", correct: false },
                { text: "API", correct: false }
            ]
        },
        {
            question: "What state does a process enter when it is waiting for an I/O operation to complete?",
            answers: [
                { text: "Running", correct: false },
                { text: "Ready", correct: false },
                { text: "Blocked / Waiting", correct: true },
                { text: "Terminated", correct: false }
            ]
        },
        {
            question: "Which CPU scheduling algorithm operates on a First-Come, First-Served basis with time slices?",
            answers: [
                { text: "Shortest Job First (SJF)", correct: false },
                { text: "Round Robin (RR)", correct: true },
                { text: "Priority Scheduling", correct: false },
                { text: "Multilevel Queue", correct: false }
            ]
        },
        {
            question: "Which condition is NOT one of the four necessary Coffman conditions for a deadlock to occur?",
            answers: [
                { text: "Mutual Exclusion", correct: false },
                { text: "Hold and Wait", correct: false },
                { text: "Preemption", correct: true },
                { text: "Circular Wait", correct: false }
            ]
        },
        {
            question: "What mechanism allows an operating system to use secondary storage as if it were main memory?",
            answers: [
                { text: "Virtual Memory", correct: true },
                { text: "Cache Memory", correct: false },
                { text: "DMA (Direct Memory Access)", correct: false },
                { text: "Buffer Overflow", correct: false }
            ]
        },
        {
            question: "Which memory management technique divides physical memory into fixed-size blocks?",
            answers: [
                { text: "Segmentation", correct: false },
                { text: "Paging", correct: true },
                { text: "Dynamic Allocation", correct: false },
                { text: "Compaction", correct: false }
            ]
        },
        {
            question: "What occurs when the OS spends more time swapping pages in and out of memory than executing processes?",
            answers: [
                { text: "Deadlock", correct: false },
                { text: "Thrashing", correct: true },
                { text: "Fragmentation", correct: false },
                { text: "Starvation", correct: false }
            ]
        },
        {
            question: "Which command/system call in UNIX-like operating systems is used to create a new process?",
            answers: [
                { text: "exec()", correct: false },
                { text: "fork()", correct: true },
                { text: "wait()", correct: false },
                { text: "exit()", correct: false }
            ]
        },
        {
            question: "Which file system allocation method suffers from external fragmentation?",
            answers: [
                { text: "Contiguous Allocation", correct: true },
                { text: "Linked Allocation", correct: false },
                { text: "Indexed Allocation", correct: false },
                { text: "Inode-based Allocation", correct: false }
            ]
        },
        {
            question: "What is the primary purpose of a Semaphore in an operating system?",
            answers: [
                { text: "To speed up CPU clock rate", correct: false },
                { text: "To solve process synchronization and critical section problems", correct: true },
                { text: "To compress files on disk", correct: false },
                { text: "To manage device drivers", correct: false }
            ]
        }
    ]



function startQuiz() {
    currentQueIndex = 0;
    userScore = 0;
    nextButton.innerHTML = "Next";
    showQue();
}

function showQue() {
    resetState();
    let currentQue = questions[currentQueIndex];
    let queNo = currentQueIndex + 1;
    questionElement.innerHTML = queNo + "." + currentQue.question;

    currentQue.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("ans__btn");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}


function selectAnswer(e) {
    const selectedBtn = e.target;
    const iscorrect = selectedBtn.dataset.correct === "true";
    if (iscorrect) {
        selectedBtn.classList.add("correct");
        userScore++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;

    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Your scored ${userScore} out of ${questions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}


function handleNextButton() {
    currentQueIndex++;
    if (currentQueIndex < questions.length) {
        showQue();
    } else {
        showScore();
    }
}


nextButton.addEventListener("click", () => {
    if (currentQueIndex < questions.length) {
        handleNextButton();

    } else {
        startQuiz();
    }
});


startQuiz();


