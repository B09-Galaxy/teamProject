import { AxiosInstance } from 'axios';

class BusAPI {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  async getBusData({ pageNo, numOfRows, depTerminalId, arrTerminalId, depPlandTime }: TBusParams) {
    const response = await this.axios.get('api/bus/info', {
      params: {
        pageNo,
        numOfRows,
        _type: 'json',
        depTerminalId,
        arrTerminalId,
        depPlandTime
      }
    });

    const data = response.data;

    return data;
  }
}

export default BusAPI;
