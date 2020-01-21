import routes from "../routes/routes";
import axios from "axios";
class UserService {
  async Signin(userName, password) {
    let route = await routes.filter(r => r.Name === 'Signin');
    let user = await axios.post(route[0].Route, {
      userName,
      password
    });
    return user.data;
  }
} //.

export default UserService;
