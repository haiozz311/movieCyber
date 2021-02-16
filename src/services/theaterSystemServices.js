import createConnector from "../configs/connector";
import { createAction } from "../redux/action";
class TheaterSystem {
  url = "https://movie0706.cybersoft.edu.vn/api/QuanLyRap";
  url1 = "https://movie-kix-v1.herokuapp.com/api";
  maNhom = "GP06";
  getAllTheaterSystem = () => {
    return createConnector({
      method: "get",
      url: `${this.url1}/getSystemCinema`,
    });
  };
  getALLGroupTheatherWithIdTheatherSystem = (idTheather) => {
    return createConnector({
      method: "get",
      url: `${this.url1}/getSystemCinema?maHeThongRap=${idTheather}`,
    });
  };
  getALLInfoFollowTheaterSystem = (idTheater) => {
    return createConnector({
      method: "get",
      url: `${this.url1}/getSystemCinema?maHeThongRap=${idTheater}`,
    });
  };
}
export default TheaterSystem;
