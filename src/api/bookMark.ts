import { Tables } from '@/types/supabase';
import { AxiosInstance } from 'axios';

class BookMarkAPI {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  async getBookMarkData(userId: string) {
    const path = '/api/book-mark';
    const response = await this.axios.get(path, {
      params: {
        userId
      }
    });
    const data = response.data;

    const bookMarkMap:Record<string, any> = {};
    for(const bookMark of data){
      bookMarkMap[bookMark.bookMarkId] = bookMark
    }
    return bookMarkMap;
  }

  async delBookMarkData(bookMarkId: string) {
    const path = '/api/book-mark';
    const response = await this.axios.delete(path, {
      params: {
        bookMarkId
      }
    });
    const data = response.data;

    return data;
  }

  async postBookMark(bookMark: Omit<Tables<'BookMark'>, "createdAt">) {
    const path = '/api/book-mark';

    const response = await this.axios.post(path,bookMark);
    const data = response.data;

    return data;
  }
}

export default BookMarkAPI;
