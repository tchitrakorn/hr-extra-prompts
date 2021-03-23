/* GOAL: in the following prompts, please use at least one each of the following higher order functions:
  x forEach
  x map
  x reduce
  x filter
  x some
  x every
  x find
  x sort
  NOTE: if the given prompts do not provide an immediate opportunity to use
  one of these higher order functions, create your own use case
*/

const RESPONSE = {
  "status": "success",
  "data": [
    {
      "name": "person1",
      "age": 43,
      "earnings": []
    },
    {
      "name": "person2",
      "age": 60,
      "earnings": []
    },
    {
      "name": "person3",
      "age": 64,
      "earnings": [
        {
          "amount": 7150,
          "reason": "goods"
        },
        {
          "amount": 659,
          "reason": "gift"
        }
      ]
    },
    {
      "name": "person4",
      "age": 25,
      "earnings": []
    },
    {
      "name": "person5",
      "age": 54,
      "earnings": []
    },
    {
      "name": "person6",
      "age": 53,
      "earnings": []
    },
    {
      "name": "person7",
      "age": 26,
      "earnings": [
        {
          "amount": 3794,
          "reason": "work"
        },
        {
          "amount": 801,
          "reason": "gift"
        },
        {
          "amount": 9278,
          "reason": "gift"
        }
      ]
    },
    {
      "name": "person8",
      "age": 42,
      "earnings": []
    },
    {
      "name": "person9",
      "age": 49,
      "earnings": [
        {
          "amount": 7560,
          "reason": "gift"
        },
        {
          "amount": 4504,
          "reason": "goods"
        }
      ]
    },
    {
      "name": "person10",
      "age": 56,
      "earnings": [
        {
          "amount": 8632,
          "reason": "bonus"
        },
        {
          "amount": 4286,
          "reason": "goods"
        },
        {
          "amount": 6823,
          "reason": "work"
        }
      ]
    },
    {
      "name": "person11",
      "age": 25,
      "earnings": [
        {
          "amount": 2864,
          "reason": "work"
        },
        {
          "amount": 4640,
          "reason": "goods"
        }
      ]
    },
    {
      "name": "person12",
      "age": 37,
      "earnings": [
        {
          "amount": 12,
          "reason": "gift"
        }
      ]
    },
    {
      "name": "person13",
      "age": 41,
      "earnings": [
        {
          "amount": 8317,
          "reason": "bonus"
        }
      ]
    },
    {
      "name": "person14",
      "age": 27,
      "earnings": [
        {
          "amount": 4802,
          "reason": "work"
        }
      ]
    },
    {
      "name": "person15",
      "age": 54,
      "earnings": [
        {
          "amount": 6281,
          "reason": "bonus"
        },
        {
          "amount": 5690,
          "reason": "work"
        }
      ]
    },
    {
      "name": "person16",
      "age": 64,
      "earnings": [
        {
          "amount": 6280,
          "reason": "gift"
        },
        {
          "amount": 425,
          "reason": "work"
        }
      ]
    },
    {
      "name": "person17",
      "age": 50,
      "earnings": []
    },
    {
      "name": "person18",
      "age": 36,
      "earnings": []
    },
    {
      "name": "person19",
      "age": 61,
      "earnings": []
    },
    {
      "name": "person20",
      "age": 25,
      "earnings": [
        {
          "amount": 5546,
          "reason": "goods"
        },
        {
          "amount": 3541,
          "reason": "goods"
        }
      ]
    }
  ]
}

/**
* DATA SHAPE FOR @constant response
* {
*      status,
*      data: [                     // array of people
*          {
*              name: string,
*              age: number,
*              earings: [
*                  {
*                      amount: number,
*                      reason: "goods" || "gift" || "bonus"
*                  }
*                  ...
*              ]
*          }
*          ...
*      ]
* }
*/

