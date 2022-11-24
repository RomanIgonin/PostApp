import axios from "axios";
import { IP_USERS } from "../../core/constants";

class UsersService {
  public async getUsers() {
    return axios.get(IP_USERS).then((response) => response.data);
  }
}

const usersService = new UsersService();
export default usersService;
