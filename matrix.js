const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = '∟⊏⊐⊓⊔⊢⊣⊤⊥⊦∪∩ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍｦｲｸｺｿﾁﾄﾉﾌﾔﾖﾙﾚﾛﾝ';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';

const alphabet = katakana + latin + nums;

(function matrix() {

  const fontSize = 18;
  const columns = canvas.width / fontSize;

  const rainDrops = [];


  for (let x = 0; x < columns; x++) {
    rainDrops[x] = canvas.height; //Math.random() * -canvas.height / 2;
  }

  const draw = () => {
    context.fillStyle = 'rgba(4, 35, 72, 0.5)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = '#67dee7';
    context.font = fontSize + 'px monospace';

    for (let i = 0; i < rainDrops.length; i++) {
      const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
      context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

      if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        rainDrops[i] = 0;
      }
      rainDrops[i]++;
    }
  };

  setInterval(draw, 250);


})();

(function matrix2() {


  const fontSize = 12;
  const columns = canvas.width / fontSize;

  const rainDrops = [];


  for (let x = 0; x < columns; x++) {
    rainDrops[x] = canvas.height; //Math.random() * -canvas.height / 2;
  }

  const draw = () => {
    context.fillStyle = 'rgba(4, 35, 72, 0.05)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = '#67dee7';
    context.font = fontSize + 'px monospace';

    for (let i = 0; i < rainDrops.length; i++) {
      const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
      context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

      if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        rainDrops[i] = 0;
      }
      rainDrops[i]++;
    }
  };

  setInterval(draw, 200);


})();
