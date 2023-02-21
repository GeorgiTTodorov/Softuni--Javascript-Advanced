function wordsUppercase(str) {
  let regEx = /[A-z0-9]+/g;
  let words = str.match(regEx);

  console.log(words.join(", ").toUpperCase());
}

wordsUppercase("Hi, how are you?");
wordsUppercase("hello");
