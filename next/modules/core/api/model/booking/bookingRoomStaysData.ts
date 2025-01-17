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
import {RoomTypeData} from '../placement/roomTypeData';
import {BookingServicesData} from './bookingServicesData';
import {DailyRatesData} from './dailyRatesData';
import {GuestData} from './guestData';
import {RatePlanData} from './ratePlanData';
import {QuestsCountData} from './questsCountData';
import {TotalData} from './totalData';
import {StayDatesData} from './stayDatesData';

export interface BookingRoomStaysData {
  stayDates: StayDatesData;
  ratePlan: RatePlanData;
  roomType: RoomTypeData;
  guests: Array<GuestData>;
  guestCount: QuestsCountData;
  checksum: string;
  dailyRates?: DailyRatesData;
  total?: TotalData;
  services: BookingServicesData[];
}