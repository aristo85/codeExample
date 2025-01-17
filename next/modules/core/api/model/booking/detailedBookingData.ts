/**
 * Go2kavkaz Backend API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * Contact: hello@icerockdev.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import {ShortTouristBookingData} from './shortTouristBookingData';
import {BookingPlacementData} from './bookingPlacementData';
import {BookingStatus} from './bookingStatus';
import {CancellationPolicy} from './cancellationPolicy';
import {BookingExcursionData} from '@/modules/core/api/model/booking/bookingExcursionData';
import {BookingGuideData} from './bookingGuideData';

export interface DetailedBookingData {
  id: number;
  status: BookingStatus;
  bookingNumber?: string;
  touristData: ShortTouristBookingData;
  placementData?: BookingPlacementData;
  excursionData?: BookingExcursionData;
  guideData?: BookingGuideData;
  cancellationPolicy?: CancellationPolicy;
  isCanBeCancelled: boolean;
}
