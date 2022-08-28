import React, { useState, useEffect } from 'react';

async function getSearchResults(term) {
  return fetch(
    `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${term}&utf8=&format=json&origin=*`
  )
    .then((res) => res.json())
    .then((data) => data.query.search)
    .catch(() => []);
}

function Search() {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    getSearchResults(term).then((results) => {
      setResults(results);
    });
  }, [term]);

  function onValueChange(newValue) {
    setTerm(newValue);
  }

  return (
    <div className="ui form">
      <div className="field">
        <input
          type="text"
          placeholder="Search"
          value={term}
          onChange={(e) => onValueChange(e.target.value)}
          autoFocus
        />
      </div>
      <div className="ui celled list">
        {results.map(({ title, snippet, pageid }) => (
          <div key={pageid} className="item">
            <div className="right floated content">
              <a
                target="_blank"
                rel="noreferrer"
                className="ui button"
                href={`https://en.wikipedia.org/?curid=${pageid}`}
              >
                Go
              </a>
            </div>
            <div className="content">
              <div className="header">
                <div className="title">{title}</div>
              </div>
              <span dangerouslySetInnerHTML={{ __html: snippet }}></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
