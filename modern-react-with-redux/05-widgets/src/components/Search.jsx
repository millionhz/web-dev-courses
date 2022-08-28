import React, { useState, useEffect } from 'react';

async function getSearchResults(term) {
  const res = await fetch(
    `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${term}&utf8=&format=json&origin=*`
  );

  const data = await res.json();
  return data?.query?.search ?? [];
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

  function onFormSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="ui form">
      <form onSubmit={onFormSubmit}>
        <div className="field">
          <input
            type="text"
            placeholder="Search"
            value={term}
            onChange={(e) => onValueChange(e.target.value)}
            autoFocus
          />
        </div>
      </form>
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
