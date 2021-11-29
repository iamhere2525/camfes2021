const quiz = [
    {
      question :'尼子の部屋のキーワードを打ってね',
      correct : '尼子'
    },
    {
      question: 'CMのキーワードを打ってね',
      correct: 'CM'
    },
    {
      question: '音楽祭のキーワードを打ってね',
      correct: '音楽祭'
    }
  ];
//   quiz.sort(() => 0.5 - Math.random());
  
  const quizLength = quiz.length;
  let quizIndex = 0;
  let score = 0;
  
  const answerInput = document.getElementById('answer-input');
  const submitButton = document.getElementById('submit-button');
  const titles = document.getElementsByClassName('js-question');
  console.log(titles[0]);
  // クイズの問題文を表示
  const setupQuiz = () => {
      for(let i = 0; i < quizLength; i ++) {
          titles[i].textContent = quiz[i].question;
      }
    // document.getElementById('js-question').textContent = quiz[quizIndex].question;
    answerInput.value = '';
  };
  
  setupQuiz();
  
  const clickHandler = () => {
    quiz[quizIndex].input = answerInput.value;
    if (quiz[quizIndex].correct === answerInput.value) {
      window.alert('正解');
      score++;
    } else {
      window.alert('不正解');
    }
    quizIndex++; // 次の問題へ
    if (quizIndex < quizLength) {
      setupQuiz();
    } else {
      window.alert('終了 正解数は' + score + '/' + quizLength + 'です');
      showAllAnswers();
    }
  };
  
  // ボタンクリックで正誤判定
  submitButton.addEventListener('click', () => {
    clickHandler();
  });
  
  const showAllAnswers = () => {
    const container = document.getElementById('all-answers-container');
    container.style.display = 'block';
  
    const tbody = document.getElementById('all-answers-tbody');
    for (const q of quiz) {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${q.question}</td><td>${q.input}</td><td>${q.correct}</td><td>${q.input === q.correct ? '○' : '×'}</td>`;
      tbody.appendChild(row);
    }
  };
  