import { singleton } from 'utils/object.utils';

export const defaultCountItemsPerPage = 10;
export const defaultCountCurrenciessPerPage = 50;
export const defaultCountWalletsPerPage = 50;

class PaginationService {}

const service = singleton(PaginationService);

export default new service();
