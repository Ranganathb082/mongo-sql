db.address.insertOne({
  address: {
    building: "469",
    coord: [-73.961704, 40.662942],
    street: "Flatbush Avenue",
    zipcode: "11225",
  },
  borough: "Brooklyn",
  cuisine: "Hamburgers",
  grades: [
    { date: { $date: 1419897600000 }, grade: "A", score: 8 },
    { date: { $date: 1404172800000 }, grade: "B", score: 23 },
    { date: { $date: 1367280000000 }, grade: "A", score: 12 },
    { date: { $date: 1336435200000 }, grade: "A", score: 12 },
  ],
  name: "Wendy'S",
  restaurant_id: "30112340",
});

db.address.insertOne(
  db.address.insertOne({
    address: {
      building: "469",
      coord: [-73.961704, 40.662942],
      street: "Flatbush Avenue",
      zipcode: "11225",
    },
    borough: "Brooklyn",
    cuisine: "Hamburgers",
    grades: [
      { date: { $date: 1419897600000 }, grade: "A", score: 8 },
      { date: { $date: 1404172800000 }, grade: "B", score: 23 },
      { date: { $date: 1367280000000 }, grade: "A", score: 12 },
      { date: { $date: 1336435200000 }, grade: "A", score: 12 },
    ],
    name: "Wendy'S",
    restaurant_id: "30112340",
  })
);

db.address.insertOne({
  address: {
    building: "351",
    coord: [-73.98513559999999, 40.7676919],
    street: "West   57 Street",
    zipcode: "10019",
  },
  borough: "Manhattan",
  cuisine: "Irish",
  grades: [
    { date: { $date: 1409961600000 }, grade: "A", score: 2 },
    { date: { $date: 1374451200000 }, grade: "A", score: 11 },
    { date: { $date: 1343692800000 }, grade: "A", score: 12 },
    { date: { $date: 1325116800000 }, grade: "A", score: 12 },
  ],
  name: "Dj Reynolds Pub And Restaurant",
  restaurant_id: "30191841",
});

db.address.insertOne({
  address: {
    building: "2780",
    coord: [-73.98241999999999, 40.579505],
    street: "Stillwell Avenue",
    zipcode: "11224",
  },
  borough: "Brooklyn",
  cuisine: "American ",
  grades: [
    { date: { $date: 1402358400000 }, grade: "A", score: 5 },
    { date: { $date: 1370390400000 }, grade: "A", score: 7 },
    { date: { $date: 1334275200000 }, grade: "A", score: 12 },
    { date: { $date: 1318377600000 }, grade: "A", score: 12 },
  ],
  name: "Riviera Caterer",
  restaurant_id: "40356018",
});

db.address.insertOne({
  address: {
    building: "97-22",
    coord: [-73.8601152, 40.7311739],
    street: "63 Road",
    zipcode: "11374",
  },
  borough: "Queens",
  cuisine: "Jewish/Kosher",
  grades: [
    { date: { $date: 1416787200000 }, grade: "Z", score: 20 },
    { date: { $date: 1358380800000 }, grade: "A", score: 13 },
    { date: { $date: 1343865600000 }, grade: "A", score: 13 },
    { date: { $date: 1323907200000 }, grade: "B", score: 25 },
  ],
  name: "Tov Kosher Kitchen",
  restaurant_id: "40356068",
});

db.address.insertOne({
  address: {
    building: "8825",
    coord: [-73.8803827, 40.7643124],
    street: "Astoria Boulevard",
    zipcode: "11369",
  },
  borough: "Queens",
  cuisine: "American ",
  grades: [
    { date: { $date: 1416009600000 }, grade: "Z", score: 38 },
    { date: { $date: 1398988800000 }, grade: "A", score: 10 },
    { date: { $date: 1362182400000 }, grade: "A", score: 7 },
    { date: { $date: 1328832000000 }, grade: "A", score: 13 },
  ],
  name: "Brunos On The Boulevard",
  restaurant_id: "40356151",
});

