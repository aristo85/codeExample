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
import {Role} from '../user/role';

export interface SignUpRequestBody {
  /**
   * User name
   */
  firstName: string;
  /**
   * User name
   */
  lastName: string;
  /**
   * User name
   */
  middleName?: string;
  /**
   * User email
   */
  email: string;
  /**
   * User phone
   */
  phone?: string;
  company?: string;
  /**
   * password
   */
  password: string;
  /**
   * password
   */
  passwordRepeat: string;
  role?: Role;
}
