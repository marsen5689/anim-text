// function add_text(id, text) {
//     let elem = document.getElementById(id);
//     let pos = 0; // начальное значение, соотвествует первой букве
  
//     function add_letter() { // функция для отрисовки букв  
//    // в elem.innerHTML печатать подстроку text  длиной от 0 до pos символов 
//       if (elem = ) { // слово напечатано полностью
//          break;// завершить анимацию 
//       }
//     }
//     setInterval(add_letter, 1000)// вызывать функцию add_letter() каждые 1000 мс 
//  }

let text = ["aplle", "pear", "banana"];
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
let rand = getRandomInt(3);

function add_text(id, text) {
  var elem = document.getElementById(id);
  var pos = 0;
  function add_letter() {
    pos++;
    elem.innerHTML = text.slice(0, pos);

    if (pos > text.length) {
      clearInterval(timer);
    }
  }
  let timer = setInterval(add_letter, 1000);
}

function deleted_text(id, text) {
  var elem = document.getElementById(id);
  var pos = 0;
  function deleted_letter() {
    pos--;
    elem.innerHTML = text.slice(0, pos);

    if (pos == 0) {
      clearInterval(dtimer);
    }
  }
  let dtimer = setInterval(deleted_letter, 1000);
}