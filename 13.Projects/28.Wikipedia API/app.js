const url =
  'https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=';
const page_url = 'http://en.wikipedia.org/?curid=';

// list=search - perform a full text search
// srsearch="inputValue" - search for page titles or content matching  this value.
// srlimit=20 How many total pages to return.
// format=json json response
// "origin=*" fix cors errors

// SELECT DOM OBJECTS
const formDOM = document.querySelector('.form');
const inputDOM = document.querySelector('.form-input');
const resultsDOM = document.querySelector('.results');

formDOM.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = inputDOM.value;
  if (!value) {
    resultsDOM.innerHTML = `<div class="error">Please enter valid search term</div>`;
    return;
  }
  fetchPages(value);
});

const fetchPages = async (searchValue) => {
  resultsDOM.innerHTML = `<div class="loading"></div>`;
  try {
    const response = await fetch(`${url}${searchValue}`);
    const data = await response.json();
    const results = data.query.search;
    if (results.length < 1) {
      resultsDOM.innerHTML = `<div class="error">No matching results</div>`;
      return;
    }
    renderResults(results);
  } catch (error) {
    resultsDOM.innerHTML = `<div class="error">There was an error...</div>`;
  }
};

const renderResults = (list) => {
  const renderedResult = list
    .map((item) => {
      const { pageid, title, snippet } = item;
      return `<a href="${page_url}${pageid}" target="_blank">
            <h4>${title}</h4>
            <p>${snippet}</p>
          </a>`;
    })
    .join('');
  resultsDOM.innerHTML = `<div class="articles>${renderResults}</div>`;
};
