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
import {ScheduleDate} from '../common/scheduleDate';
import {TravelMode} from '../common/travelMode';

export interface CreateGuideRequestBody {
  /**
   * Guide phone
   */
  phone: string;
  /**
   * Guide email
   */
  email: string;
  /**
   * Guide avatar image key
   */
  avatar: string;
  birthdayDate: string;
  /**
   * City ID
   */
  cityId: number;
  /**
   * Array minio keys
   */
  photos: Array<string>;
  /**
   * Guide Name
   */
  name: string;
  /**
   * About of guide
   */
  description: string;
  /**
   * Max participants count
   */
  maxNumberOfParticipants: number;
  /**
   * Is it possible with children or not
   */
  withChildren?: boolean;
  /**
   * Maximum duration of work
   */
  duration: number;
  /**
   * Cost per 1 hour
   */
  costPerHour: number;
  travelMode: TravelMode;
  schedule: Array<ScheduleDate>;
}
