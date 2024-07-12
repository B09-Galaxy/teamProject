import { AxiosInstance } from 'axios';

class TrainAPI {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  async getTrainData({ pageNo, numOfRows, depPlaceId, arrPlaceId, depPlandTime }) {
    const response = await this.axios.get('api/train/info', {
      params: {
        serviceKey: process.env.NEXT_PUBLIC_TRAIN_DECODING_KEY,
        pageNo,
        numOfRows,
        _type: 'json',
        depPlaceId,
        arrPlaceId,
        depPlandTime
      }
    });
    return response;
  }
}

export default TrainAPI;
