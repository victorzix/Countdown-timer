const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

let dias = 23;
let horas = 59;
let minutos = 59;
let segundos = 59;
let finished = false;

let timeout = setInterval(timer, 1000);

function timer() {
  days.textContent = dias;
  hours.textContent = horas;
  minutes.textContent = minutos;
  seconds.textContent = segundos;

  if (segundos > 0) {
    segundos--;
  } else {
    if (minutos > 0) {
      segundos = 60;
      minutos--;
    } else {
      if (horas > 0) {
        horas--;
        minutos = 60;
      } else {
        if (dias > 0) {
          dias--;
          horas = 24;
        } else {
          alert('Cuzinho do Pedro');
          finished = true;
          clearInterval(timeout);
        }
      }
    }
  }
}
