// import type { ResourceId } from 'modules/core/types/resource.types';
import { Support } from '../../types/support.types';

export type SupportProps = {
  support: Support;
  onClose: () => void;
  forceRerender?: () => void;
};
