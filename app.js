const MATCH_TARGET = 10;

const questions = [
  { id: 101, level: 0, type: 'binary', text: 'まずは食べ物から！どっち派？', choiceA: '甘党', choiceB: '辛党' },
  { id: 102, level: 0, type: 'binary', text: 'カフェで頼むなら？', choiceA: 'コーヒー', choiceB: '紅茶' },
  { id: 103, level: 0, type: 'binary', text: '映画とドラマ、よく観るのは？', choiceA: '映画派', choiceB: 'ドラマ派' },
  { id: 104, level: 0, type: 'binary', text: '旅行に行くならどっち？', choiceA: '癒しの海', choiceB: '絶景の山' },
  { id: 105, level: 0, type: 'binary', text: '生活リズムは？', choiceA: '朝型', choiceB: '夜型' },
  { id: 106, level: 0, type: 'binary', text: '休日の過ごし方は？', choiceA: 'インドア', choiceB: 'アウトドア' },
  { id: 107, level: 0, type: 'topic', text: '【音楽】好きなアーティストや、行ったことのあるライブは？' },
  { id: 108, level: 0, type: 'topic', text: '【子供時代】小さい頃、どんな遊びにハマってた？' },
  { id: 109, level: 0, type: 'topic', text: '【学生時代】部活やバイト、何をしてましたか？' },
  { id: 110, level: 0, type: 'topic', text: '【苦手】実は苦手なものや、避けたいことってある？' },
  { id: 1, level: 1, text: '世界中の誰でもディナーに誘えるとしたら、誰に声をかけますか？' },
  { id: 2, level: 1, text: '有名人になりたいですか？なりたいとしたら、どんな方法で？' },
  { id: 3, level: 1, text: '電話をかける前に、いまから話すことをリハーサルしますか？するとすれば、その理由は？' },
  { id: 4, level: 1, text: 'あなたにとって「完璧な１日」とは？' },
  { id: 5, level: 1, text: '最後に１人で歌をうたったのはいつですか？最後に誰かに歌をうたったのはいつですか？' },
  { id: 6, level: 1, text: '90才まで生きられるとしたら、「死ぬまで30才の精神」と「死ぬまで30才の肉体」のどちらを選びますか？' },
  { id: 7, level: 2, text: '自分がどんな死に方をするか、ひそかに考えていることはありますか？' },
  { id: 8, level: 2, text: 'あなたは、私とどんな共通点があると思いますか？３つあげてください。' },
  { id: 9, level: 2, text: '人生で何にもっとも感謝していますか？' },
  { id: 10, level: 2, text: '育ってきた環境を変えられるなら、何を変えたいですか？' },
  { id: 11, level: 2, text: '４分間を使って、できるだけ細かくあなたの人生を私に教えてください。' },
  { id: 12, level: 2, text: '明日の朝、目が覚めると好きな能力やスキルが１つだけ備わっているとしたら、何がいいですか？' },
  { id: 13, level: 3, text: 'どんな真実でも教えてくれる水晶玉があったら、何を知りたいですか？' },
  { id: 14, level: 3, text: '長い間やってみたいと思っていることはありますか？もしあるなら、まだやっていないのはなぜですか？' },
  { id: 15, level: 3, text: 'あなたの人生で、もっとも大きな成果はなんですか？' },
  { id: 16, level: 3, text: '友人関係でもっとも重要視しているものはなんですか？' },
  { id: 17, level: 3, text: 'もっとも大切な記憶はなんですか？' },
  { id: 18, level: 3, text: 'もっとも嫌な記憶はなんですか？' },
  { id: 19, level: 4, text: '寿命があと1年しかないとしたら、自分の生き方のどこを変えたいですか？その理由は？' },
  { id: 20, level: 4, text: 'あなたにとって友情とは？' },
  { id: 21, level: 4, text: 'あなたの人生にとって愛や愛情とは？' },
  { id: 22, level: 4, text: 'あなたが思う、わたしの性格の良いところを５つあげてください。' },
  { id: 23, level: 4, text: '家族とはどれぐらい親密ですか？自分の子ども時代は、他の人より幸せだったと思いますか？' },
  { id: 24, level: 4, text: '母親との関係はどうですか？' },
  { id: 25, level: 5, text: '「私たちは」から始まる、事実を描写した文章を３つ作ってください。（例：「私たちは同じ部屋で会話をしている」）' },
  { id: 26, level: 5, text: '次の文章を埋めてください。「◯◯について話し合える人がいればいいなぁ」' },
  { id: 27, level: 5, text: 'もしあなたが私とより親しい友人になるとしたら、私について知っておくべき重要なことは何ですか？' },
  { id: 28, level: 5, text: '私の好ましいところを教えてください。初対面の人には言わないようなことを、正直に口にしてみてください。' },
  { id: 29, level: 5, text: '人生でもっとも恥ずかしかったことについて語り合いましょう。' },
  { id: 30, level: 5, text: '最後に人前で泣いたのはいつですか？または１人で泣いたのはいつですか？' },
  { id: 31, level: 6, text: 'ここまでの会話で、私を好ましいと思ったポイントを教えてください。' },
  { id: 32, level: 6, text: 'あなたにとって、シャレではすまないこと（冗談にしてはいけないこと）はなんですか？' },
  { id: 33, level: 6, text: '今晩、誰にも知られずに死んでいくとしたら、誰に何を伝えたかったでしょうか？' },
  { id: 34, level: 6, text: '全財産が火事で燃えてしまったとします。家族とペットは助け出しましたが、あと何か１つだけ救えるとしたら何を選びますか？その理由は？' },
  { id: 35, level: 6, text: '家族のなかで一番死んでほしくない人は？その理由は？' },
  { id: 36, level: 6, text: '個人的な問題を相手にうちあけ、アドバイスをもらってみましょう。' },
];

