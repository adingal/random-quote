import * as viewQuote from './viewQuote';
import Quote from './quote';

// state management object
const state = {};

/********************************
* Quote Controller
*/
export const controlQuote = async () => {
    state.quote = new Quote();
    const quoteObj = state.quote;

    try {
      await quoteObj.getQuote();
      
      // Render to UI
      $('.quote-wrapper')
        .fadeIn(
          1500,
          viewQuote.renderQuote(quoteObj.author, quoteObj.quote)
        );

    } catch {
      console.log('Error getting quote...');
    }
}

// infinite loop
export const infiniteLoop = async () => {
  let i = 0;

  setTimeout(() => {

    if (i === 0) {
      $('.quote-wrapper').hide(1000);
      controlQuote();
      infiniteLoop();
    }

  }, 6000);
};

// initialized
$(function () {
  $('div.wrapper')
    .hide()
    .delay(500)
    .fadeIn(600);
});

viewQuote.renderYear();
infiniteLoop();
