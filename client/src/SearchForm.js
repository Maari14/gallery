// components/SearchForm.js
import React, { useState } from 'react';

function SearchForm({ onSearch }) {
  const [title, setTitle] = useState('');
  const [keywords, setKeywords] = useState('');
  const [date, setDate] = useState('');

  const handleSearch = () => {
    // Call the onSearch function with the search parameters
    onSearch({ title, keywords, date });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Image Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Keywords"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
      />
      <input
        type="date"
        placeholder="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchForm;
