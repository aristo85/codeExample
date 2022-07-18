export type ApiError = {
  body: {
    code: string;
    error: string;
    message: string;
  };
  ok: boolean;
  status: number;
};
