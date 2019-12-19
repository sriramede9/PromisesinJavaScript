console.log("the start");
getUser(1, printUserwithreposwithcommits);

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

function getUser(id, callback) {
  setTimeout(() => {
    console.log("late 2 secs here");
    callback({ id: 1, gitUsername: "sri" });
  }, 2000);
}

function getReposbyUsrname(username, callback) {
  setTimeout(() => {
    console.log("calling github api");
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}

function getCommitsbyRepo(repo, callback) {
  setTimeout(() => {
    console.log("here are the list of commits for the repo");

    callback(["commit1", "commit2"]);
  }, 2000);
}

//let's see how can we do using promises.