db.address.insertOne({
  address: {
    building: "2206",
    coord: [-74.1377286, 40.6119572],
    street: "Victory Boulevard",
    zipcode: "10314",
  },
  borough: "Staten Island",
  cuisine: "Jewish/Kosher",
  grades: [
    { date: { $date: 1412553600000 }, grade: "A", score: 9 },
    { date: { $date: 1400544000000 }, grade: "A", score: 12 },
    { date: { $date: 1365033600000 }, grade: "A", score: 12 },
    { date: { $date: 1327363200000 }, grade: "A", score: 9 },
  ],
  name: "Kosher Island",
  restaurant_id: "40356442",
});

db.address.insertOne({
  address: {
    building: "7114",
    coord: [-73.9068506, 40.6199034],
    street: "Avenue U",
    zipcode: "11234",
  },
  borough: "Brooklyn",
  cuisine: "Delicatessen",
  grades: [
    { date: { $date: 1401321600000 }, grade: "A", score: 10 },
    { date: { $date: 1389657600000 }, grade: "A", score: 10 },
    { date: { $date: 1375488000000 }, grade: "A", score: 8 },
    { date: { $date: 1342569600000 }, grade: "A", score: 10 },
    { date: { $date: 1331251200000 }, grade: "A", score: 13 },
    { date: { $date: 1318550400000 }, grade: "A", score: 9 },
  ],
  name: "Wilken'S Fine Food",
  restaurant_id: "40356483",
});

db.address.insertOne({
  address: {
    building: "6409",
    coord: [-74.00528899999999, 40.628886],
    street: "11 Avenue",
    zipcode: "11219",
  },
  borough: "Brooklyn",
  cuisine: "American ",
  grades: [
    { date: { $date: 1405641600000 }, grade: "A", score: 12 },
    { date: { $date: 1375142400000 }, grade: "A", score: 12 },
    { date: { $date: 1360713600000 }, grade: "A", score: 11 },
    { date: { $date: 1345075200000 }, grade: "A", score: 2 },
    { date: { $date: 1313539200000 }, grade: "A", score: 11 },
  ],
  name: "Regina Caterers",
  restaurant_id: "40356649",
});

db.address.insertMany([
  {
    address: {
      building: "1839",
      coord: [-73.9482609, 40.6408271],
      street: "Nostrand Avenue",
      zipcode: "11226",
    },
    borough: "Brooklyn",
    cuisine: "Ice Cream, Gelato, Yogurt, Ices",
    grades: [
      { date: { $date: 1405296000000 }, grade: "A", score: 12 },
      { date: { $date: 1373414400000 }, grade: "A", score: 8 },
      { date: { $date: 1341964800000 }, grade: "A", score: 5 },
      { date: { $date: 1329955200000 }, grade: "A", score: 8 },
    ],
    name: "Taste The Tropics Ice Cream",
    restaurant_id: "40356731",
  },
  {
    address: {
      building: "2300",
      coord: [-73.8786113, 40.8502883],
      street: "Southern Boulevard",
      zipcode: "10460",
    },
    borough: "Bronx",
    cuisine: "American ",
    grades: [
      { date: { $date: 1401235200000 }, grade: "A", score: 11 },
      { date: { $date: 1371600000000 }, grade: "A", score: 4 },
      { date: { $date: 1339718400000 }, grade: "A", score: 3 },
    ],
    name: "Wild Asia",
    restaurant_id: "40357217",
  },
]);
db.address.insertMany([
  {
    address: {
      building: "1839",
      coord: [-73.9482609, 40.6408271],
      street: "Nostrand Avenue",
      zipcode: "11226",
    },
    borough: "Brooklyn",
    cuisine: "Ice Cream, Gelato, Yogurt, Ices",
    grades: [
      { date: { $date: 1405296000000 }, grade: "A", score: 12 },
      { date: { $date: 1373414400000 }, grade: "A", score: 8 },
      { date: { $date: 1341964800000 }, grade: "A", score: 5 },
      { date: { $date: 1329955200000 }, grade: "A", score: 8 },
    ],
    name: "Taste The Tropics Ice Cream",
    restaurant_id: "40356731",
  },
  {
    address: {
      building: "2300",
      coord: [-73.8786113, 40.8502883],
      street: "Southern Boulevard",
      zipcode: "10460",
    },
    borough: "Bronx",
    cuisine: "American ",
    grades: [
      { date: { $date: 1401235200000 }, grade: "A", score: 11 },
      { date: { $date: 1371600000000 }, grade: "A", score: 4 },
      { date: { $date: 1339718400000 }, grade: "A", score: 3 },
    ],
    name: "Wild Asia",
    restaurant_id: "40357217",
  },
]);




