let quiz = [
  {
    question: '「ハプニング引越しセンター」に引越しを頼むとどうなる？',
    answer: [
      'ぶつけられすぎて冷蔵庫がほぼ球体(ピース：又吉)',
      'ダンボールの荷物と一緒に道中の捨て猫も運んでしまう(霜降り明星：粗品)',
      '引越しが終わってからもしばらく住んでる(麒麟：川島)'
    ],
    correct: 2
  },
  {
    question: 'そこそこのウソをついてください',
    answer: [
      'ファンの皆さんのおかげです！(チュートリアル：徳井)',
      '知人が…イボコロリで乳首がとれた。(ネプチューン：ホリケン)',
      'あ〜、因数を分解したい(千原ジュニア)'
    ],
    correct: 0
  },
  {
    question: 'ものすご〜く偏った意見をお願いします！',
    answer: [
      '千円カットのご主人は声が小さい(ネプチューン：ほりけん)',
      '駄菓子屋の老婆は不老不死(麒麟：川島)',
      '足立ナンバーのハイエースはだいたい横すってる(ネプチューン：ほりけん)'
    ],
    correct: 2
  },
  {
    question: 'ティッシュ箱に書かれていた過保護すぎる使用上の注意書きとは？',
    answer: [
      '人命救助には向いていません(バカリズム)',
      'ティッシュを取り出すとき、人差し指と中指でゆっくりひいてください(ノブコブ：吉村)',
      'いつかはなくなりますが、心を痛めないで(ピース：又吉)'
    ],
    correct: 2
  },
  {
    question: '次のエピソードに尾ひれを付けて話してください「100円拾った」',
    answer: [
      '「100円拾った」となりにパンティが落ちてたのに。(おぎやはぎ：小木)',
      '「100円拾った」私を抱いた男が帰り際、そうつぶやいた(大久保佳代子)',
      '「100円拾った」すごい長い100円(有吉)'
    ],
    correct: 1
  },
  {
    question: '「呪いの入れ歯」はめるとどうなる？',
    answer: [
      '10分間がはっっっっきり分かる(千鳥：大吾)',
      '保険が効かない(バカリズム)',
      'はめたら怖いんだけどデカくてはめらんない(バカリズム)'
    ],
    correct: 1
  },
  {
    question: '韓国料理っぽく怒ってください',
    answer: [
      'ナムルぞ(四千等身：後藤)',
      'チャンジャえられへん(ミルクボーイ：駒場)',
      'クンナァ(四千等身：後藤)'
    ],
    correct: 0
  },
  {
    question: 'このゾンビ育ちが良さそうだな。なぜそう思った？',
    answer: [
      'いつもフィンガーボール持ち歩いてる(ネプチューン：ほりけん)',
      '車道には出ない(バカリズム)',
      '美術館からでてきた？！(おいでやす小田)'
    ],
    correct: 1
  },
  {
    question: 'ちょっとだけ不安にさせてください',
    answer: [
      '小木と矢作とあと１人いるけど何か問題でも？(おぎやはぎ：小木)',
      'オレ、君のことが好きすぎるんだ！(チュートリアル：徳井)',
      'お前のお母さん軽トラ借りてはったけど。。。(サバンナ：高橋)'
    ],
    correct: 2
  },
  {
    question: 'かわいくないことをかわいく言ってください',
    answer: [
      'ゴツゴツのエゾジカ(滝沢カレン)',
      'にんにく丸焼き(ドッキュンミラクルバズーカ！)(王林)',
      '超高齢化社会(めっちゃ長生き元気もりもりジャパン)(渋谷凪咲)'
    ],
    correct: 0
  },
  {
    question: '3013年の流行語大賞を教えてください',
    answer: [
      '火星婦のミタ(サバンナ：高橋)',
      '鳥取五輪(チュートリアル：徳井)',
      '食べる尿油(有吉)'
    ],
    correct: 0
  }
];

let quiz2 = [];



let s = 10;
let ms = 0;
// カウントダウンタイマーの起動
timer = () => {
  setTimer = setInterval(() => {
    ms -= 1;   // 10ms 毎に 100ms 増やす（表示が2桁だから）
    if (ms < 0) {
      s -= 1;
      ms = 100;
    }
    seconds = ('0' + s).slice(-2);
    milliSeconds = ('0' + ms).slice(-2);
    $('.timer').text(`${seconds},${milliSeconds}`)

    // もし0秒になったら次の問題へ
    if (s < 0) {
      result.push('NG');
      cross();
      $('.audio2')[0].currentTime = 0;
      $('.audio2')[0].play();
      quiz.splice(correctNumber, 1);
      NextQuiz();
      quizCount++;
      init();
    }
    // １０問目が終わったらresult画面へ
    if (quizCount === 5) {
      $('.quizMain').hide();
      $('.result').fadeIn();
      let correctCount = result.filter(x => x === 'OK');
      console.log(correctCount.length);
      $('.result span').text(`${correctCount.length}/5`)
      crearTimer();
      $('.timer').hide();
    }
  }, 10);
};

