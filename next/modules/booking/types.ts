export interface CalculatePenaltyResponse {
  message: string;
  status: number;
  success: boolean;
  timestamp: number;
  data: {
    dateTime: string;
    bookingNumber: string;
    amount: number;
  };
}