db.address.insertMany( [
    {"address": {"building": "7715", "coord": [-73.9973325, 40.61174889999999], "street": "18 Avenue", "zipcode": "11214"}, "borough": "Brooklyn", "cuisine": "American ", "grades": [{"date": {"$date": 1397606400000}, "grade": "A", "score": 5}, {"date": {"$date": 1366675200000}, "grade": "A", "score": 2}, {"date": {"$date": 1335225600000}, "grade": "A", "score": 5}, {"date": {"$date": 1323993600000}, "grade": "A", "score": 2}], "name": "C & C Catering Service", "restaurant_id": "40357437"},
    {"address": {"building": "1269", "coord": [-73.871194, 40.6730975], "street": "Sutter Avenue", "zipcode": "11208"}, "borough": "Brooklyn", "cuisine": "Chinese", "grades": [{"date": {"$date": 1410825600000}, "grade": "B", "score": 21}, {"date": {"$date": 1377648000000}, "grade": "A", "score": 7}, {"date": {"$date": 1364860800000}, "grade": "C", "score": 56}, {"date": {"$date": 1344988800000}, "grade": "B", "score": 27}, {"date": {"$date": 1332892800000}, "grade": "B", "score": 27}], "name": "May May Kitchen", "restaurant_id": "40358429"}
 ] );


db.address.insertMany( [
{"address": {"building": "1", "coord": [-73.96926909999999, 40.7685235], "street": "East   66 Street", "zipcode": "10065"}, "borough": "Manhattan", "cuisine": "American ", "grades": [{"date": {"$date": 1399420800000}, "grade": "A", "score": 3}, {"date": {"$date": 1367539200000}, "grade": "A", "score": 4}, {"date": {"$date": 1335744000000}, "grade": "A", "score": 6}, {"date": {"$date": 1324944000000}, "grade": "A", "score": 0}], "name": "1 East 66Th Street Kitchen", "restaurant_id": "40359480"},
{"address": {"building": "705", "coord": [-73.9653967, 40.6064339], "street": "Kings Highway", "zipcode": "11223"}, "borough": "Brooklyn", "cuisine": "Jewish/Kosher", "grades": [{"date": {"$date": 1415577600000}, "grade": "A", "score": 11}, {"date": {"$date": 1381363200000}, "grade": "A", "score": 13}, {"date": {"$date": 1349308800000}, "grade": "A", "score": 7}, {"date": {"$date": 1337558400000}, "grade": "A", "score": 9}, {"date": {"$date": 1325203200000}, "grade": "B", "score": 19}], "name": "Seuda Foods", "restaurant_id": "40360045"}

 ] );

 
