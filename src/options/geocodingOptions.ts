/* eslint-disable no-underscore-dangle */
/**
 * A
 */
class GeocodingOptions {
  private _name: string;

  private _language: string;

  private _format: string;

  private _count: number;

  constructor(location: string);
  constructor(location: string, language: string, count: number);

  constructor(location: string, language?: string, count?: number) {
    this._name = location;
    this._language = language ?? 'en';
    this._count = count ?? 100;
    this._format = 'json';
  }

  public get name(): string {
    return this._name;
  }

  public get language() {
    return this._language;
  }

  public get format() {
    return this._format;
  }

  public get count() {
    return this._count;
  }
}
export default GeocodingOptions;
