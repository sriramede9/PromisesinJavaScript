console.log("the start");
//getUser(1, printUserwithreposwithcommits);

// const userone = getUser(1);

// userone.then(user => {
//   console.log(user);
//   getReposbyUsrname(user).then(repo => {
//     console.log(repo);
//     getCommitsbyRepo(repo).then(commits => {
//       console.log(commits);
//     });
//   });
// });

// getUser(1)
//   .then(user => getReposbyUsrname(user.gitUsername))

//   .then(repos => getCommitsbyRepo(repos[0]))
//   .then(commits => console.log(commits));

async function getcommitsbyUser() {
  try {
    const awuser = await getUser(1);
    const awrepos = await getReposbyUsrname(awuser.gitUsername);
    const awcommits = await getCommitsbyRepo(awrepos[1]);
    console.log(awcommits);
  } catch (err) {
    console.log(err);
  }
}
getcommitsbyUser();

console.log("the end");

//extracting inner functions

function printCommits(commits) {
  console.log(commits);
}

function printRepos(repos) {
  console.log(repos);
  getCommitsbyRepo(repos, printCommits);
}

function printUserwithreposwithcommits(user) {
  console.log(user);

  getReposbyUsrname(user.getReposbyUsrname, printRepos);
}

//let's assume we are expecting a reslut from data base

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("late 2 secs here");
      resolve({ id: id, gitUsername: "sri" });
    }, 2000);
  });
}

function getReposbyUsrname(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("getting repos with username" + username);
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
}

function getCommitsbyRepo(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("here are the list of commits for the repo" + repo);

      resolve(["commit1", "commit2"]);
    }, 2000);
  });
}

//let's see how can we do using promises.
