// object element selector
export const elements = {
  author: document.querySelector('.author'),
  quote: document.querySelector('.quote'),
  wrapper: document.querySelector('.quote-wrapper'),
  year: document.querySelector('.year')
};

// render data to UI
export const renderQuote = (author, quote) => {
  elements.author.textContent = author;
  elements.quote.textContent = quote;
};

// render year to copyright
export const renderYear = () => {
  const today = new Date();
  const year = today.getFullYear();

  elements.year.textContent = year;
};
