import { singleton } from 'utils/object.utils';

const STORAGE_KEY = 'jwt';

type SubscriberCallback = (jwt: string | null) => void;

class TokenService {
  private readonly jwtSubscribers: SubscriberCallback[] = [];

  public getJwt() {
    return localStorage.getItem(STORAGE_KEY);
  }

  public setJwt(jwt: string) {
    localStorage.setItem(STORAGE_KEY, jwt);
    this.callSubscribers();
  }

  public resetJwt() {
    localStorage.removeItem(STORAGE_KEY);
    this.callSubscribers();
  }

  public subscribeJwtUpdates(callback: SubscriberCallback) {
    this.jwtSubscribers.push(callback);

    return () => {
      this.unsubscribeJwtUpdates(callback);
    };
  }

  public unsubscribeJwtUpdates(callback: SubscriberCallback) {
    this.jwtSubscribers.filter((subscriber) => subscriber !== callback);
  }

  private callSubscribers() {
    const jwt = this.getJwt();

    this.jwtSubscribers.forEach((subscriber) => subscriber(jwt));
  }
}

export default singleton(TokenService);
