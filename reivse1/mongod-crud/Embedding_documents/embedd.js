const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground-embedded")
  .then(() => console.log("db is connected!!"))
  .catch(err => console.log("error couldn't connect to mongodb.." + err));

const AuthorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String
});

const Author = new mongoose.model("Author", AuthorSchema);

const Course = mongoose.model(
  "Course",
  mongoose.Schema({
    name: String,
    author: AuthorSchema
  })
);

async function createAuthor(name, bio, website) {
  const author = new Author({
    name,
    bio,
    website
  });

  try {
    const result = await author.save();
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
}

//create course

async function createCourse(name, author) {
  const course = new Course({
    name,
    author
  });

  const result = await course.save();
  console.log(result);
}

async function getCourses() {
  try {
    const courses = await Course.find();
    //how to filter here?
    console.log(courses);
  } catch (err) {
    console.log(err.message());
  }
}

//how to update embedded object

async function updateAuthor(id) {
  try {
    //find course with given id
    const course = await Course.findById(id);

    course.author.name = "Sr!";
    const updated = await course.save();
    console.log(updated);
  } catch (err) {
    console.log(err.message());
  }
}

//update the embedded document directly

async function updateDirectly(id) {
  const course = await Course.update(
    { _id: id },
    {
      $set: {
        "author.name": "Sr! EDE"
      }
    }
  );
}

//how to remove embedded object?

//use Unset Operator
async function unsetDirectly(id) {
  const course = await Course.update(
    { _id: id },
    {
      $unset: {
        author: ""
      }
    }
  );
}

// createAuthor("Sri Ram Ede", "Made the impossible happen", "power of hardwork");

// createCourse("Machine Learning", {
//   name: "Sri Ram Ede",
//   bio: "step ahead of the game",
//   website: "type sr!"
// });

getCourses();

// updateAuthor("5e03ee70cc1bd737a8135145");

// updateDirectly("5e03ee70cc1bd737a8135145");
