import axios, { AxiosInstance } from 'axios';
import BusAPI from './busApi';
import TrainAPI from './trainApi';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

class API {
  private axios: AxiosInstance;
  bus;
  train;

  constructor() {
    this.axios = axios.create({ baseURL: BASE_URL });

    this.bus = new BusAPI(this.axios);
    this.train = new TrainAPI(this.axios);
  }
}

const api = new API();

export default api;
