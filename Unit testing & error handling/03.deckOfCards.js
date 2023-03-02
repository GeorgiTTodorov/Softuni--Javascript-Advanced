function deckOfCards(array) {
  let result = [];
  let validCardFaces = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  let validCardSuits = {
    S: "\u2660 ",
    H: "\u2665 ",
    D: "\u2666 ",
    C: "\u2663 ",
  };
  let isCard = true;
  array.forEach((el) => {
    let face = el[0];
    let suit = el[1];
    if (el.length > 2) (face = el.slice(0, 2)), (suit = el[2]);
    let card = face + suit;
    if (validCardFaces.includes(face) && validCardSuits.hasOwnProperty(suit)) {
      result.push(face + validCardSuits[suit]);
    } else {
      console.log(`Invalid card: ${card}`);
      isCard = false;
    }
  });
  if (isCard) {
    console.log(result.join(""));
  }
}

deckOfCards(["AS", "10D", "KH", "2C"]);
deckOfCards(["5S", "3D", "QD", "1C"]);
