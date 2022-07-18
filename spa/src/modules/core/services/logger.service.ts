// utils
import { singleton } from 'utils/object.utils';

class LoggerService {
  public error(error: any, message: string) {
    if (process.env.NODE_ENV === 'development') {
      console.error(`Error ${message}. \n\nCatch: `, error);
    }
  }
}

const service = singleton(LoggerService);

export default new service();
