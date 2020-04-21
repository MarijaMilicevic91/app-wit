class Authenticator {
    constructor() {
      this.isAuthenticated = false;
      this.users = [
        { username: "user1", password: "pass1" },
        { username: "user2", password: "pass2" }
      ];
    }
  
    authenticate(username, password, cb) {
      setTimeout(() => {
        const validUser = this.users.find(
          u => u.username === username && u.password === password
        ) 
        this.isAuthenticated = validUser ? true : false
        cb(this.isAuthenticated);
      }, 100);
    }
  
    signout(cb) {
      this.isAuthenticated = false;
      setTimeout(cb, 100);
    }
  }
  
  export default new Authenticator();
  