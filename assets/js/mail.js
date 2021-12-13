const mailList = ["pompei@email.com", "ciao@email.com", "osnago@email.com"];
let emailCheck = false;
let validazione = document.getElementById("mail-check");

function controlla() {
  let email = document.getElementById("email").value;

  for (i=0; i < mailList.length; i++) {
    if (mailList[i]==email) {
      emailCheck = true;
    }
  }

  if (emailCheck) {
    validazione.innerHTML = "Mail verificata, benvenuto!";
    validazione.classList.add("valida");
  }
  else {
    validazione.innerHTML = "Accesso negato!";
    validazione.classList.add("non-valida");
  }
}