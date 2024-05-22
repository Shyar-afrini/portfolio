const allowedCharacters = ["X", "$", "Y", "#", "?", "*", "0", "1", "+"];

export const getRandomCharacter = () => {
  const randomIndex = Math.floor(Math.random() * allowedCharacters.length);
  return allowedCharacters[randomIndex];
};
