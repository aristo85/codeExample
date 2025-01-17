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

export interface BookingGuideData {
  /**
   * Guide Name
   */
  id: number;
  name?: string;
  /**
   * Guide phone
   */
  /**
   * Guide avatar image url
   */
  description: string;
  images: string[];
  guide: {
    avatar: string;
    firstName: string;
    email: string;
    phone: string;
    age: number;
  };
  numberOfParticipants: number;
  numberOfChildren: number;
  costPerHour: number;
  duration: number;
  guideDate: string;
  guideTime: string;
}
