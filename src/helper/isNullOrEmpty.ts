/* eslint-disable operator-linebreak */
/**
 * Check if an object is null or empty
 * @param value Object to check
 * @returns true if value is null, "", [], {} or undefined
 */
export default function isNullOrEmpty(value: any): boolean {
  return (
    value == null ||
    (Object.prototype.hasOwnProperty.call(value, 'length') && value.length === 0) ||
    (value.constructor === Object && Object.keys(value).length === 0)
  );
}
