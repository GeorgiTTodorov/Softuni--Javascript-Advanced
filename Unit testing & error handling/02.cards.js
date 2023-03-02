function cards (face, suit) {

    let validCardFaces = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    let validCardSuits = {
        'S': '\u2660 ',
        'H': '\u2665 ',
        'D': '\u2666 ',
        'C': '\u2663 '
    };

    if (!validCardFaces.includes(face)) {
        throw new TypeError('Invalid face')
    } else if (!validCardSuits.hasOwnProperty(suit)) {
        throw new TypeError('Invalid suit')
    }

    let cards = {
        face,
        suit,
        toString() {
            return this.face + validCardSuits[this.suit]
        }
    }
    return cards;
}

console.log(cards('A', 'S').toString())