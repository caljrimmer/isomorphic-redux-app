
export function getUser(callback) {
  // Rather than immediately returning, we delay our code with a timeout to simulate asynchronous behavior
  setTimeout(() => {
    callback({
      name : 'John Smith',
      dept : 'Web Team',
      lastLogin : new Date(),
      email : 'john@smith.com',
      id : 'abcde1234' 
    });
  }, 500);

  // In the case of a real world API call, you'll normally run into a Promise like this:
  // API.getUser().then(user => callback(user));
}
