import qs from 'qs';
// utils
import { singleton } from 'utils/object.utils';

class LocationService {
  public getLocationSearchParams() {
    return qs.parse(location.search.replace('?', ''));
  }

  public getLocationSearchParam(key: string) {
    const params = this.getLocationSearchParams();
    const value = params[key];

    if (typeof value === 'string') {
      return value;
    }
  }
}
export default singleton(LocationService);
