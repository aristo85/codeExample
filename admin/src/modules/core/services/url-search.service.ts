import qs from 'qs';
// utils
import { singleton } from 'utils/object.utils';

class UrlSearchService {
  public getInsertedUrlSearch<T extends object>(params: T) {
    return qs.stringify({
      ...qs.parse(location.search.replace('?', '')),
      ...params,
    });
  }

  public getUrlSearchParam<T>(paramName: string): T | undefined {
    const allParams = qs.parse(location.search.replace('?', '')) as any;

    const paramValue = allParams[paramName];

    if (paramValue) {
      return paramValue as T;
    }
  }

  public getClearedUrlSearchParam(paramName: string) {
    const allParams = qs.parse(location.search.replace('?', '')) as any;

    delete allParams[paramName];

    return qs.stringify(allParams);
  }
}

const service = singleton(UrlSearchService);

export default new service();
