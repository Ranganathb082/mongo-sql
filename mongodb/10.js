
// 10)	find the name and address of the restaurants that received a grade of 'A' on a specific date.



db.address.find(
  {
    grades: {
      $elemMatch: {
        date: { date: ISODate("2021-01-15T06:31:15.000Z") },
        grade: "A",
      },
    },
  },
  { name: 1, "address.building": 1, "address.street": 1, _id: 0 }
);


// [
//   {
//     address: { building: '730', street: 'Columbus Avenue' },
//     name: 'P & S Deli Grocery'
//   },
//   {
//     address: { building: '730', street: 'Columbus Avenue' },
//     name: 'P & S Deli Grocery'
//   }
// ]