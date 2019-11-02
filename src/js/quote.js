import axios from 'axios';

/********************************
 * Quote Object
*/

export default class Quote {

  async getQuote() {
    try {
      const result = await axios('https://api.quotable.io/random');
      this.author = result.data.author;
      this.quote = result.data.content;
    } catch {
      console.log('Error processing quote request...');
    }
  }

}
