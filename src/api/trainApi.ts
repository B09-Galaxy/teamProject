import { AxiosInstance } from 'axios';

class TrainAPI {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  getTrainData(){
    
  }
}

export default TrainAPI;