/**
* STEP 1: Implement a function namesOverX to return all names over a certain age
* use the constant RESPONSE above as an argument for function namesOverX.
*/
/**
* function namesOverX
* description: this function accepts the parameters RESPONSE, and
* ageLimit, and returns an array containing objects
* whose age are older than the ageLimit

OICE:
O: returns an array of "person objects" whose age are older than the ageLimit
I: response and ageLimit
- response is an object with two properties: "status" and "data"
  -> "data" is an array of "person objects"
  -> "person objects" consists of three properties: "name", "age", and "earnings"
- ageLimit is a numeric value
C:
E:

*/

var namesOverX = function(response, ageLimit) {
  // method 1: forEach
  /* var output = [];
  var people = response.data;
  people.forEach(person => {
    if (person.age > ageLimit) {
      output.push(person);
    }
  });
  return output; */

  // method 2: filter
  return response.data.filter(person => person.age > ageLimit);
}

var peopleOlderThan50 = namesOverX(RESPONSE, 50);
// console.log('peopleOlderThan50: ', peopleOlderThan50); // displays an array of "person objects" whose age is greater than 50

/**
* STEP 2: Implement a function totalEarningsPerPerson to return an array containing
* objects with properties { name , net_earnings, age, earnings } where net_earnings is the sum of earnings.
* use the constant RESPONSE above as an argument for function totalEarningsPerPerson.
*/
/**
* function totalEarningsPerPerson
* description: this function accepts the parameter RESPONSE, and
* returns an array containing objects with properties { name , net_earnings, age, earnings }
* where net_earnings is the sum of earnings.

OICE:
O: an array of objects with properties: "name", "net_earnings", "age", and "earnings"
I: response (same as the previous function's input)
C:
E:

*/

var totalEarningsPerPerson = function(response) {
  // method 1: forEach
  /* var output = [];
  var people = response.data;
  people.forEach(person => {
    var personEarningsSummary = {};
    var netEarning = 0;
    person.earnings.forEach(earning => {
      netEarning += earning.amount;
    })
    personEarningsSummary.name = person.name;
    personEarningsSummary["net_earnings"] = netEarning;
    personEarningsSummary.age = person.age;
    personEarningsSummary.earnings = person.earnings;
    output.push(personEarningsSummary);
  });
  return output; */

  // method 2: map
  /* return response.data.map(person => {
    var personSummary = {};
    var netEarning = 0;
    person.earnings.forEach(earning => {
      netEarning += earning.amount;
    })
    personSummary.name = person.name;
    personSummary["net_earnings"] = netEarning;
    personSummary.age = person.age;
    personSummary.earnings = person.earnings;
    return personSummary;
  }); */

  // method 3: map, reduce
  var {data} = response;
  return data.map(person => {
    var accumulateEarning = (totalEarning, currentEarning) => {
      totalEarning += currentEarning.amount;
      return totalEarning;
    };
    person["net_earnings"] = person.earnings.reduce(accumulateEarning, 0); // for each person
    return person;
  });

};

var peopleEarningsSummary = totalEarningsPerPerson(RESPONSE);
console.log('peopleEarningsSummary: ', peopleEarningsSummary);

/**
* STEP 3: Implement a function totalEearningsByReason to return a number representing
* the sum of total earnings that match a reason provided
*/
/**
* function totalEarningsByReason
* description: this function accepts the parameters RESPONSE and reason of either
* "goods" || "gift" || "bonus" and returns the total earnings for that reason. You can expect
* the reason inputted will only be one of the above reasons.

OICE:
O: (1) response object, (2) a reason (either "goods", "gift", or "bonus")
I: A number representing the sum of total earnings that match a reson provided
C: only accepts 3 types of reason
E:

*/

