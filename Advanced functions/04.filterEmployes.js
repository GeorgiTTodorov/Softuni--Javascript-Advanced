function filterEmployees(data, criteria) {
  const parsed = JSON.parse(data);
  let sortCriteria = criteria.split("-")[1];
  let temp = [];
  for (const el of parsed) {
    temp.push(Object.values(el));
  }

  for (let i = 0; i < temp.length; i++) {
    let current = temp[i];
    if (current.includes(sortCriteria)) {
      console.log(`${i}. ${current[1]} ${current[2]} - ${current[3]}`);
    } else if (sortCriteria === "all") {
      console.log(`${i}. ${current[1]} ${current[2]} - ${current[3]}`);
    }
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
    "gender-all"
  );
