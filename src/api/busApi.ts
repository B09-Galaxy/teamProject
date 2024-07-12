import { AxiosInstance } from 'axios';

class BusAPI {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  async getBusData({ pageNo, numOfRows, depTerminalId, arrTerminalId, depPlandTime }: TBusParams) {
    const response = await this.axios.get('api/bus/info', {
      params: {
        serviceKey: process.env.NEXT_PUBLIC_BUS_DECODING_KEY,
        pageNo,
        numOfRows,
        _type: 'json',
        depTerminalId,
        arrTerminalId,
        depPlandTime
      }
    });
    const data = response.data.items.item;
    return data;
  }
}

export default BusAPI;