var totalEarningByReason = function(response, reason) {
  // method 1: forEach
  /* var people = response.data;
  var totalEarning = 0;
  people.forEach(person => {
    person.earnings.forEach(earning => {
      if (earning.reason === reason) {
        totalEarning += earning.amount;
      }
    });
  });
  return totalEarning; */

  // method 2: forEach, filter, reduce
  var reducer = (totalEarning, currentPerson) => {
    var currentPersonEarning = 0;
    currentPerson.earnings.filter(earning => earning.reason === reason).forEach(earning => currentPersonEarning += earning.amount);
    return totalEarning + currentPersonEarning;
  };
  return response.data.reduce(reducer, 0);
};

var totalEarningForGoods = totalEarningByReason(RESPONSE, "goods");
// console.log('totalEarningForGoods: ', totalEarningForGoods);


/**
* STEP 4: Implement a function hasTotalEarningsOverAmount to return a boolean representing
* whether the collection has at least item with total earnings over the passted in amount
*/
/**
* function hasTotalEarningsOverAmount
* description: this function accepts the parameters RESPONSE and a number representing total earnings value.

OICE:
O: boolean (whether response has at least a person with total earnings over the passed in amount)
I: response, total earning cap
C:
E:

*/

var hasTotalEarningsOverAmount = function(response, totalEarning) {
  // method 1: some
  return totalEarningsPerPerson(response).some(person => person.net_earnings > totalEarning);

  // methid 2: find
  // return (totalEarningsPerPerson(response).find(person => person.net_earnings > totalEarning)) !== undefined ? true : false;
};

var hasTotalEarningsOver100000 = hasTotalEarningsOverAmount(RESPONSE, 100000);
// console.log('hasTotalEarningsOver100000: ', hasTotalEarningsOver100000); // expected false
var hasTotalEarningsOver100 = hasTotalEarningsOverAmount(RESPONSE, 100);
// console.log('hasTotalEarningsOver100: ', hasTotalEarningsOver100); // expected true

/**
* STEP 5: Implement a function totalEarningsOverAmountEvery to return a boolean representing
* whether every item in the collection has total earnings over the passted in amount
*/
/**
* function totalEarningsOverAmountEvery
* description: this function accepts the parameters RESPONSE and a number representing total earnings value.

OICE:
O: boolean (whether every person in response has total earnings over the passed in amount)
I: response
C:
E:

*/

var hasTotalEarningsOverAmountEvery = function(response, totalEarning) {
  // method 1: every
  return totalEarningsPerPerson(response).every(person => person.net_earnings > totalEarning);
}

var hasTotalEarningsOver100Every = hasTotalEarningsOverAmountEvery(RESPONSE, 100);
// console.log('hasTotalEarningsOver100Every: ', hasTotalEarningsOver100Every); // expected false
var hasTotalEarningsOverNeg1Every = hasTotalEarningsOverAmountEvery(RESPONSE, -1);
// console.log('hasTotalEarningsOverNeg1Every: ', hasTotalEarningsOverNeg1Every); // expected true

/**
* STEP 6: Implement a function sortByAge to return the collection sorted by age
*/
/**
* function sortByAge
* description: this function accepts the parameters RESPONSE and a string either 'ASC'
for sort by age ascending, or 'DESC' to sort by age descending

OICE:
O: sorted response (by age)
I: response, string ('ASC' or 'DESC')
C:
E: (1) sortingInstruction not provided? (must have a default value), (2) invalid sortingInstruction

*/

var sortByAge = function(response, sortingInstruction) {
  // method1: sort
  var compare = function(personA, personB) {
    if (personA.age < personB.age) {
      return -1;
    }
    if (personA.age > personB.age) {
      return 1;
    }
    return 0;
  }
  sortingInstruction === 'ASC' ? response.data.sort(compare) : response.data.sort(compare).reverse();
  return response;
}

var sortByAgeAscending = sortByAge(RESPONSE, 'ASC');
// console.log('sortByAgeAscending: ', sortByAgeAscending);
var sortByAgeDescending = sortByAge(RESPONSE, 'DESC');
// console.log('sortByAgeDescending: ', sortByAgeDescending);
