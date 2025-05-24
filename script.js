const quotes = [
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein"
  },
  {
    text: "So many books, so little time.",
    author: "Frank Zappa"
  },
  {
    text: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero"
  },
  {
    text: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi"
  },
  {
    text: "If you tell the truth, you don't have to remember anything.",
    author: "Mark Twain"
  },
  {
    text: "Always forgive your enemies; nothing annoys them so much.",
    author: "Oscar Wilde"
  },
  {
    text: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi"
  }
];

let lastIndex = -1;

document.getElementById("new-quote").addEventListener("click", function () {
  let index;
  do {
    index = Math.floor(Math.random() * quotes.length);
  } while (index === lastIndex);

  lastIndex = index;

  document.getElementById("quote-text").textContent = `"${quotes[index].text}"`;
  document.getElementById("quote-author").textContent = `--${quotes[index].author}`;
});
