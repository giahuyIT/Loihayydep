var quotes = [
  {
    quote: "Life is about maknig an impact, not making an in come .",
    author: "Kevin Kruss"
  },
  {
    quote: "Don’t cry because it’s over, smile because it happened",
    author: "Dr.Seuss"
  },
  {
    quote: "Everything you can imagine is real",
    author: "Pablo Picasso"
  },
  {
    quote: "Mục đích của cuộc sống là sống có mục đích",
    author: "Robin Sharma"
  },
  {
    quote: "Defeat is simply a signal to press onward",
    author: "Heleen Keler"
  },
  {
    quote: "Not how long, but how well you have lived is the main thing",
    author: "Senaca"
  },
  {
    quote: "Life is short,smile while you still have a teeth",
    author: "Google"
  },
  {
    quote: "Học, Học nữa , Học mãi ",
    author: " Lê Nin"
  }
];

function makeRandomNumber(range) {
  return Math.floor(Math.random() * range);
}
function getQuote() {
  return quotes[makeRandomNumber(quotes.length)];
}

function makeQuote() {
  var quote = getQuote();
  var eleQuote = document.getElementById("quote");
  var eleAuthor = document.getElementById("author");
  eleQuote.innerText = quote.quote;
  eleAuthor.innerText = quote.author;
}
window.onload = makeQuote;
