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
import {ErrorDetail} from './errorDetail';

/**
 * Error response
 */
export interface ErrorResponse {
  /**
   * Http status code
   */
  status: number;
  /**
   * Response message
   */
  message: string;
  /**
   * Response timestamp
   */
  timestamp: number;
  /**
   * Response status
   */
  success: boolean;
  /**
   * Response total list count
   */
  totalCount?: number;
  /**
   * data
   */
  data?: Array<ErrorDetail>;
}