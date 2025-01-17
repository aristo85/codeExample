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
import {PlacementBookingGuestData} from '../placement/placementBookingGuestData';
import {CancellationPolicy} from './cancellationPolicy';
import {BookingType} from './bookingType';
import {PlacementBookingOwnerData} from '../placement/placementBookingOwnerData';
import {BookingStatus} from '@/modules/core/api/types';
import {BookingGuideData} from '@/modules/core/api/model/booking/bookingGuideData';
import {BookingPlacementData} from '@/modules/core/api/model/booking/bookingPlacementData';
import {BookingExcursionData} from '@/modules/core/api/model/booking/bookingExcursionData';

export interface BookingListData {
  guest: PlacementBookingGuestData;
  owner: PlacementBookingOwnerData;
  id: number;
  name: string;
  arrivalDateTime: string;
  departureDateTime?: string;
  bookingDateTime: string;
  status: BookingStatus;
  type: BookingType;
  price: number;
  commission: number;
  bookingNumber?: string;
  cancellationPolicy?: CancellationPolicy;
  image: string;
  placementData?: BookingPlacementData;
  excursionData?: BookingExcursionData;
  guideData?: BookingGuideData;
  /**
   * Number of participants
   */
  numberOfParticipants?: number;
  /**
   * Number of children
   */
  numberOfChildren?: number;
  email: string;
  phone: string;
  cityName: string;
  eventStartDateTime?: string;
}