const titleScreen = document.getElementById('title-screen');
const phase0Screen = document.getElementById('phase0-screen');
const modeScreen = document.getElementById('mode-screen');
const deepScreen = document.getElementById('deepdive-screen');
const matchCountEl = document.getElementById('match-count');
const cardTextEl = document.getElementById('card-text');
const binaryChoicesEl = document.getElementById('binary-choices');
const choiceAEl = document.getElementById('choice-a');
const choiceBEl = document.getElementById('choice-b');
const deepTextEl = document.getElementById('deep-text');
const levelLabelEl = document.getElementById('level-label');
const modeLabelEl = document.getElementById('mode-label');
const modalEl = document.getElementById('modal');
const confettiCanvas = document.getElementById('confetti-canvas');
const ctx = confettiCanvas.getContext('2d');

let phase0Order = [];
let phase0Index = 0;
let deepIndex = 0;
let matchCount = 0;
let currentMode = '-';
let confettiPieces = [];
let audioContext;

const phase0Questions = questions.filter((q) => q.level === 0);
const deepQuestions = questions.filter((q) => q.level > 0);

const screens = [titleScreen, phase0Screen, modeScreen, deepScreen];

const shuffle = (array) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const showScreen = (target) => {
  screens.forEach((screen) => screen.classList.remove('active'));
  target.classList.add('active');
};

const resetPhase0 = () => {
  phase0Order = shuffle(phase0Questions);
  phase0Index = 0;
  matchCount = 0;
  matchCountEl.textContent = matchCount;
  updatePhase0Card();
};

const updatePhase0Card = () => {
  if (phase0Index >= phase0Order.length) {
    phase0Order = shuffle(phase0Questions);
    phase0Index = 0;
  }

  const q = phase0Order[phase0Index];
  cardTextEl.textContent = q.text;

  if (q.type === 'binary') {
    binaryChoicesEl.style.display = 'flex';
    choiceAEl.textContent = q.choiceA || 'A';
    choiceBEl.textContent = q.choiceB || 'B';
  } else {
    binaryChoicesEl.style.display = 'none';
  }
};

