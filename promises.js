const promise = new Promise((resolve, reject) => {
  setTimeout(resolve({ id: 1, gitUserName: "sriramede9" }), 2000);

  reject(new Error("cannot find such user"));
});

promise
  .catch(error => {
    console.log(error.message);
  })
  .then(user => {
    console.log(user);
  });

//create prmises to get user by id
