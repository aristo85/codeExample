export interface Response<Data> {
  data: Data;
  message: string;
  status: number;
  success: boolean;
  timestamp: number;
}
