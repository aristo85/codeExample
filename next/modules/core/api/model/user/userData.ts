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
import {UserRole} from './userRole';
import {UserStatus} from './userStatus';

export interface UserData {
  id: number;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  /**
   * Guide email
   */
  email: string;
  /**
   * Guide phone
   */
  phone?: string;
  /**
   * Company
   */
  company?: string;
  commission?: number;
  personalPaymentId?: string;
  birthdayDate?: string;
  role?: UserRole;
  status?: UserStatus;
  createdAt: string;
  updatedAt: string;
}
