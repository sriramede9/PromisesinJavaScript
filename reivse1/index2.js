console.log("the start");

//shows callback Hell or christmas tree problem

// getUser(1, user => {
//   console.log(user);

//   getReposByUserName(user.gitUserName, repos => {
//     console.log(repos);

//     getcommitsbyUser(repos[0], commits => {
//       console.log(commits);
//     });
//   });
// });

// getUser(1)
//   .then(user => {
//     getReposByUserName(user.gitUserName);
//   })
//   .then(repos => {
//     console.log(repos);
//   });

// getUser(1).then(user => console.log(user));

// getReposByUserName("sri").then(repo => console.log(repo));

// getCommitsbyRepo("repo1").then(commits => console.log(commits));

// getUser(1)
//   .then(user => getReposByUserName(user.gitUserName))
//   .then(repos => getCommitsbyRepo(repos[0]))
//   .then(commits => console.log(commits));

//using async await

async function getcommits() {
  try {
    const awuser = await getUser(1);
    const awrepos = await getReposByUserName(awuser.gitUserName);
    const commits = await getCommitsbyRepo(awrepos[0]);
    console.log(commits);
  } catch (err) {
    console.log("error is" + err);
  }
}
getcommits();
console.log("the end");

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("getting user from data base with id \t" + id);
      resolve({ id: id, gitUserName: "sriramede9" });
    }, 2000);
  });
}

function getReposByUserName(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("here are the repos for the username \t" + username);
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
}

function getCommitsbyRepo(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("here are the commits for the repo \t" + repo);
      resolve(["com1", "com2", "com3"]);
    }, 2000);
  });
}
