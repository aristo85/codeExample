import BunkBedsIcon from '@/modules/core/components/icons/amenities/BunkBedsIcon';
import ChairsIcon from '@/modules/core/components/icons/amenities/ChairsIcon';
import HairDryerIcon from '@/modules/core/components/icons/amenities/HairdryerIcon';
import RefrigeratorIcon from '@/modules/core/components/icons/amenities/RefrigeratorIcon';
import HangersIcon from '@/modules/core/components/icons/amenities/HangersIcon';
import WifiIcon from '@/modules/core/components/icons/amenities/WifiIcon';
import SlippersIcon from '@/modules/core/components/icons/amenities/SlippersIcon';
import BathWithWCIcon from '@/modules/core/components/icons/amenities/BathWithWCIcon';
import HygienicAids from '@/modules/core/components/icons/amenities/HygienicAids';
import ToiletBowlIcon from '@/modules/core/components/icons/amenities/ToiletBowlIcon';
import ClosetsIcon from '@/modules/core/components/icons/amenities/ClosetsIcon';
import ShowerIcon from '@/modules/core/components/icons/amenities/ShowerIcon';
import CityViewIcon from '@/modules/core/components/icons/amenities/CityViewIcon';
import KitchenIcon from '@/modules/core/components/icons/amenities/DishesIcon';
import TeaSetIcon from '../../../core/components/icons/amenities/TeaSetIcon';
import DrinkingWaterIcon from '../../../core/components/icons/amenities/DrinkingWaterIcon';
import HighCeilingsIcon from '@/modules/core/components/icons/amenities/HighCeilingsIcon';
import {Room} from '@/modules/core/api/model/placement/room';
import EmptySpaceIcon from '@/modules/core/components/icons/amenities/DefaultIcon';
import GlassesIcon from '@/modules/core/components/icons/amenities/GlassesIcon';
import BalconyIcon from '@/modules/core/components/icons/amenities/BalconyIcon';
import WarmFloorIcon from '@/modules/core/components/icons/amenities/WarmFloorIcon';
import SofaBedIcon from '@/modules/core/components/icons/amenities/SofaBedIcon';
import InternetIcon from '@/modules/core/components/icons/amenities/InternetIcon';
import NightstandIcon from '@/modules/core/components/icons/amenities/NightstandIcon';
import MaidServiceIcon from '@/modules/core/components/icons/amenities/MaidServiceIcon';
import OttomanChairIcon from '@/modules/core/components/icons/amenities/OttomanChairIcon';
import TVIcon from '@/modules/core/components/icons/amenities/TVIcon';
import SatelliteIcon from '@/modules/core/components/icons/amenities/SatelliteIcon';
import SinkIcon from '@/modules/core/components/icons/amenities/SinkIcon';
import WebTVIcon from '@/modules/core/components/icons/amenities/WebTVIcon';
import TowelsIcon from '@/modules/core/components/icons/amenities/TowelsIcon';
import {
  AirConditioner,
  Alarm,
  Double,
  Fan,
  GrandpaPhone,
  Hairdryer,
  Karaoke,
  Multimedia,
  Single,
  Tv,
  Twin,
  Wifi,
  FanCoil,
  Scales,
  CoffeeMachine,
  Cooler,
  Microwave,
  Lamp,
  Laptop,
  KitchenStove,
  Radio,
  SecuritySystem,
  Iron,
  Fax,
  Refrigerator,
  ElectronicLock,
  BedsideTable,
  Hanger,
  Cupboard,
  Sofa,
  Desk,
  Mirror,
  Armchair,
  Table,
  Poof,
  Chair,
  Carpet,
  Bathroom,
  Shower,
  Towel,
  Sauna,
  Toilet,
  Cosmetics,
  Slippers,
  Bathrobe,
  Safe,
  Balcony,
  IroningBoard,
  Newspaper,
  Fireplace,
  BottledWater,
  MiniBar,
  Cookware,
  Service,
  WritingMaterials,
  Dishwasher,
  Washer,
  Kettle,
  TeaSet,
  Sink,
  Heating,
  Boiler,
  SeaView,
  CityView,
  RiverView,
  GardenView,
  CourtView,
  PoolView,
  MountainView,
  ForestView,
  NoIcon,
  SmartHouse,
  Pool,
  Glasses,
  MosquitoNet,
  Nightstand,
  Couch,
  Usb,
  ViewRaceTrack,
  ChildRollaway,
  PillowsMenu,
  NoSmoking,
  TwoKingSizeBeds,
  TwoQueenSizeBeds,
  Smoking,
  StadiumView,
  ParkView,
  NoWindow,
  Room2,
  Room3,
  Room4,
  Tile,
  BathOrShower,
  ThreeSingleBeds,
  WarmFloor,
  Heater,
  HypoallergenicLinen,
  PrivateRoomEntrance,
  PanoramicWindows,
  SoundproofedRoom,
  WindowToHotelAtrium,
  WindowLeaf,
} from '@/modules/core/components/icons/travelLineAmenities';

