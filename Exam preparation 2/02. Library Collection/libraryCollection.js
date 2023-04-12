class LibraryCollection {
  constructor(capacity) {
    this.capacity = Number(capacity);
    this.books = [];
  }

  addBook(bookName, bookAuthor) {
    if (this.capacity === this.books.length) {
      throw new Error("Not enough space in the collection.");
    } else {
      this.books.push({ bookName, bookAuthor, payed: false });
      return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }
  }

  payBook(bookName) {
    // let temp = [];
    // this.books.forEach(x => {
    //     temp.push(x.bookName)
    // })
    for (const el of this.books) {
      if (el.bookName === bookName && el.payed === true) {
        throw new Error(`${bookName} has already been paid.`);
      } else if (el.bookName === bookName && el.payed === false) {
        el.payed = true;
        return `${bookName} has been successfully paid.`;
      }
    }
    throw new Error(`${bookName} is not in the collection.`);
  }

  removeBook(bookName) {
    for (const el of this.books) {
      if (el.bookName === bookName && el.payed === true) {
        let index = this.books.indexOf(el);
        this.books.splice(index, 1);
        return `${bookName} remove from the collection.`;
      } else if (el.bookName === bookName && el.payed === false) {
        throw new Error(
          `${bookName} need to be paid before removing from the collection.`
        );
      }
    }
    throw new Error(`The book, you're looking for, is not found.`);
  }

  getStatistics(bookAuthor) {
    if (bookAuthor === undefined) {
      let result = `The book collection has ${
        this.capacity - this.books.length
      } empty spots left.`;
      let sorted = this.books.sort((a, b) => {
        return a.bookName - b.bookName;
      });
      for (const el of sorted) {
        result += `\n${el.bookName} == ${el.bookAuthor} - ${
          el.payed === true ? "Has Paid" : "Not Paid"
        }.`;
      }
      return result;
    } else if (bookAuthor) {
      for (const el of this.books) {
        if (el.bookAuthor === bookAuthor) {
          return `${el.bookName} == ${el.bookAuthor} - ${
            el.payed === true ? "Has Paid" : "Not Paid"
          }.`;
        }
      }
      throw new Error(`${bookAuthor} is not in the collection.`);
    }
  }
}

// const library = new LibraryCollection(2)
// console.log(library.addBook('In Search of Lost Time', 'Marcel Proust'));
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.addBook('Ulysses', 'James Joyce'));

// library.addBook('In Search of Lost Time', 'Marcel Proust');
// console.log(library.payBook('In Search of Lost Time'));
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.payBook('Don Quixote'));

// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote');
// console.log(library.removeBook('Don Quixote'));
// console.log(library.removeBook('In Search of Lost Time'));

const library = new LibraryCollection(5);
library.addBook("Don Quixote", "Miguel de Cervantes");
library.payBook("Don Quixote");
library.addBook("In Search of Lost Time", "Marcel Proust");
library.addBook("Ulysses", "James Joyce");
console.log(library.getStatistics());
