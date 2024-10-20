const time = document.getElementById("clock");

setInterval(() => {
  let date = new Date().toLocaleTimeString();
  time.innerHTML = date;
},1000)