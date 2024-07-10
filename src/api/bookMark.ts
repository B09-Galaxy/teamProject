import { AxiosInstance } from 'axios';

class BookMarkAPI {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  async getBookMarkData() {
    const path = '/api/book-mark';
    const response = await this.axios.get(path);
    const data = response.data;

    return data;
  }
}

export default BookMarkAPI;