db.address.insertMany( [
    {"address": {"building": "265-15", "coord": [-73.7032601, 40.7386417], "street": "Hillside Avenue", "zipcode": "11004"}, "borough": "Queens", "cuisine": "Ice Cream, Gelato, Yogurt, Ices", "grades": [{"date": {"$date": 1414454400000}, "grade": "A", "score": 9}, {"date": {"$date": 1379462400000}, "grade": "A", "score": 10}, {"date": {"$date": 1348099200000}, "grade": "A", "score": 13}], "name": "Carvel Ice Cream", "restaurant_id": "40361322"},
    {"address": {"building": "6909", "coord": [-74.0259567, 40.6353674], "street": "3 Avenue", "zipcode": "11209"}, "borough": "Brooklyn", "cuisine": "Delicatessen", "grades": [{"date": {"$date": 1408579200000}, "grade": "A", "score": 4}, {"date": {"$date": 1393977600000}, "grade": "A", "score": 3}, {"date": {"$date": 1357776000000}, "grade": "A", "score": 10}], "name": "Nordic Delicacies", "restaurant_id": "40361390"}
 ] );


db.address.insertMany( [
{"address": {"building": "522", "coord": [-73.95171, 40.767461], "street": "East   74 Street", "zipcode": "10021"}, "borough": "Manhattan", "cuisine": "American ", "grades": [{"date": {"$date": 1409616000000}, "grade": "A", "score": 12}, {"date": {"$date": 1387411200000}, "grade": "B", "score": 16}, {"date": {"$date": 1369699200000}, "grade": "A", "score": 9}, {"date": {"$date": 1354838400000}, "grade": "A", "score": 13}, {"date": {"$date": 1332979200000}, "grade": "A", "score": 11}], "name": "Glorious Food", "restaurant_id": "40361521"},
{"address": {"building": "284", "coord": [-73.9829239, 40.6580753], "street": "Prospect Park West", "zipcode": "11215"}, "borough": "Brooklyn", "cuisine": "American ", "grades": [{"date": {"$date": 1416355200000}, "grade": "A", "score": 11}, {"date": {"$date": 1384387200000}, "grade": "A", "score": 2}, {"date": {"$date": 1354665600000}, "grade": "A", "score": 13}, {"date": {"$date": 1337212800000}, "grade": "A", "score": 11}], "name": "The Movable Feast", "restaurant_id": "40361606"}
 ] );

 
 

db.address.insertMany( [
    {"address": {"building": "129-08", "coord": [-73.839297, 40.78147], "street": "20 Avenue", "zipcode": "11356"}, "borough": "Queens", "cuisine": "Delicatessen", "grades": [{"date": {"$date": 1408147200000}, "grade": "A", "score": 12}, {"date": {"$date": 1377561600000}, "grade": "A", "score": 9}, {"date": {"$date": 1348099200000}, "grade": "A", "score": 7}, {"date": {"$date": 1317254400000}, "grade": "A", "score": 10}], "name": "Sal'S Deli", "restaurant_id": "40361618"},
    {"address": {"building": "759", "coord": [-73.9925306, 40.7309346], "street": "Broadway", "zipcode": "10003"}, "borough": "Manhattan", "cuisine": "Delicatessen", "grades": [{"date": {"$date": 1390262400000}, "grade": "A", "score": 12}, {"date": {"$date": 1357257600000}, "grade": "A", "score": 11}, {"date": {"$date": 1339027200000}, "grade": "A", "score": 6}, {"date": {"$date": 1326758400000}, "grade": "A", "score": 8}], "name": "Bully'S Deli", "restaurant_id": "40361708"}
 ] );
 
 

db.address.insertOne( 
    {"address": {"building": "730", "coord": [-73.96805719999999, 40.7925587], "street": "Columbus Avenue", "zipcode": "10025"}, "borough": "Manhattan", "cuisine": "American ", "grades": [{"date": {"$date": 1410480000000}, "grade": "B", "score": 26}, {"date": {"$date": 1377648000000}, "grade": "A", "score": 9}, {"date": {"$date": 1364169600000}, "grade": "B", "score": 20}, {"date": {"$date": 1329177600000}, "grade": "A", "score": 12}], "name": "P & S Deli Grocery", "restaurant_id": "40362264"}
 );