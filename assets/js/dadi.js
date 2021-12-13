let dadoUser = Math.floor(Math.random() * 6) + 1;
let dadoPC = Math.floor(Math.random() * 6) + 1;
let risultato = document.getElementById("risultato");

document.getElementById("dado-user").innerHTML = dadoUser;
document.getElementById("dado-pc").innerHTML = dadoPC;

if (dadoUser > dadoPC) {
  risultato.innerHTML = "Hai vinto!";
  risultato.classList.add("vinto");
}
else if (dadoUser < dadoPC) {
  document.getElementById("risultato").innerHTML = "Hai perso!";
  risultato.classList.add("perso");
}
else {
  document.getElementById("risultato").innerHTML = "Pareggio!";
  risultato.classList.add("pareggio");
}

function rilancia() {
  location.reload();
}