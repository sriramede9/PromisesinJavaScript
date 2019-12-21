const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("db is connected!!"))
  .catch(err => console.log("error couldn't connect to mongodb.." + err));

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 255 },
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: { type: Number, required: true }
});

const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  const course = new Course({
    name: "Gagan",
    author: "Sri",
    tags: ["alpha", "beta", "gama"],
    isPublished: true,
    price: 24
  });
  try {
    //validation using class

    // const validatedCourse = await course.validate();

    //if true return null
    //if false implies failed validation and throws exception
    // const result = await course.save();
    course.validate();
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

//getCourses();

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

//how to update courses!!

async function updateCourse(id) {
  try {
    //get course by id

    const course = await Course.findById(id);

    if (!course) return;

    const result = course.set({
      isPublished: true,
      author: "sri ram Ede"
    });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

//updateCourse("5dfd570bc27a4825c4ce85e1");
createCourse();
