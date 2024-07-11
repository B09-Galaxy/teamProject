import { AxiosInstance } from 'axios';

class BusAPI {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  async getBusData(
    pageNo: number,
    numOfRows: number,
    depTerminalId: string,
    arrTerminalId: string,
    depPlandTime: string
  ) {
    try {
      const response = await this.axios.get('/api/bus/info/route', {
        params: {
          pageNo,
          numOfRows,
          depTerminalId,
          arrTerminalId,
          depPlandTime
        }
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch bus data');
    }
  }
}

export default BusAPI;
