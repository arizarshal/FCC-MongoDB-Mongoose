const dotenv =require('dotenv').config();
const mongoose = require('mongoose');

// 1) Install & Set up mongoose
mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true,   
    useUnifiedTopology: true,
    useFindAndModify: false },
    (err, res)=>{
      if(err){
        console.error(err + "error" + err )
      }else{
        console.log("successful database connection");
      }
    }
);


// 2) Create a 'Person' Model
const personSchema = mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
});


//  3) Create and Save a Person
const Person = mongoose.model("Person", personSchema);

const createAndSavePerson = (done) => {
  const josh = new Person({name: "Joshua James", age: 45, favoriteFoods: ['pizza', 'pasta', 'pastry', 'pancake']})

  josh.save(function(err, data) {
    if (err) {return console.log(err);
    }
    return done(null, data);
  })
};


// Exercise 4 - Create Many Records with model.create()
const arrayOfPeople = [
  {name: "Frankie", age: 74, favoriteFoods: ["Del Taco"]},
  {name: "Sol", age: 76, favoriteFoods: ["roast chicken"]},
  {name: "Robert", age: 78, favoriteFoods: ["wine"]}
];

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function (people, err) {
    if (err) {return console.log(err)
    }
    return done(null, people);
  });
};



// const arrayOfPeople = [{
//      name: "alex allex",
//      age: 12,
//      favoriteFoods: ['bread sticks', 'burito', 'banana']
// },
//   {
//     name: "screen dual",
//     age: 19,
//     favoriteFoods: ['horlicks', 'hammas', 'ham burger']
//   }
// ]

// const createManyPeople = (arrayOfPeople, done) => {
//   Person.create(arrayOfPeople, function(err, people) {
//     if (err) return console.log(err);
//     done(console.log(Person), people);
//   })
// };

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
