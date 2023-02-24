function filterEmployees(data, criteria) {
  const parsed = JSON.parse(data);
  const sortCriteria = criteria.split('-');
  let firstCrt = sortCriteria[0];
  let second = sortCriteria[1];
  let result = [];

  for (const el of parsed) {
      for (const [key, value] of Object.entries(el)) {
          if (firstCrt === key && second === value) {
              result.push(el)
          } else if (second === 'all') {
              result.push(el)
          }
        }
      } 

  for (const el of result) {
      console.log(`${result.indexOf(el)}. ${el['first_name']} ${el['last_name']} - ${el['email']}`);
  }
      
  }
  

filterEmployees(
  `[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
  "gender-Female"
);
filterEmployees(`[{
  "id": "1",
  "first_name": "Kaylee",
  "last_name": "Johnson",
  "email": "k0@cnn.com",
  "gender": "Female"
}, {
  "id": "2",
  "first_name": "Kizzee",
  "last_name": "Johnson",
  "email": "kjost1@forbes.com",
  "gender": "Female"
}, {
  "id": "3",
  "first_name": "Evanne",
  "last_name": "Maldin",
  "email": "emaldin2@hostgator.com",
  "gender": "Male"
}, {
  "id": "4",
  "first_name": "Evanne",
  "last_name": "Johnson",
  "email": "ev2@hostgator.com",
  "gender": "Male"
}]`,
'last_name-Johnson'
)
