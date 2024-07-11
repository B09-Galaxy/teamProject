import { Tables } from '@/types/supabase';
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

  async delBookMarkData(bookMarkId: number) {
    const path = '/api/book-mark';
    const response = await this.axios.delete(path, {
      params: {
        bookMarkId: JSON.stringify(bookMarkId)
      }
    });
    const data = response.data;

    return data;
  }

  async postBookMark(bookMark: Tables<'BookMark'>) {
    const path = '/api/book-mark';
    const response = await this.axios.post(path, {
      params: {
        bookMarkId: JSON.stringify(bookMark)
      }
    });
    const data = response.data;

    return data;
  }
}

export default BookMarkAPI;
