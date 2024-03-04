import axios, { AxiosResponse } from 'axios';

interface ApiResponse<T> {
  data: T;
  status: number
}


interface ApiResponseWithPagination<T> {
  data: T;
  status: number;
  total: number;
  from: number;
  to: number;
}

// const BACKEND_API_URL = 'http://localhost:3000/api';
const BACKEND_API_URL = 'https://booking-app-p97n89x4x-alampobon34.vercel.app/api';

const api = axios.create({
  baseURL: BACKEND_API_URL,
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

export async function getListWithPagination<T>(url: string): Promise<ApiResponseWithPagination<T>> {
  try {
    const response: AxiosResponse<ApiResponseWithPagination<T>> = await api.get<ApiResponseWithPagination<T>>(url);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

