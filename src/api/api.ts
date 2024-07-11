import axios, { AxiosInstance } from 'axios';
import BookMarkAPI from './bookMark';
import BusAPI from './busApi';
import TrainAPI from './trainApi';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

class API {
  private axios: AxiosInstance;
  bus;
  train;
  bookMark;

  constructor() {
    this.axios = axios.create({ baseURL: BASE_URL });

    this.train = new BusAPI(this.axios);
    this.bus = new TrainAPI(this.axios);
    this.bookMark = new BookMarkAPI(this.axios);
  }
}

const api = new API();

export default api;
