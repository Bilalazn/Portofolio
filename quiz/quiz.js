const questions = [
  {
    question: "Ibukota Indonesia adalah?",
    options: ["Bandung", "Surabaya", "Jakarta", "Medan"],
    answer: "Jakarta"
  },
  {
    question: "2 + 5 = ?",
    options: ["5", "7", "10", "8"],
    answer: "7"
  },
  {
    question: "Warna primer adalah?",
    options: ["Merah, Hijau, Biru", "Merah, Kuning, Biru", "Merah, Putih, Hitam", "Kuning, Hitam, Biru"],
    answer: "Merah, Kuning, Biru"
  }
];

let currentQuestion = 0;
let score = 0;

const quiz = document.getElementById("quiz");
const nextBtn = document.getElementById("next");
const result = document.getElementById("result");

function loadQuestion() {
  let q = questions[currentQuestion];
  quiz.innerHTML = `
    <h2>${q.question}</h2>
    <div class="options">
      ${q.options.map(option => `
        <label>
          <input type="radio" name="option" value="${option}"> ${option}
        </label>
      `).join('')}
    </div>
  `;
}

function showResult() {
  quiz.style.display = "none";
  nextBtn.style.display = "none";
  result.innerHTML = `<h2>Skor kamu: ${score} / ${questions.length}</h2>`;
}

nextBtn.addEventListener("click", () => {
  const selected = document.querySelector('input[name="option"]:checked');
  if (selected) {
    if (selected.value === questions[currentQuestion].answer) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  } else {
    alert("Pilih salah satu jawaban dulu!");
  }
});

loadQuestion();
