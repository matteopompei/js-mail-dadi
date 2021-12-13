const mailList = ["pompei@email.com", "ciao@email.com", "osnago@email.com"];
let email = prompt("Inserisci la tua email");
let emailCheck = false

for (i=0; i < mailList.length; i++) {
  if (mailList[i]==email) {
    emailCheck = true;
  }
}

if (emailCheck) {
  alert("Benvenuto!");
}else {
  alert("Accesso negato!");
  location.reload();
}