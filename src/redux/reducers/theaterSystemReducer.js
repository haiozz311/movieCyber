import {
  FETCH_DATA_LIST_THEARTERSYSTEM,
  FETCH_DATA_LIST_THEARTER_WITH_ID_THEARTERSYSTEM,
  FETCH_DATA_THEATERSYSEM_INFO_WITH_ID_THEARTERSYSTEM,
  SET_DATA_LIST_MOVIE_WITH_THEATER,
  SET_DATA_MOVIE_WITH_DATE,
} from "../action/type";

let initialState = {
  listTheaterSystem: [],
  listTheaterWithIdTheaterSystem: [],
  theaterSystemInfo: {},
  listMovieWithTheater: [],
  lstLichChieu: [],
  lstMovieWithDate: [],
};

const TheaterSystem = (state = initialState, { payload, type }) => {
  switch (type) {
    case FETCH_DATA_LIST_THEARTERSYSTEM: {
      return { ...state, listTheaterSystem: payload };
    }
    case FETCH_DATA_LIST_THEARTER_WITH_ID_THEARTERSYSTEM: {
      return { ...state, listTheaterWithIdTheaterSystem: payload };
    }
    case FETCH_DATA_THEATERSYSEM_INFO_WITH_ID_THEARTERSYSTEM: {
      return { ...state, theaterSystemInfo: payload };
    }
    case SET_DATA_LIST_MOVIE_WITH_THEATER: {
      state.listMovieWithTheater = payload;
      console.log("payload", state.listMovieWithTheater);
      let list = [];
      payload.map((item, index) => {
        console.log("item nè123", item);
        item.lstLichChieuTheoPhim.map((item, index) => {
          list.push(item);
        });
      });
      console.log("list", list);
      state.lstLichChieu = list;
      return { ...state };
    }
    case SET_DATA_MOVIE_WITH_DATE: {
      const returnDateFormat = (value) => {
        let date = new Date(value);
        console.log("date", date);
        console.log(
          "???",
          `${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}/${
            date.getMonth() + 1 < 10
              ? "0" + (date.getMonth() + 1)
              : date.getMonth() + 1
          }/${date.getFullYear()}`
        );
        return `${
          date.getDate() < 10 ? "0" + date.getDate() : date.getDate()
        }/${
          date.getMonth() + 1 < 10
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1
        }/${date.getFullYear()}`;
      };
      let listTam = [];

      state.listMovieWithTheater.map((item, index) => {
        let lstLichChieu = [];
        item.lstLichChieuTheoPhim.map((item, index) => {
          if (returnDateFormat(item.ngayChieuGioChieu) === payload) {
            console.log("itemitem", item);
            lstLichChieu.push(item);
          }
        });

        if (lstLichChieu.length !== 0) {
          let movie = {
            tenPhim: item.tenPhim,
            hinhAnh: item.hinhAnh,
            maPhim: item.maPhim,
            lstLichChieu,
          };
          listTam.push(movie);
          console.log("listTam", listTam);
        }
      });
      state.lstMovieWithDate = listTam;
      return { ...state };
    }
    default: {
      return state;
    }
  }
};
export default TheaterSystem;
