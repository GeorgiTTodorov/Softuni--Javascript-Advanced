class WineSelection {
  constructor(space) {
    this.space = space;
    this.wines = [];
    this.bill = 0;
  }

  reserveABottle(wineName, wineType, price) {
    if (this.space <= this.wines.length) {
      throw new Error("Not enough space in the cellar.");
    }
    this.wines.push({ wineName, wineType, price, paid: false });
    return `You reserved a bottle of ${wineName} ${wineType} wine.`;
  }

  payWineBottle(wineName, price) {
    for (const el of this.wines) {
      if (el.wineName === wineName && el.paid === false) {
        el.paid = true;
        this.bill += Number(el.price);
        return `You bought a ${wineName} for a ${price}$.`;
      } else if (el.wineName === wineName && el.paid === true) {
        throw new Error(`${wineName} has already been paid.`);
      }
    }
    throw new Error(`${wineName} is not in the cellar.`);
  }

  openBottle(wineName) {
    for (const el of this.wines) {
      if (el.wineName === wineName && el.paid === true) {
        let index = this.wines.indexOf(el);
        this.wines.splice(index, 1);
        return `You drank a bottle of ${wineName}.`;
      } else if (el.wineName === wineName && el.paid === false) {
        throw new Error(`${wineName} need to be paid before open the bottle.`);
      }
    }
    throw new Error(`The wine, you're looking for, is not found.`);
  }

  cellarRevision(wineType) {
    if (wineType === undefined) {
      let sorted = this.wines.sort((a, b) => {
        return a.wineName.localeCompare(b.wineName);
      });
      let result = `You have space for ${
        this.space - this.wines.length
      } bottles more.\n`;
      result += `You paid ${this.bill}$ for the wine.`;

      for (const el of sorted) {
        result += `\n${el.wineName} > ${el.wineType} - ${
          el.paid === true ? "Has Paid" : "Not Paid"
        }.`;
      }
      return result;
    } else {
      for (const wine of this.wines) {
        if (wineType === wine.wineType) {
          return `${wine.wineName} > ${wine.wineType} - ${
            wine.paid === true ? "Has Paid" : "Not Paid"
          }.`;
        }
      }
      throw new Error(`There is no ${wineType} in the cellar.`);
    }
  }
}

// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50));
// console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120));
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));

// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White',50);
// console.log(selection.payWineBottle('Sauvignon Blanc Marlborough', 120));
// console.log(selection.payWineBottle('Bodegas Godelia Mencía', 144));

// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
// selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
// selection.payWineBottle('Sauvignon Blanc Marlborough', 50);
// console.log(selection.openBottle('Sauvignon Blanc Marlborough'));
// console.log(selection.openBottle('Cabernet Sauvignon Napa Valley'));

// const selection = new WineSelection(5)
// selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
// selection.payWineBottle('Bodegas Godelia Mencía', 144);
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
// selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
// console.log(selection.cellarRevision());

const selection = new WineSelection(2);
console.log(selection.reserveABottle("Bodegas Godelia Mencía", "Rose", 144));
console.log(selection.cellarRevision("Rose"));
console.log(selection.cellarRevision("White"));
