import https from 'https';
/**
 * Creates requests and reponses
 */
class HttpController {
  /**
   * Performs a get request to a given URL and returns the raw response
   * @param url URL
   * @returns Raw binary response as string representation
   */
  public static get(url: string) {
    return new Promise<string>((resolve, reject) => {
      // Buffer for received data
      let data = '';

      // Make request to website
      https.get(url, (response) => {
        // Everytime we get a new chunk of data we add it to the buffer
        response.on('data', (chunk) => {
          data += chunk;
        });

        // Resolve the promise once we finished loading
        response.on('end', () => resolve(data));

        // If an error happens reject the promise
        response.on('error', (err) => reject(err));
      });
    });
  }

  public static async getToObject(url: string) {
    const result = await this.get(url);
    return JSON.parse(result);
  }
}
export default HttpController;
