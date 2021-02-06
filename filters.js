const input = [1, 2, 3, 4, 5, 6];

//map
const mappedObject = input.map((ele) =>{
    if (typeof ele !== "number") {
        return ele;
    }
    // Check if it is an even number
    if (ele % 2 ==0) {
        return 1;
    }
    else {
        return 0;
    }
});

//filter 
const filteredObject = input.filter((ele) => {
    if (ele % 2 ==0) {
        return ele;
    }

});

console.log(`input: ${input}`);
console.log(`mappedObject: ${mappedObject}`);
console.log(`filteredObject: ${filteredObject}`);


const expenses_for_the_week = [
    {
      creditCard: "Amex",
      day: "monday",
      expenses: "10$",
    },
    {
      creditCard: "VISA",
      day: "tuesday",
      expenses: "20$",
    },
    {
      creditCard: "VISA",
      day: "wednesday",
      expenses: "30$",
    },
    {
      creditCard: "Mastercard",
      day: "thursday",
      expenses: "0$",
    },
    {
      creditCard: "VISA",
      day: "friday",
      expenses: "100$",
    },
    {
      creditCard: "amex",
      day: "saturday",
      expenses: "999$",
    },
    {
      creditCard: "mastercard",
      day: "sunday",
      expenses: "888$",
    },
  ];
  output = [
    {
      expenses: "999$",
    },
    {
      expenses: "888$",
    },
  ];

  // expenses for Monday
  const expensesForMonday = expenses_for_the_week.filter((ele)=> {
      if (ele.day == "monday") {
          return ele;
      }
  });

  console.log(`My expenses for Monday are: ${JSON.stringify(expensesForMonday)}`);

//filter for only weekend expenses
const expensesForWeekend = expenses_for_the_week.filter((ele) => {
     if (ele.day == "saturday" || ele.day == "sunday") {
         return ele;
     }
});

//map only the expenses key
const expensesMap = expensesForWeekend.map((ele) => {
    return {
        expenses: ele.expenses,
    };
});
console.log(`Filtered results for the weekend: ${JSON.stringify(expensesForWeekend)}`);

console.log(`mapped results with ONLY expenses: ${JSON.stringify(expensesMap)}`);