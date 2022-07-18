import type { ResourceObject } from 'modules/core/types/resource.types';
import { Group } from '../../types/groups.types';

export type GroupEditProps = {
  group: ResourceObject<Group>;
  onClose: () => void;
  forceRerender?: () => void;
};

export type UpdateGroupValues = {
  id: string;
  name: string;
  is_blocked: string;
  description: string;
  created_from: string;
  created_to: string;
  updated_from: string;
  updated_to: string;
};
