const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/hyperlocal"
);

const userSeed = [{
    email: "test@test.com",
    firstName: "Test",
    lastName: "User",
    neighborhood: "Five Points",
    activities: [{
        _id: "ObjectId(5c968d632c8b1e1574c50829)",
        activityName: "Sports",
        activityImage: "https://image.flaticon.com/icons/svg/1165/1165187.svg"
      },
      {
        _id: "ObjectId(5c968d632c8b1e1574c50829)",
        activityName: "Hiking",
        activityImage: "https://image.flaticon.com/icons/svg/71/71423.svg"
      }
    ]
  },
  {
    email: "hello@test.com",
    firstName: "Ima",
    lastName: "Test",
    neighborhood: "Highlands",
    activities: [{
        _id: "ObjectId(5c968d632c8b1e1574c50829)",
        activityName: "Sports",
        activityImage: "https://image.flaticon.com/icons/svg/1165/1165187.svg"
      },
      {
        _id: "ObjectId(5c968d632c8b1e1574c50830)",
        activityName: "Skiing",
        activityImage: "https://image.flaticon.com/icons/svg/1412/1412982.svg"
      }
    ]
  },
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

const activitySeed = [{
    _participant: db.User._id,
    activityName: "Brewing",
    activityImage: "https://image.flaticon.com/icons/svg/90/90618.svg",
  },
  {
    _participant: db.User._id,
    activityName: "Coding",
    activityImage: "https://image.flaticon.com/icons/svg/26/26072.svg",
  },
  {
    _participant: db.User._id,
    activityName: "Baking",
    activityImage: "https://image.flaticon.com/icons/svg/18/18262.svg",
  },
  {
    _participant: db.User._id,
    activityName: "Sports",
    activityImage: "https://image.flaticon.com/icons/svg/1165/1165187.svg",
  },
  {
    _participant: db.User._id,
    activityName: "Exercise",
    activityImage: "https://image.flaticon.com/icons/svg/1517/1517069.svg",
  },
  {
    _participant: db.User._id,
    activityName: "Hiking",
    activityImage: "https://image.flaticon.com/icons/svg/71/71423.svg",
  },
  {
    _participant: db.User._id,
    activityName: "Camping",
    activityImage: "https://image.flaticon.com/icons/svg/185/185590.svg",
  },
  {
    _participant: db.User._id,
    activityName: "Skiing",
    activityImage: "https://image.flaticon.com/icons/svg/1412/1412982.svg",
  },
];

db.Activity
  .remove({})
  .then(() => db.Activity.collection.insertMany(activitySeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });