let dadoUser = Math.floor(Math.random() * 6) + 1;
let dadoPC = Math.floor(Math.random() * 6) + 1;

alert("Il tuo dado: " + dadoUser);
alert("Il dado del PC: " + dadoPC);

if (dadoUser > dadoPC) {
  alert("Hai vinto!");
}
else if (dadoUser < dadoPC) {
  alert("Hai perso!");
}
else {
  alert("Hai pareggiato!");
}