const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = lowercaseLetters.toUpperCase();
const numbers = "0123456789";
const specialCharacters = "!?.@#$%&*()_+-=";

function getKleineLetters(){
  return lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)]
}
function getHoofletters(){
  return uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)]
}
function getSpecialeKarakters(){
  return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
}
function getNummers(){
  return numbers[Math.floor(Math.random() * numbers.length)]
}
export const generatePassword = ({
  lengte,
  nummers,
  specKarakters,
  hoofdletters,
}) => {
  const kleineLetters = getKleineLetters();

  var possibleKarakters = [kleineLetters];
  var password = []
  for (let i = 0; i < lengte; i++) {
    if (hoofdletters) possibleKarakters.push(getHoofletters());;
    if (specKarakters) possibleKarakters.push(getSpecialeKarakters());;
    if (nummers) possibleKarakters.push(getNummers());
    const randomKarLijst= possibleKarakters[Math.floor(Math.random() * possibleKarakters.length)];
    password.push(randomKarLijst);
  }
  return password.join("")
}