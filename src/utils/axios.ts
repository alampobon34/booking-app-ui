import axios, { AxiosResponse } from 'axios';

interface ApiResponse<T> {
  data: T;
  status: number
}

const BACKEND_API_URL = 'http://localhost:3000/api'

const api = axios.create({
  baseURL: BACKEND_API_URL,
  headers: { Authorization: `Bearer ynYF3oue23nVqpgq1bXy77OL9iXA` }
});


export default api;


export async function getListApiRequest<T>(url: string): Promise<T> {
  try {
    const response: AxiosResponse<ApiResponse<T>> = await api.get<ApiResponse<T>>(url);
    if (response.data.status === 200) {
      return response.data.data;
    } else {
      return [] as T;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

