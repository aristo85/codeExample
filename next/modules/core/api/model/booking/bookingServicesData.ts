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
import {VatData} from './vatData';
import {BookingServicesDataKind} from './bookingServicesDataKind';

export interface BookingServicesData {
  id: string;
  name: string;
  description: string;
  totalPrice?: number;
  inclusive: boolean;
  kind?: BookingServicesDataKind;
  mealPlanCode?: string;
  mealPlanName?: string;
  vat?: VatData;
  questCount?: number;
  chargeType: string;
}