const updateDeepDiveCard = () => {
  if (deepIndex >= deepQuestions.length) {
    deepIndex = 0;
  }

  const q = deepQuestions[deepIndex];
  deepTextEl.textContent = q.text;
  levelLabelEl.textContent = q.level;
};

const showModal = () => {
  modalEl.classList.remove('hidden');
};

const hideModal = () => {
  modalEl.classList.add('hidden');
};

const resizeCanvas = () => {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
};

const triggerConfetti = () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    return;
  }

  const colors = ['#3aa7ff', '#ff9a5a', '#6ed9b7', '#ffd66b'];
  const count = 120;
  for (let i = 0; i < count; i += 1) {
    confettiPieces.push({
      x: Math.random() * confettiCanvas.width,
      y: -20 - Math.random() * 200,
      size: 6 + Math.random() * 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      velocityY: 2 + Math.random() * 4,
      velocityX: -2 + Math.random() * 4,
      rotation: Math.random() * Math.PI,
      rotationSpeed: -0.1 + Math.random() * 0.2,
      life: 120 + Math.random() * 40,
    });
  }
};

const renderConfetti = () => {
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  confettiPieces = confettiPieces.filter((piece) => piece.life > 0);

  confettiPieces.forEach((piece) => {
    ctx.save();
    ctx.translate(piece.x, piece.y);
    ctx.rotate(piece.rotation);
    ctx.fillStyle = piece.color;
    ctx.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size);
    ctx.restore();

    piece.x += piece.velocityX;
    piece.y += piece.velocityY;
    piece.rotation += piece.rotationSpeed;
    piece.life -= 1;
  });

  requestAnimationFrame(renderConfetti);
};

const playChime = () => {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) {
    return;
  }

  if (!audioContext) {
    audioContext = new AudioContext();
  }

  const now = audioContext.currentTime;
  const notes = [880, 1320, 1760];
  notes.forEach((freq, index) => {
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    osc.type = 'sine';
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.0001, now + index * 0.08);
    gain.gain.exponentialRampToValueAtTime(0.2, now + index * 0.08 + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + index * 0.08 + 0.2);
    osc.connect(gain);
    gain.connect(audioContext.destination);
    osc.start(now + index * 0.08);
    osc.stop(now + index * 0.08 + 0.25);
  });
};

const handleMatch = () => {
  if (matchCount >= MATCH_TARGET) {
    return;
  }
  matchCount += 1;
  matchCountEl.textContent = matchCount;
  triggerConfetti();
  playChime();

  if (matchCount === MATCH_TARGET) {
    showModal();
  }
};

document.getElementById('start-btn').addEventListener('click', () => {
  showScreen(phase0Screen);
  resetPhase0();
});

document.getElementById('skip-btn').addEventListener('click', () => {
  showScreen(modeScreen);
});

document.getElementById('match-btn').addEventListener('click', handleMatch);

document.getElementById('question-card').addEventListener('click', () => {
  phase0Index += 1;
  updatePhase0Card();
});

document.getElementById('end-game-btn').addEventListener('click', () => {
  showScreen(modeScreen);
});

document.getElementById('to-modes').addEventListener('click', () => {
  hideModal();
  showScreen(modeScreen);
});

modalEl.addEventListener('click', (event) => {
  if (event.target === modalEl) {
    hideModal();
  }
});

document.querySelectorAll('.mode').forEach((btn) => {
  btn.addEventListener('click', () => {
    currentMode = btn.dataset.mode || '-';
    modeLabelEl.textContent = currentMode;
    deepIndex = 0;
    updateDeepDiveCard();
    showScreen(deepScreen);
  });
});

document.getElementById('deep-card').addEventListener('click', () => {
  deepIndex += 1;
  updateDeepDiveCard();
});

document.getElementById('back-to-modes').addEventListener('click', () => {
  showScreen(modeScreen);
});

window.addEventListener('resize', resizeCanvas);

resizeCanvas();
updatePhase0Card();
updateDeepDiveCard();
renderConfetti();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js');
  });
}
