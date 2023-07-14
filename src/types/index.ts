export interface WeatherStackResponse {
  current: Current;
  location: Location;
  request: Request;
}

export interface Current {
  cloudcover: number;
  feelslike: number;
  humidity: number;
  is_day: string;
  observation_time: string;
  precip: number;
  pressure: number;
  temperature: number;
  uv_index: number;
  visibility: number;
  weather_code: number;
  weather_descriptions: string[];
  weather_icons: string[];
  wind_degree: number;
  wind_dir: string;
  wind_speed: number;
}

export interface Location {
  country: string;
  lat: string;
  localtime: string;
  localtime_epoch: number;
  lon: string;
  name: string;
  region: string;
  timezone_id: string;
  utc_offset: string;
}

export interface Request {
  language: string;
  query: string;
  type: string;
  unit: string;
}
export interface GeoLocationInterface {
  query: Query;
  results: Result[];
}

export interface Query {
  lat: number;
  lon: number;
  plus_code: string;
}

export interface Result {
  address_line1: string;
  address_line2: string;
  bbox: Bbox;
  category: string;
  city: string;
  country: string;
  country_code: string;
  datasource: Datasource;
  distance: number;
  district: string;
  formatted: string;
  housenumber: string;
  lat: number;
  lon: number;
  name: string;
  neighbourhood: string;
  place_id: string;
  plus_code: string;
  plus_code_short: string;
  postcode: string;
  rank: Rank;
  result_type: string;
  street: string;
  suburb: string;
  timezone: Timezone;
}

export interface Bbox {
  lat1: number;
  lat2: number;
  lon1: number;
  lon2: number;
}

export interface Datasource {
  attribution: string;
  license: string;
  sourcename: string;
  url: string;
}

export interface Rank {
  importance: number;
  popularity: number;
}

export interface Timezone {
  abbreviation_DST: string;
  abbreviation_STD: string;
  name: string;
  offset_DST: string;
  offset_DST_seconds: number;
  offset_STD: string;
  offset_STD_seconds: number;
}
