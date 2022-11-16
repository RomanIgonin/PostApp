import axios from "axios";

// export default function AxiosGetUsers() {
//   return axios
//     .get("http://localhost:3001/users")
//     .then((response) => {
//       console.log(response.data);
//       return response.data;
//     })
//     .catch((error) => {
//       return console.error(error);
//     });
// }

class UsersService {
  public async getUsers() {
    return axios
      .get("http://localhost:3001/users")
      .then((response) => response.data);
  }
}

const usersService = new UsersService();
export default usersService;
