const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
  loader();
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalReloj("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("../build/assets/listen.mp3", "#activar-alarma", "#desactivar-alarma");
  img();
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveball(e, ".ball", ".stage");
});

function hamburgerMenu(panelBtn, panel, nav) {
  d.querySelector(panelBtn).addEventListener("click", (e) => {
    d.querySelector(panel).classList.toggle("is-active");
    d.querySelector(panelBtn).classList.toggle("is-active");
    d.querySelectorAll(nav).forEach((e) => {
      e.addEventListener("click", () => {
        d.querySelector(panel).classList.remove("is-active");
        d.querySelector(panelBtn).classList.remove("is-active");
      });
    });
  });
}

function digitalReloj(clock, btnPlay, btnStop) {
  let clockTempo;
  d.querySelector(btnPlay).addEventListener("click", (e) => {
    clockTempo = setInterval(() => {
      let clockHour = new Date().toLocaleTimeString();
      d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
    }, 1000);

    e.target.disabled = true;
  });
  d.querySelector(btnStop).addEventListener("click", (e) => {
    clearInterval(clockTempo);
    d.querySelector(clock).innerHTML = null;
    d.querySelector(btnPlay).disabled = false;
  });
}

function alarm(sound, btnPlay, btnStop) {
  let alarmTempo;

  const $alarm = d.createElement("audio");
  $alarm.src = sound;

  d.querySelector(btnPlay).addEventListener("click", (e) => {
    alarmTempo = setTimeout(() => {
      $alarm.play();
      $alarm.loop = true;
    }, 1000);

    e.target.disabled = true;
  });
  d.querySelector(btnStop).addEventListener("click", (e) => {
    clearTimeout(alarmTempo);
    $alarm.pause();
    $alarm.currentTime = 0;
    d.querySelector(btnPlay).disabled = false;
  });
}

function shortcuts(e) {
  console.log(e.keyCode);
  if (e.key === "a" && e.altKey) {
    alert("Haz lanzado una alerta con el teclado");
  }
  if (e.key === "c" && e.altKey) {
    confirm("Haz lanzado una confirmacion con el teclado");
  }
  if (e.key === "p" && e.altKey) {
    prompt("Haz lanzado una aviso con el teclado");
  }
}

let x = 0,
  y = 0;

function moveball(e, ball, stage) {
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limitBall = $ball.getBoundingClientRect(),
    limitStage = $stage.getBoundingClientRect();
  console.log(limitBall, limitStage);
  console.log(e.key);
  switch (e.keyCode) {
    case 37: //move("left")
      e.preventDefault();
      if (limitBall.left > limitStage.left) x--;
      break;
    case 38: //move("up")
      if (limitBall.top > limitStage.top) {
        e.preventDefault();
        y--;
      }
      break;
    case 39: //move("right")
      e.preventDefault();
      if (limitBall.right < limitStage.right) x++;
      break;
    case 40: //move("down")
      if (limitBall.bottom < limitStage.bottom) {
        e.preventDefault();
        y++;
      }
      break;
    default:
      break;
  }
  $ball.style.transform = `translate(${Math.round(x * 10)}px, ${y * 10}px)`;
}

function loader (){
  const preloader=document.querySelector('.preloader')
    preloader.style.opacity= 0;
    preloader.style.visibility = 'hidden'
}

function img(){
  let list = ["build/img/html.png","build/img/css.png","build/img/js.png","build/img/react.png",
  "build/img/gulp.png","build/img/java.png","build/img/git.png","build/img/github.png","build/img/python.png",];
  list.forEach(e=>{
    switch (e){
      case "build/img/css.png": 
      contentdiv(e,"CSS")
        break;
      case "build/img/git.png":
        contentdiv(e,"GIT")
        break;
      case "build/img/github.png":
        contentdiv(e,"GITHUB")
        break;
      case "build/img/gulp.png":
        contentdiv(e,"GULP")
        break;
      case "build/img/html.png":
        contentdiv(e,"HTML")
        break;
      case "build/img/java.png":
        contentdiv(e,"JAVA")
        break;
      case "build/img/js.png":
        contentdiv(e,"JAVASCRIPT")
        break;
      case "build/img/python.png":
        contentdiv(e,"PYTHON")
        break;
      case "build/img/react.png":
        contentdiv(e,"REACT")
        break;
    }
  })
}

function contentdiv(e, texto){
  let img;
  let div;
  let text;
  let tt = d.querySelector(".imgs");
  div = d.createElement("div")
  div.classList.add("imgs-div")
  img = d.createElement("img");
  img.src= `${e}`
  text = d.createElement("p")
  text.classList.add("texto")
  text.innerHTML = `${texto}`
  img.alt = `img-${texto}`
  div.appendChild(img);
  div.appendChild(text);
  tt.appendChild(div);
}