import {CreateGuideRequestBody} from '../core/api/model/guide/createGuideRequestBody';
import {PhotoComponentValue} from '../excursion/types';
import {Response} from '@/modules/core/api/Response';
import {ErrorResponse} from '@/modules/core/hooks/useToast';
import {GuideListData} from '@/modules/core/api/model/guide/guideListData';

export type GuideFormData = CreateGuideRequestBody & {
  avatar: PhotoComponentValue[];
  photos: PhotoComponentValue[];
};

export interface GetGuideListResponse extends Response<GuideListData[]> {
  totalCount: string;
}

export interface GuideListResponse extends Response<GuideListData[]> {
  totalCount: string;
  error?: ErrorResponse;
}
