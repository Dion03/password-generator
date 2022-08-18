const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = lowercaseLetters.toUpperCase();
const numbers = "0123456789";
const specialCharacters = "!?.@#$%&*()_+-=";



export const generatePassword = ({
  lengte,
  nummers,
  specKarakters,
  hoofdletters,
}) => {
  const kleineLetters = lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
  var result = [kleineLetters];
  var password = []
  for (let i = 0; i < lengte; i++) {
    if (hoofdletters) result.push(uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)]);;
    if (specKarakters) result.push(specialCharacters[Math.floor(Math.random() * specialCharacters.length)]);;
    if (nummers) result.push(numbers[Math.floor(Math.random() * numbers.length)]);
    console.log(result)

    const randomIndex = result[Math.floor(Math.random() * result.length)];
    password.push(randomIndex);
  }
  console.log(password.join(""))

  return password.join("")
}