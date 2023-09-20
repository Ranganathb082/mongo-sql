// 9)	find the number of restaurants that have been graded in each month of the year.

db.address.aggregate([
  { $unwind: "$grades" },
  {
    $group: {
      _id: {
        month: { $month: "$grades.date.date" },
        year: { $year: "$grades.date.date" },
      },
      count: { $sum: 1 },
    },
  },
  { $sort: { "_id.year": 1, "_id.month": 1 } },
]);

// [
//   { _id: { month: null, year: null }, count: 106 },
//   { _id: { month: 1, year: 2021 }, count: 3 },
// ];
