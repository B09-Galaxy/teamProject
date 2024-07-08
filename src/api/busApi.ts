import { AxiosInstance } from 'axios';

class BusAPI {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  getBusData() {}
}

export default BusAPI;
