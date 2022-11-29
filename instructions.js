
showText = (target, message, index, interval) => {
  if (index < message.length) {
    target.append(message[index++]);
    setTimeout(function () { showText(target, message, index); }, 0);
  }
}



const msg1 = 'Lorem ipsum dolor sit amet consectetur adipisicing ullm elit. ';

const msg2 = 'Vel libero ullam ipsa voluptatem vitae.'


/* Doloribus labore facere commodi quisquam quia laudantium autem magnam, ea ipsa nobis doloremque alias, corrupti recusandae. */

setTimeout((function () {
  showText(document.querySelector('#instructions'), msg1, 0, 50);
}), 1000)

setTimeout((function () {
  showText(document.querySelector('#instructions'), msg2, 0, 50);
}), 2300)

/*
<span id="cursor">|</span>
    <script>
        var cursor = true;
        var speed = 250;        setInterval(() => {
          if(cursor) {
            document.getElementById('cursor').style.opacity = 0;
            cursor = false;
          }else {
            document.getElementById('cursor').style.opacity = 1;
            cursor = true;
          }
        }, speed);
    </script> */
