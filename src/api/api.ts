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
    
    this.train = new TrainAPI(this.axios);
    this.bus = new BusAPI(this.axios);
  }
}

const api = new API();

export default api;
