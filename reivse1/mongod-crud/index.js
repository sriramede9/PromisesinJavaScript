const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("db is connected!!"))
  .catch(err => console.log("error couldn't connect to mongodb.." + err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean
});

const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  const course = new Course({
    name: "Micheal",
    author: "Sri",
    tags: ["alpha", "beta", "cento"],
    isPublished: true
  });
  try {
    const result = await course.save();
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
}

//createCourse();

async function getCourses() {
  try {
    // const courses = await Course.find();

    const courses = await Course.find({ name: /^J/ })
      .limit(1)
      .sort({ name: -1 })
      .select({
        name: 1,
        tags: 1
      });

    console.log(courses);
  } catch (err) {
    console.log(err.message);
  }
}

getCourses();

async function getCourseseasy() {
  //eq --equal
  //ne --not equal
  //gt --greater than
  //gte --greater than or equal
  //lt --less than
  //lte --less than equa
  //in
  //nin (not in)

  try {
    const courses = await //assume we have a price obj
    Course.find({
      price: { $gt: 10 }
      //if you have in operator
      //{$in:[10,20,30]}
    })
      .limit(1)
      .sort({ name: -1 })
      .select({
        name: 1,
        tags: 1
      });

    console.log(courses);
  } catch (err) {
    console.log(err.message);
  }
}
