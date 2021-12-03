const app = new Vue({
  el: "#app",
  data: {
    tabNum: 0,
    correctImage: -1,
    titles: ["開会式","尼子の部屋1","ライブペイント","イントロ","音楽祭","Booo!踊ってみた","メインステージCM1","ゲームブースCM1","ギネス","メインブースCM2","マリカー","ダンスステージ","尼子の部屋2","英語禁止","カラオケ","ゲームブースCM2","Adorer fashion in Kobe","スマブラ","閉会式"],
    questions: [
      {
        question: "開会式のキーワードを打ってね",
        input: "",
        correct: "開会式",
      },
      {
        question: "尼子の部屋1のキーワードを打ってね",
        input: "",
        correct: "尼子1",
      },
      {
        question: "ライブペイントのキーワードを打ってね",
        input: "",
        correct: "ライブペイント",
      },
      {
        question: "イントロのキーワードを打ってね",
        input: "",
        correct: "イントロ",
      },
      {
        question: "音楽祭のキーワードを打ってね",
        input: "",
        correct: "音楽祭",
      },
      {
        question: "Booo!踊ってみたのキーワードを打ってね",
        input: "",
        correct: "Booo!",
      },
      {
        question: "メインステージCM1のキーワードを打ってね",
        input: "",
        correct: "メイン1",
      },
      {
        question: "ゲームブースCM1のキーワードを打ってね",
        input: "",
        correct: "ゲーム1",
      },
      {
        question: "ギネスのキーワードを打ってね",
        input: "",
        correct: "ギネス",
      },
      {
        question: "メインブースCM2のキーワードを打ってね",
        input: "",
        correct: "メイン2",
      },
      {
        question: "マリカーのキーワードを打ってね",
        input: "",
        correct: "マリカー",
      },
      {
        question: "ダンスステージのキーワードを打ってね",
        input: "",
        correct: "ダンスステージ",
      },
      {
        question: "尼子の部屋2のキーワードを打ってね",
        input: "",
        correct: "尼子1",
      },
      {
        question: "英語禁止のキーワードを打ってね",
        input: "",
        correct: "英語禁止",
      },
      {
        question: "カラオケのキーワードを打ってね",
        input: "",
        correct: "カラオケ",
      },
      {
        question: "ゲームブースCM2のキーワードを打ってね",
        input: "",
        correct: "ゲーム2",
      },
      {
        question: "Adorer fashion in Kobeのキーワードを打ってね",
        input: "",
        correct: "Kobe",
      },
      {
        question: "スマブラのキーワードを打ってね",
        input: "",
        correct: "スマブラ",
      },
      {
        question: "閉会式のキーワードを打ってね",
        input: "",
        correct: "閉会式",
      },

    ],
    bonusContents: [
      {
        explain: "",
        image: "yoshinagababy.jpg",
      },
      {
        explain: "飯田さんの赤ちゃんの時の写真です！！",
        image: "iidababy.JPG",
      },
      {
        explain: "",
        image: "fuzimotobaby.jpg",
      },
      {
        explain: "",
        image: "kobayashibaby.jpg",
      },
      {
        explain: "",
        image: "momokobaby.JPG",
      },
      {
        explain: "",
        image: "unenobaby.jpg",
      },
      {
        explain: "",
        image: "yoshinobaby.JPG",
      },
      {
        explain: "",
        image: "yamadababy.JPG",
      },
      {
        explain: "",
        image: "miyoshibaby.JPG",
      },
      {
        explain: "",
        image: "yoshinagababy2.JPG",
      },
      {
        explain: "",
        image:  "ayaibaby.jpg",
      },
      {
        explain: "",
        image: "muraobaby.jpg",
      },
      {
        explain: "",
        image: "kakehibaby.jpg",
      },
      {
        explain: "",
        image: "momokoobaby.JPG",
      },
      {
        explain: "",
        image: "kawasakibaby.jpg",
      },
      {
        explain: "",
        image: "hondababy.jpg",
      },
      {
        explain: "",
        image: "minatomotobaby.jpg",
      },
      {
        explain: "",
        image:  "ashidababy.jpg",
      },
      {
        explain: "",
        image:  "yamadababy2.JPG",
      },
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
        alert("違うよ！");
      }
    }
  }
})
