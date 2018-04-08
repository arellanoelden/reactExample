import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const users = [
  {
    name:"Elden",
    pword: "pass"
  },
  {
    name:"Chris",
    pword: "pass"
  },
  {
    name:"Erin",
    pword: "pass"
  }
];

class UserApi {
  static getAllUsers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], users));
      }, delay);
    });
  }

  static saveUser(user) {
    user = Object.assign({}, user); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        //if (game.id) {
          //const existingGameIndex = games.findIndex(a => a.id == game.id);
          //games.splice(existingGameIndex, 1, game);
        //} else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          //game.id = generateId(game);
          users.push(user);
        //}
        resolve(user);
      }, delay);
    });
  }
}

export default UserApi;
