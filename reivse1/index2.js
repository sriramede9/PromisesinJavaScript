console.log("the start");

//shows callback Hell or christmas tree problem

getUser(1, user => {
  console.log(user);

  getReposByUserName(user.gitUserName, repos => {
    console.log(repos);

    getcommitsbyUser(repos[0], commits => {
      console.log(commits);
    });
  });
});

console.log("the end");

function getUser(id, callback) {
  setTimeout(() => {
    console.log("getting user from data base with id \t" + id);
    callback({ id: id, gitUserName: "sriramede9" });
  }, 2000);
}

function getReposByUserName(username, callback) {
  setTimeout(() => {
    console.log("here are the repos for the username \t" + username);
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}

function getCommitsbyRepo(repo, callback) {
  setTimeout(() => {
    console.log("here are the commits for the repo \t" + repo);
    callback(["com1", "com2", "com3"]);
  }, 2000);
}
