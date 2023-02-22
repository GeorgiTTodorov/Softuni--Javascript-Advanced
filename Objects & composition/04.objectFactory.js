const library = {
    print: function () {
      console.log(`${this.name} is printing a page`);
    },
    scan: function () {
      console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
      console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
  };
  const orders = [
    {
      template: { name: 'ACME Printer'},
      parts: ['print']      
    },
    {
      template: { name: 'Initech Scanner'},
      parts: ['scan']      
    },
    {
      template: { name: 'ComTron Copier'},
      parts: ['scan', 'print']      
    },
    {
      template: { name: 'BoomBox Stereo'},
      parts: ['play']      
    }
  ];
  //const products = objectFactory(library, orders);
  //console.log(products);



function objectFactory(library, orders) {
  
      let newArr = [];

      for (const order of orders) {
          const currentEl = Object.assign({},order.template);
          for (const part of order.parts) {
              currentEl[part] = library[part];
          }
          newArr.push(currentEl)   
      }
      return newArr;
      
}




// [
//   {
//     name: 'ACME Printer',
//     print: [Function: print]
//   },
//   {
//     name: 'Initech Scanner',
//     scan: [Function: scan]
//   },
//   {
//     name: 'ComTron Copier',
//     scan: [Function: scan],
//     print: [Function: print]
//   },
//   {
//     name: 'BoomBox Stereo',
//     play: [Function: play]
//   }
// ]