// カウントダウンタイマーリセット
const init = () => {
  s = 10;
  ms = 0;
}

// カウントダウンタイマーの停止
const crearTimer = () => {
  clearInterval(setTimer);
  s = 10;
  ms = 0;
}





let quizCount = 0;
let result = [];
let correctNumber = 0;

const NextQuiz = () => {
  const min = 0;
  let max = Number(quiz.length - 1);
  let random = Math.floor(Math.random() * (max - min + 1) - min);
  // 別のイベント処理のとき使いたいから上書きして持っておく(randomNumber)
  correctNumber = random;
  // console.log(random);
  $('.question h2').text(quiz[random].question);
  $('#answer1').text(quiz[random].answer[0]);
  $('#answer2').text(quiz[random].answer[1]);
  $('#answer3').text(quiz[random].answer[2]);
}

// 不正解で表示
const cross = () => {
  $('#cross').fadeIn();
  setTimeout(() => {
    $('#cross').fadeOut();
  }, 1000)
}

// 正解で表示
const circle = () => {
  $('#circle').fadeIn();
  setTimeout(() => {
    $('#circle').fadeOut();
  }, 1000)
}



// スタートボタン クイズスターーーート
$('#start').on('click', () => {
  $('.start').hide();
  $('.page').hide();
  $('.quizMain').fadeIn();
  NextQuiz();
  // console.log(quizCount);
  timer();
})

// 答えた時のジャッジと処理
$('.btn button').on('click', (e) => {
  if (Number(e.target.value) === quiz[correctNumber].correct) { //正解
    result.push('OK');
    circle();
    $('.audio1')[0].currentTime = 0;
    $('.audio1')[0].play();
  } else { //不正解
    result.push('NG');
    cross();
    $('.audio2')[0].currentTime = 0;
    $('.audio2')[0].play();
  }
  // 出した問題が次でないように配列からだして別の配列に入れておく
  // 最初の画面に移動したときにforEachでもどせるように
  // あとでquiz2の配列をquizに戻しておく
  quiz2.push(quiz[correctNumber]);
  console.log(quiz2);
  quiz.splice(correctNumber, 1);
  NextQuiz();
  quizCount++;
  init();
  // console.log(quizCount);
  if (quizCount === 5) {
    $('.quizMain').hide();
    $('.result').fadeIn();
    let correctCount = result.filter(x => x === 'OK');
    // console.log(correctCount.length);
    $('.result span').text(`${correctCount.length}/5`)
    crearTimer();
    $('.timer').hide();
  }
})

// 最初の状態に戻る
$('#init').on('click', () => {
  $('.result').hide();
  $('.start').fadeIn();
  $('.page').fadeIn();
  // 取り出していたオブジェクトを戻す
  quiz2.forEach((i) => {
    quiz.push(i);
  })
  quiz2 = [];
  // 戻ってた！
  // console.log(quiz);
  // 初期化する カウント数etc
  quizCount = 0;
  correctNumber = 0;
  result = [];
})

// クイズ一覧表示
$('.pageBtn').on('click', () => {
  $('.main').hide();
  $('.pageBtn').hide();
  $('.pageBack').fadeIn();
  $('.quizlist').fadeIn();
  showData();
})

// quiz配列の問題をクイズ一覧を開いたときに全て表示する
const showData = (i) => {
  crearTable();
  quiz.map((x, i) => {
    let html = `<h4>${i + 1}. 質問 : ${quiz[i].question}</h4>`;
    $('.display').append(`<div class="box answers${i}"></div>`)
    html += `1<p>${quiz[i].answer[0]}</p>`;
    html += `2<p>${quiz[i].answer[1]}</p>`;
    html += `3<p>${quiz[i].answer[2]}</p>`;
    html += `<p>正解 :  ${quiz[i].correct + 1}</p>`;
    $(`.display .answers${i}`).append(html);
  })
}

// 表示している全ての問題を削除する
// これしないと表示している問題の下にまた全部表示を追加する
const crearTable = () => {
  $('.box').remove();
}

// 登録ボタンを押したら配列に追加される
$('#submit').on('click', () => {
  let item1 = $('#quiz').val();
  let item2 = $('#answer01').val();
  let item3 = $('#answer02').val();
  let item4 = $('#answer03').val();
  let item5 = Number($('#correct').val()); // optionにも value属性あった！
  if (item1 === '' || item2 === '' || item3 === '' || item4 === '' || item5 === '') {
    alert('項目を入力してください');
    return
  }
  const data = {
    question: item1,
    answer: [item2, item3, item4],
    correct: item5
  }
  quiz.push(data);
  console.log(quiz);
  showData();
  // ろーかるすとれーーーーーーーーーじ追加
  localStorage.setItem('quiz', JSON.stringify(quiz));
})

// クイズ一覧から戻る
$('.pageBack').on('click', () => {
  $('.main').fadeIn();
  $('.pageBtn').fadeIn();
  $('.pageBack').hide()
  $('.quizlist').hide();
})

