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
import {PlacementApiType} from './placementApiType';
import {PlacementType} from './placementType';

export interface CreatePlacementRequestBody {
  /**
   * Placement id (you can see it in your personal api)
   */
  placementId: number;
  placementType: PlacementType;
  placementApiType: PlacementApiType;
}
