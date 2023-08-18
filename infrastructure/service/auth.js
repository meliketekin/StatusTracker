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
      // {
      //   console.warn(fullName, email, password);
      //   fetch("http://116.203.196.162:3000/users", {
      //     method: "POST",

      //     body: JSON.stringify({
      //     //   user_fullname: "İhsan K",
      //       user_email: "kiyici35@gmail.com",
      //       user_password: "123456",
      //     }),
      //   })
      //     .then((res) => res.json())
      //     .then((json) => console.log(json));
      //   //   if (fullName && email && password) {
      //   //     const response = await axios.post(
      //   //       "https://116.203.196.162:3000/users",
      //   //   {
      //   //     user_fullname: JSON.stringify(fullName),
      //   //     user_email: JSON.stringify(email),
      //   //     user_password: JSON.stringify(password),
      //   //   }
      //   //     );
      //   //     console.warn(JSON.stringify(response.data));
      //   //   }
      // }
      console.error(JSON.stringify(error));
    }
  }
}