type Dimension = {width: number; height: number};

const standardDimensions = {width: 32, height: 32};

export const getIconTravelLine = (code: string, sizes?: Dimension) => {
  const dimensions = sizes ?? standardDimensions;

  switch (code) {
    case 'wifi_internet':
    case 'internet':
      return <Wifi {...dimensions} />;
    case 'air_conditioning':
    case 'central_air_conditioning':
    case 'air_conditioning_individually_controlled_in_room':
      return <AirConditioner {...dimensions} />;
    case 'single_bed':
    case 'orthopedic_mattress':
    case 'bunk_beds':
      return <Single {...dimensions} />;
    case 'two_double_beds':
    case 'two_full_beds':
    case 'two_single_beds':
    case 'two_single_or_big_double_bed':
      return <Twin {...dimensions} />;
    case 'king_bed':
    case 'queen_bed':
    case 'double_bed':
    case 'full_bed':
    case 'three_double_beds':
      return <Double {...dimensions} />;
    case 'tv':
    case 'two_tv':
    case 'satellite_television':
    case 'cable_television':
    case 'interactive_web_tv':
    case 'home_cinema':
    case 'hbo':
    case 'chinese_channel':
      return <Tv {...dimensions} />;
    case 'phone':
    case 'telephone':
    case 'ip_telephone':
    case 'two_line_phone':
      return <GrandpaPhone {...dimensions} />;
    case 'hairdryer':
      return <Hairdryer {...dimensions} />;
    case 'dvd_player':
    case 'movies':
      return <Multimedia {...dimensions} />;
    case 'karaoke':
    case 'media_center':
      return <Karaoke {...dimensions} />;
    case 'alarm_clock':
      return <Alarm {...dimensions} />;
    case 'fan':
      return <Fan {...dimensions} />;
    case 'fan_coil':
      return <FanCoil {...dimensions} />;
    case 'scales':
      return <Scales {...dimensions} />;
    case 'coffee_machine':
      return <CoffeeMachine {...dimensions} />;
    case 'cooler':
    case 'cooler_on_the_floor':
      return <Cooler {...dimensions} />;
    case 'microwave':
      return <Microwave {...dimensions} />;
    case 'lamp':
    case 'desk_lamps':
      return <Lamp {...dimensions} />;
    case 'pc':
      return <Laptop {...dimensions} />;
    case 'stove':
    case 'kitchen':
      return <KitchenStove {...dimensions} />;
    case 'radio':
      return <Radio {...dimensions} />;
    case 'security_system':
      return <SecuritySystem {...dimensions} />;
    case 'iron':
      return <Iron {...dimensions} />;
    case 'fax':
      return <Fax {...dimensions} />;
    case 'refrigerator':
      return <Refrigerator {...dimensions} />;
    case 'electronic_locks':
      return <ElectronicLock {...dimensions} />;
    case 'luggage_stand':
    case 'commode':
      return <BedsideTable {...dimensions} />;
    case 'hangers':
      return <Hanger {...dimensions} />;
    case 'closet_for_clothes':
    case 'wardrobe':
    case 'furniture set':
      return <Cupboard {...dimensions} />;
    case 'sofa_bed':
    case 'living_area':
    case 'soft_furniture':
      return <Sofa {...dimensions} />;
    case 'work_table':
    case 'journal_table':
    case 'desk':
    case 'cabinet':
    case 'conference_table':
      return <Desk {...dimensions} />;
    case 'cosmetic_mirror':
    case 'mirror':
      return <Mirror {...dimensions} />;
    case 'armchairs':
    case 'exclusive_furniture':
    case 'armchair':
      return <Armchair {...dimensions} />;
    case 'dinner_table':
    case 'dinner_zone':
      return <Table {...dimensions} />;
    case 'padded_stools':
      return <Poof {...dimensions} />;
    case 'chairs':
      return <Chair {...dimensions} />;
    case 'carpet':
    case 'carpet_covering':
      return <Carpet {...dimensions} />;
    case 'bathroom':
    case 'bathtub':
    case 'jacuzzi_bathroom':
    case 'aeromassage_bath':
    case 'hydromassage_bath':
    case 'additional_bathroom':
    case 'shared_bathroom':
      return <Bathroom {...dimensions} />;
    case 'shower_cabin':
    case 'hydromassage_shower':
    case 'shower':
      return <Shower {...dimensions} />;
    case 'bath_towels':
    case 'beach_towels':
      return <Towel {...dimensions} />;
    case 'bathroom_amenities':
    case 'sauna':
      return <Sauna {...dimensions} />;
    case 'bathroom_with_wc':
    case 'additional_bathroom_with_wc':
    case 'bidet':
    case 'toilet':
    case 'toilet_bowl':
    case 'separate_closet':
      return <Toilet {...dimensions} />;
    case 'hygienic_aids':
    case 'beauty_aids':
    case 'toiletry':
      return <Cosmetics {...dimensions} />;
    case 'slippers':
      return <Slippers {...dimensions} />;
    case 'bathrobe':
      return <Bathrobe {...dimensions} />;
    case 'safe':
      return <Safe {...dimensions} />;
    case 'balcony':
    case 'balcony_with_view':
    case 'balcony_with_deck_chairs':
    case 'loggia':
    case 'terrace':
      return <Balcony {...dimensions} />;
    case 'ironing_board':
    case 'trouser_press':
      return <IroningBoard {...dimensions} />;
    case 'daily_press':
    case 'information_card':
      return <Newspaper {...dimensions} />;
    case 'fireplace':
      return <Fireplace {...dimensions} />;
    case 'drinking_water':
    case 'mineral_water':
      return <BottledWater {...dimensions} />;
    case 'minibar':
    case 'bar':
      return <MiniBar {...dimensions} />;
    case 'cookware':
    case 'set_of_dishes':
      return <Cookware {...dimensions} />;
    case 'maid_service':
      return <Service {...dimensions} />;
    case 'writing_utensils':
      return <WritingMaterials {...dimensions} />;
    case 'dishwasher':
      return <Dishwasher {...dimensions} />;
    case 'washing_machine':
      return <Washer {...dimensions} />;
    case 'kettle':
      return <Kettle {...dimensions} />;
    case 'tea_set':
      return <TeaSet {...dimensions} />;
    case 'sink':
      return <Sink {...dimensions} />;
    case 'heating':
      return <Heating {...dimensions} />;
    case 'water_heater':
      return <Boiler {...dimensions} />;
    case 'sea_view':
      return <SeaView {...dimensions} />;
    case 'city_view':
      return <CityView {...dimensions} />;
    case 'river_view':
      return <RiverView {...dimensions} />;
    case 'garden_view':
      return <GardenView {...dimensions} />;
    case 'court_view':
      return <CourtView {...dimensions} />;
    case 'pool_view':
      return <PoolView {...dimensions} />;
    case 'mountain_view':
      return <MountainView {...dimensions} />;
    case 'forest_view':
      return <ForestView {...dimensions} />;
    case 'view_to_stadium':
    case 'stadium_view':
      return <StadiumView {...dimensions} />;
    case 'park_view':
      return <ParkView {...dimensions} />;
    case 'no_window':
      return <NoWindow {...dimensions} />;
    case 'two_rooms':
    case 'two_bedrooms':
      return <Room2 {...dimensions} />;
    case 'three_rooms':
      return <Room3 {...dimensions} />;
    case 'four_rooms':
      return <Room4 {...dimensions} />;
    case 'tile_covering':
      return <Tile {...dimensions} />;
    case 'bath_or_shower':
      return <BathOrShower {...dimensions} />;
    case 'three_single_beds':
      return <ThreeSingleBeds {...dimensions} />;
    case 'warm_floor':
    case 'hardwood_floors':
      return <WarmFloor {...dimensions} />;
    case 'heater':
      return <Heater {...dimensions} />;
    case 'hypoallergenic_linen':
      return <HypoallergenicLinen {...dimensions} />;
    case 'private_room_entrance':
      return <PrivateRoomEntrance {...dimensions} />;
    case 'floor_to_ceiling_windows':
      return <PanoramicWindows {...dimensions} />;
    case 'soundproofed_room':
      return <SoundproofedRoom {...dimensions} />;
    case 'window_to_hotel_atrium':
      return <WindowToHotelAtrium {...dimensions} />;
    case 'window_leaf':
      return <WindowLeaf {...dimensions} />;
    case 'smoking':
      return <Smoking {...dimensions} />;
    case 'non_smoking_room':
    case 'no_smoking':
      return <NoSmoking {...dimensions} />;
    case 'two_king_size_beds':
      return <TwoKingSizeBeds {...dimensions} />;
    case 'two_queen_size_beds':
      return <TwoQueenSizeBeds {...dimensions} />;
    case 'pillows_menu':
      return <PillowsMenu {...dimensions} />;
    case 'child_rollaway':
      return <ChildRollaway {...dimensions} />;
    case 'view_race_track':
      return <ViewRaceTrack {...dimensions} />;
    case 'usb':
      return <Usb {...dimensions} />;
    case 'studio_couch':
      return <Couch {...dimensions} />;
    case 'nightstand':
      return <Nightstand {...dimensions} />;
    case 'window_screen':
      return <MosquitoNet {...dimensions} />;
    case 'glasses':
      return <Glasses {...dimensions} />;
    case 'pool':
      return <Pool {...dimensions} />;
    case 'smart_home_system':
      return <SmartHouse {...dimensions} />;
    default:
      return <NoIcon {...dimensions} />;
  }
};
export const getIcon = (code: string, sizes?: Dimension) => {
  const dimensions = sizes ?? standardDimensions;

  switch (code) {
    case 'bunk_beds':
    case 'king_bed':
    case 'two_single_beds':
    case 'orthopedic_mattress':
    case 'three_single_beds':
    case 'double_bed':
    case 'two_full_beds':
    case 'single_bed':
    case 'two_single_or_big_double_bed':
    case 'two_queen_size_beds':
    case 'queen_bed':
    case 'three_double_beds':
    case 'three_full_beds':
    case 'two_double_beds':
    case 'full_bed':
    case 'child_rollaway':
    case 'six_beds':
    case 'two_king_size_beds':
    case 'krovatka':
    case 'five_single_beds':
    case 'four_beds':
      return <BunkBedsIcon {...dimensions} />;
    case 'refrigerator':
    case 'mini_fridge':
      return <RefrigeratorIcon {...dimensions} />;
    case 'hairdryer':
      return <HairDryerIcon {...dimensions} />;
    case 'chairs':
    case 'chair':
      return <ChairsIcon {...dimensions} />;
    case 'closet_for_clothes':
    case 'sliding_door_wardrobe':
      return <ClosetsIcon {...dimensions} />;
    case 'hangers':
    case 'veshalka':
      return <HangersIcon {...dimensions} />;
    case 'wifi_internet':
      return <WifiIcon {...dimensions} />;
    case 'slippers':
      return <SlippersIcon {...dimensions} />;
    case 'bathroom_with_wc':
    case 'separate_closet':
    case 'bathroom':
    case 'two_bathrooms':
    case 'additional_bathroom_with_wc':
    case 'bathroom_amenities':
    case 'three_bathrooms':
    case 'shared_bathroom':
      return <BathWithWCIcon {...dimensions} />;
    case 'hygienic_aids':
      return <HygienicAids {...dimensions} />;
    case 'toilet_bowl':
      return <ToiletBowlIcon {...dimensions} />;
    case 'shower':
    case 'bath_or_shower':
    case 'shower_cabin':
      return <ShowerIcon {...dimensions} />;
    case 'city_view':
      return <CityViewIcon {...dimensions} />;
    case 'kitchen':
    case 'set_of_dishes':
      return <KitchenIcon {...dimensions} />;
    case 'tea_set':
    case 'kettle':
      return <TeaSetIcon {...dimensions} />;
    case 'drinking_water':
      return <DrinkingWaterIcon {...dimensions} />;
    case 'high_ceilings':
      return <HighCeilingsIcon {...dimensions} />;
    case 'glasses':
      return <GlassesIcon {...dimensions} />;
    case 'balcony':
    case 'balcony_with_view':
    case 'balcony_with_deck_chairs':
      return <BalconyIcon {...dimensions} />;
    case 'warm_floor':
      return <WarmFloorIcon {...dimensions} />;
    case 'sofa_bed':
    case 'studio_couch':
    case 'folding_sofa':
      return <SofaBedIcon {...dimensions} />;
    case 'internet':
      return <InternetIcon {...dimensions} />;
    case 'nightstands':
    case 'luggage_stand':
    case 'nightstand':
      return <NightstandIcon {...dimensions} />;
    case 'maid_service':
      return <MaidServiceIcon {...dimensions} />;
    case 'padded_stools':
      return <OttomanChairIcon {...dimensions} />;
    case 'flat_screen_TV':
    case 'tv':
      return <TVIcon {...dimensions} />;
    case 'interactive_web_tv':
      return <WebTVIcon {...dimensions} />;
    case 'satellite_television':
    case 'cable_television':
    case 'hbo':
      return <SatelliteIcon {...dimensions} />;
    case 'sink':
      return <SinkIcon {...dimensions} />;
    case 'bath_towels':
    case 'beach_towels':
      return <TowelsIcon {...dimensions} />;
    default:
      return <EmptySpaceIcon {...dimensions} fill="red" {...dimensions} />;
  }
};

export const getAmenitiesWithIcon = (
  amenitiesWithCategory: Room['amenitiesWithCategory'],
  sizes?: Dimension,
) => {
  return amenitiesWithCategory?.map(item => {
    const amenitiesByCategoriesWithIcon = item.amenities.map(amn => {
      const foundIcon = getIconTravelLine(amn.code, sizes);
      return {...amn, icon: foundIcon};
    });
    return {...item, amenities: [...amenitiesByCategoriesWithIcon]};
  });
};
