import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const messages = [
  {
    user: "Chris",
    msg: "Hi"
  },
  {
    user: "Elden",
    msg: "Yo"
  },
  {
    user: "Erin",
    msg: "Hello"
  }
];

class MessageApi {
  static getAllMessages() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], messages));
      }, delay);
    });
  }

  static saveMessage(usermsg,username) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        var new_msg = {};
        new_msg.user = username;
        new_msg.msg = usermsg;
        messages.push(new_msg);
        resolve(new_msg);
      }, delay);
    });
  }
}

export default MessageApi;
