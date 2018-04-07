import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const games = [
  {
    id: "1",
    title: "Halo 5",
    platform: "Xbox",
    rating: "4/5"
  },
  {
    id: "2",
    title: "Fortnite",
    platform: "PC",
    rating: "4.5/5"
  },
  {
    id: "3",
    title: "Overwatch",
    platform: "PC",
    rating: "5/5"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (game) => {
  return replaceAll(game.title, ' ', '-');
};

class GameApi {
  static getAllGames() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], games));
      }, delay);
    });
  }

  static saveGame(game) {
    game = Object.assign({}, game); // to avoid manipulating object passed in.
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
          game.id = generateId(game);
          games.push(game);
        //}
        resolve(game);
      }, delay);
    });
  }

  static deleteGame(game) {
    game = Object.assign({}, game);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        var index = -1;
        for(var i = 0; i < games.length; i++) {
          if(games[i].id == game.id) {
            index = i;
          }
        }
        var newGame = {};
        if(index != -1) {
          newGame.rating = "10";
          newGame.title = games[index].title;
          newGame.platform = games[index].platform;
          newGame.id = games[index].id; 
          games.splice(index, 1);
        }
        resolve(Object.assign([], games));
      }, delay);
    });
  }
}

export default GameApi;
