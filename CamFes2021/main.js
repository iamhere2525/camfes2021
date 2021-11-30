const app = new Vue({
  el: "#app",
  data: {
    tabNum: 0,
    correctImage: -1,
    titles: ["尼子の部屋", "CM", "音楽祭"],
    questions: [
      {
        question: "尼子の部屋のキーワードを打ってね",
        input: "",
        correct: "尼子",
      },
      {
        question: "CMのキーワードを打ってね",
        input: "",
        correct: "CM",
      },
      {
        question: "音楽祭のキーワードを打ってね",
        input: "",
        correct: "音楽祭",
      },
    ],
    images: [
      "10_12_15_8_14_659.png",
    ]
  },
  computed: {
    tabClass: function() {
      return function (index) {
        const tabColor = index % 3;
        return ["tab-title", "title" + tabColor];
      }
    }
  },
  methods: {
    answer(index) {
      if (this.questions[index].input === this.questions[index].correct) {
        this.correctImage = index;
      } else {
        alert("不正解");
      }
    }
  }
})
  
