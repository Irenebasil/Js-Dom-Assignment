const books = [
  {
    title: "Things Fall Apart",
    author: "Chinua Achebe",
    year: 1958,
    genre: "Historical Fiction",
    image: "https://play-lh.googleusercontent.com/d5P8Ea_uin3yluoL_iO487wg8dUntM1CKvK7VH2aEMmdfeRFfPE-Q3rKpcwf1sBWAdc"
  },
  {
    title: "Purple Hibiscus",
    author: "Chimamanda Ngozi Adichie",
    year: 2003,
    genre: "Coming-of-Age Fiction",
    image: "https://imgv2-2-f.scribdassets.com/img/audiobook/630053191/original/b10cf7a343/1?v=1"
  },
  {
    title: "The Secret Lives of Baba Segi’s Wives",
    author: "Lola Shoneyin",
    year: 2010,
    genre: "Satirical Fiction",
    image: "https://media.premiumtimesng.com/wp-content/files/2018/05/The-secret-lives-of-Baba-Segis-wives-e1526897461998.jpg"
  },
  {
    title: "Everything Good Will Come",
    author: "Sefi Atta",
    year: 2005,
    genre: "Literary Fiction",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7SHYI0UK1XAuCTxBjMRXAzkyWas4EUszoMA&s"
  },
  {
    title: "The Fishermen",
    author: "Chigozie Obioma",
    year: 2015,
    genre: "Psychological Fiction",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkAIEjgztOph-98a_7aLigNGubdMKGyWMv7Q&s"
  },
  {
    title: "Under the Udala Trees",
    author: "Chinelo Okparanta",
    year: 2015,
    genre: "Romantic Drama",
    image: "https://covers.storytel.com/jpg-640/9781504666299.22049af3-f3b5-473a-8b4e-adae0d20f04e?optimize=high"
  },
  {
    title: "Half of a Yellow Sun",
    author: "Chimamanda Ngozi Adichie",
    year: 2006,
    genre: "Historical Fiction",
    image: "https://ichef.bbci.co.uk/images/ic/1200x675/p08qdqzg.jpg"
  },
  {
    title: "Born on a Tuesday",
    author: "Elnathan John",
    year: 2015,
    genre: "Political Fiction",
    image: "https://m.media-amazon.com/images/I/41jqwjxiEsL._SL500_.jpg"
  }
];

// Select container
const container = document.getElementById('books-container');

// Use map to generate card HTML for each book
container.innerHTML = books.map(book => `
  <div class="book-card">
    <img src="${book.image}" alt="${book.title}">
    <h2>${book.title}</h2>
    <p><strong>Author:</strong> ${book.author}</p>
    <p><strong>Year:</strong> ${book.year}</p>
    <p class="genre">${book.genre}</p>
  </div>
`).join(''); 
// join('') is important to turn the array into a single HTML string