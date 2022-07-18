import qs from 'qs';
// services
import LocationService from 'modules/core/services/location.service';
// utils
import { singleton } from 'utils/object.utils';
// types
import { ResourceId } from 'modules/core/types/resource.types';
// services
import getHistory from 'modules/core/services/history.service';

export const WALLET_URL_PARAM_KEYS = {
  SEND_WALLET_ID: 'send_wallet',
  SEND_WALLET_DESTINATION: 'send_wallet_destination',
};

const locationService = new LocationService();

class WalletUrlLocationService {
  public getWalletSendUrlParams() {
    return {
      sendWalletId: locationService.getLocationSearchParam(
        WALLET_URL_PARAM_KEYS.SEND_WALLET_ID
      ),
      sendWalletDestination: locationService.getLocationSearchParam(
        WALLET_URL_PARAM_KEYS.SEND_WALLET_DESTINATION
      ),
    };
  }

  public createWalletSendUrlParams(walletId: ResourceId, destination: string) {
    return destination;
    // `${location.origin}/balance?send_wallet=${walletId}&send_wallet_destination=${destination}`;
  }

  public clearWalletSendUrlParams() {
    const history = getHistory();
    const locationParams = locationService.getLocationSearchParams();

    delete locationParams[WALLET_URL_PARAM_KEYS.SEND_WALLET_ID];
    delete locationParams[WALLET_URL_PARAM_KEYS.SEND_WALLET_DESTINATION];

    history.push({
      search: qs.stringify(locationParams),
    });
  }
}

export default singleton(WalletUrlLocationService);
