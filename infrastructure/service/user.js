import axios from "axios";

export class UserService {
  static async getUserList(token) {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    return fetch("http://116.203.196.162:3000/users", requestOptions);
  }
  static async updateUser(token, user_id, user_fullname, user_email) {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      user_id,
      user_fullname,
      user_email,
    });

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    return fetch("http://116.203.196.162:3000/users", requestOptions);
  }

  static async deleteUser(token) {
    var myHeaders = new Headers();
    myHeaders.append("authorization", "Bearer " + token);

    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };

    return fetch(
      "http://116.203.196.162:3000/users/01de23af-42b1-4cda-95d4-65eb36dd1087",
      requestOptions
    );
  }
//   static async createUser(token) {
//     var myHeaders = new Headers();
//     myHeaders.append("Authorization", "Bearer ");
//     myHeaders.append("Content-Type", "application/json");
//     myHeaders.append("X-API-Key", "{{token}}");

//     var raw = JSON.stringify({
//       user_fullname: "İhsan K",
//       user_email: "kiyici354@gmail.com",
//       user_password: "123456",
//     });

//     var requestOptions = {
//       method: "POST",
//       headers: myHeaders,
//       body: raw,
//       redirect: "follow",
//     };

//     fetch("http://116.203.196.162:3000/users/new", requestOptions);
//   }
}
