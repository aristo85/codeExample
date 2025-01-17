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
import {RoomExtraData} from './roomExtraData';
import {AmenityWithCategory} from './amenityWithCategory';
import {RoomType} from './roomType';

export interface Room {
  description?: string;
  images: Array<string>;
  roomName?: string;
  roomType: RoomType;
  sizeValue?: number;
  sizeUnit?: string;
  placesToStay?: number;
  numberOfAdult?: number;
  numberOfChildren?: number;
  extraPlaces?: number;
  amenitiesWithCategory?: Array<AmenityWithCategory>;
  extraData?: RoomExtraData;
  prepaymentPrice?: number;
}
