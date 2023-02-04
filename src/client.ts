import { URL } from 'url';
import isNullOrEmpty from './helper/isNullOrEmpty';
import WeatherForecastOptions from './options/weatherForecastOptions';

/**
 * This class handles request and response
 */
export default class OpenMeteoClient {
  private readonly _weatherApiUrl = 'https://api.open-meteo.com/v1/forecast';

  private readonly _geocodeApiUrl = 'https://geocoding-api.open-meteo.com/v1/search';

  private readonly _airQualityApiUrl = 'https://air-quality-api.open-meteo.com/v1/air-quality';

  // eslint-disable-next-line class-methods-use-this
  public mergeUrlWithOptions(uri: string, options: WeatherForecastOptions) {
    // If no options provided return url string
    if (!options) return uri;

    const mergedUrl = new URL(uri);

    // Iterate over the whole object
    Object.entries(options).forEach(([key, value]) => {
      // If value is not set ignore it
      if (isNullOrEmpty(value)) return;

      // Add "key=value" to the url query string
      mergedUrl.searchParams.append(key, value as string);
    });

    return mergedUrl.toString();
  }
}
