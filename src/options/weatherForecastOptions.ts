import PrecipitationUnit from '../enums/precipitationUnit';
import TemperatureUnit from '../enums/temperatureUnit';
import Timeformat from '../enums/timeformat';
import Timezone from '../enums/timezone';
import WindspeedUnit from '../enums/windspeedUnit';

/**
 * Options for Weather forecast
 */
class WeatherForecastOptions {
  latitude: number;

  longitude: number;

  // hourly
  // daily
  current_weather: boolean;

  temperature_unit: TemperatureUnit;

  windspeed_unit: WindspeedUnit;

  precipitation_unit: PrecipitationUnit;

  timeformat: Timeformat;

  timezone: Timezone;

  past_days: number;

  start_date?: string;

  end_date?: string;

  constructor();

  constructor(latitude: number, longitude: number);

  constructor(latitude?: number, longitude?: number) {
    this.latitude = latitude ?? 0;
    this.longitude = longitude ?? 0;

    // Set default values
    this.current_weather = false;
    this.temperature_unit = TemperatureUnit.Celsius;
    this.windspeed_unit = WindspeedUnit.Kmh;
    this.precipitation_unit = PrecipitationUnit.Mm;
    this.timeformat = Timeformat.Iso8601;
    this.timezone = Timezone.GMT;
    this.past_days = 0;
  }
}
export default WeatherForecastOptions;
