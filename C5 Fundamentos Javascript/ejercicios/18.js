function esVocal(letra) {
  // La función recibe un argumento llamado letra el cual es un string.
  // Retorna como resultado un string que indica si el argumento letra es una vocal.
  // de lo contrario retorna el string "Dato incorrecto"
  // Por ejemplo: 
  // "a" ---> "Es vocal"
  // "u" ---> "Es vocal"
  // "n" ---> "Dato incorrecto"
  // "texto largo" ---> "Dato incorrecto"
  // Tu código:

  if (letra.length === 1) {
    if (letra === 'a') {
      return "Es vocal";
    } else if (letra === 'e') {
      return "Es vocal";
    } else if (letra === 'i') {
      return "Es vocal";
    } else if (letra === 'o') {
      return "Es vocal";
    } else if (letra === 'u') {
      return "Es vocal";
    } else if (letra === 'A') {
      return "Es vocal";
    } else if (letra === 'E') {
      return "Es vocal";
    } else if (letra === 'I') {
      return "Es vocal";
    } else if (letra === 'O') {
      return "Es vocal";
    } else if (letra === 'U') {
      return "Es vocal";
    } else {
      return "Dato incorrecto";
    }
  } else {
    return "Dato incorrecto";
  }
}

module.exports = esVocal;