// ミュート機能
$('.mute').on('click', () => {
  if ($('.audio1')[0].muted && $('.audio2')[0].muted) {
    $('.audio1')[0].muted = false;
    $('.audio2')[0].muted = false;
    $('.fa-volume-high').fadeIn();
    $('.fa-volume-xmark').hide();
  } else {
    $('.audio1')[0].muted = true;
    $('.audio2')[0].muted = true;
    $('.fa-volume-high').hide();
    $('.fa-volume-xmark').fadeIn();
  }
})

// ロードしたときにローカルストレージにデータがあれば配列更新
if (localStorage.getItem('quiz')) {
  const local = JSON.parse(localStorage.getItem('quiz'));
  quiz.length = 0;
  local.forEach((i) => {
    quiz.push(i);
  })
  console.log(quiz);
}

// 削除機能
$('#removeBtn').on('click', () => {
  if ($('#remove').val() === '') {
    alert('問題番号を入力してください')
  }
  let number = Number($('#remove').val()) - 1;
  quiz.splice(number, 1)
  showData();
  localStorage.setItem('quiz', JSON.stringify(quiz));
})

// デフォルトボタン
$('#default').on('click', () => {
  localStorage.removeItem('quiz');
  quiz = [
    {
      question: '「ハプニング引越しセンター」に引越しを頼むとどうなる？',
      answer: [
        'ぶつけられすぎて冷蔵庫がほぼ球体(ピース：又吉)',
        'ダンボールの荷物と一緒に道中の捨て猫も運んでしまう(霜降り明星：粗品)',
        '引越しが終わってからもしばらく住んでる(麒麟：川島)'
      ],
      correct: 2
    },
    {
      question: 'そこそこのウソをついてください',
      answer: [
        'ファンの皆さんのおかげです！(チュートリアル：徳井)',
        '知人が…イボコロリで乳首がとれた。(ネプチューン：ホリケン)',
        'あ〜、因数を分解したい(千原ジュニア)'
      ],
      correct: 0
    },
    {
      question: 'ものすご〜く偏った意見をお願いします！',
      answer: [
        '千円カットのご主人は声が小さい(ネプチューン：ほりけん)',
        '駄菓子屋の老婆は不老不死(麒麟：川島)',
        '足立ナンバーのハイエースはだいたい横すってる(ネプチューン：ほりけん)'
      ],
      correct: 2
    },
    {
      question: 'ティッシュ箱に書かれていた過保護すぎる使用上の注意書きとは？',
      answer: [
        '人命救助には向いていません(バカリズム)',
        'ティッシュを取り出すとき、人差し指と中指でゆっくりひいてください(ノブコブ：吉村)',
        'いつかはなくなりますが、心を痛めないで(ピース：又吉)'
      ],
      correct: 2
    },
    {
      question: '次のエピソードに尾ひれを付けて話してください「100円拾った」',
      answer: [
        '「100円拾った」となりにパンティが落ちてたのに。(おぎやはぎ：小木)',
        '「100円拾った」私を抱いた男が帰り際、そうつぶやいた(大久保佳代子)',
        '「100円拾った」すごい長い100円(有吉)'
      ],
      correct: 1
    },
    {
      question: '「呪いの入れ歯」はめるとどうなる？',
      answer: [
        '10分間がはっっっっきり分かる(千鳥：大吾)',
        '保険が効かない(バカリズム)',
        'はめたら怖いんだけどデカくてはめらんない(バカリズム)'
      ],
      correct: 1
    },
    {
      question: '韓国料理っぽく怒ってください',
      answer: [
        'ナムルぞ(四千等身：後藤)',
        'チャンジャえられへん(ミルクボーイ：駒場)',
        'クンナァ(四千等身：後藤)'
      ],
      correct: 0
    },
    {
      question: 'このゾンビ育ちが良さそうだな。なぜそう思った？',
      answer: [
        'いつもフィンガーボール持ち歩いてる(ネプチューン：ほりけん)',
        '車道には出ない(バカリズム)',
        '美術館からでてきた？！(おいでやす小田)'
      ],
      correct: 1
    },
    {
      question: 'ちょっとだけ不安にさせてください',
      answer: [
        '小木と矢作とあと１人いるけど何か問題でも？(おぎやはぎ：小木)',
        'オレ、君のことが好きすぎるんだ！(チュートリアル：徳井)',
        'お前のお母さん軽トラ借りてはったけど。。。(サバンナ：高橋)'
      ],
      correct: 2
    },
    {
      question: 'かわいくないことをかわいく言ってください',
      answer: [
        'ゴツゴツのエゾジカ(滝沢カレン)',
        'にんにく丸焼き(ドッキュンミラクルバズーカ！)(王林)',
        '超高齢化社会(めっちゃ長生き元気もりもりジャパン)(渋谷凪咲)'
      ],
      correct: 0
    },
    {
      question: '3013年の流行語大賞を教えてください',
      answer: [
        '火星婦のミタ(サバンナ：高橋)',
        '鳥取五輪(チュートリアル：徳井)',
        '食べる尿油(有吉)'
      ],
      correct: 0
    }
  ];
  showData();
})