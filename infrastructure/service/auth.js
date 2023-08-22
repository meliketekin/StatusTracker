import axios from "axios";

export class AuthService {
  static async Login(email, password) {
    if (email && password) {
      return fetch("http://116.203.196.162:3000/login", {
        method: "POST",
        headers: {
          // Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
    }
  }
  static async Register(fullName, email, password) {
    try {
      fetch("http://116.203.196.162:3000/users", {
        method: "POST",
        headers: {
          // Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_fullname: fullName,
          user_email: email,
          user_password: password,
        }),
      })
        .then((res) => res.json())
        .then((json) => console.log(json));
    } catch (error) {
     
      console.error(JSON.stringify(error));
    }
  }
}
