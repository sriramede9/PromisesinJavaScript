const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("db is connected!!"))
  .catch(err => console.log("error couldn't connect to mongodb.." + err));

const Author = mongoose.model(
  "Author",
  new mongoose.Schema({
    name: String,
    bio: String,
    website: String
  })
);

const Course = mongoose.model(
  "Course",
  mongoose.Schema({
    name: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author"
    }
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
    const courses = await Course.find()
      .populate("author", "name") //gives you name of the author
      .select(["name", "author"]); //gives name of the course +author obj id and populate is filtering name from it
    console.log(courses);
  } catch (err) {
    console.log(err.message);
  }
}

// createAuthor("Sri Ram Ede", "Made the impossible happen", "power of hardwork");

// createCourse("Machine Learning", "5e03e3215bfc873f503033d1");

getCourses();
