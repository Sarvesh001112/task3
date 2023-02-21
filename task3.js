const quizData = [{
    question: "The latest HTML standard is",
    a: "HTML 4.0",
    b: "HTML 5.0",
    c: "XML",
    d: "SGML",
    correct: "b",
},
{
    question: "Which of the following is used to read an HTML page and render it?",
    a: "Web server",
    b: "Web networK",
    c: "Web browser",
    d: " Web matrix",
    correct: "c",
},
{
    question: "In which part of the HTML metadata is contained?",
    a: "head tag",
    b: "html tag",
    c: "title tag",
    d: "body tag",
    correct: "a",
},
{
    question: "The property in CSS used to change the background color of an element is -",
    a: "bgcolor",
    b: "color",
    c: "background-color",
    d: "All of the above",
    correct: "c",
},
{
    question: " Which of the following property is used as the shorthand property for the padding properties?",
    a: "padding-left",
    b: " padding-right",
    c: " padding",
    d: "All of the above",
    correct: "c",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Your Score is ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);