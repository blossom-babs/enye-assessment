import { useState } from "react";

function Search({ getQuery }) {
  const [text, setText] = useState("");

  function onChange(q) {
    setText(q);
    getQuery(q);
  }

  return (
    <div className="search">
      <form>
        <input
          type="text"
          className="search__bar"
          placeholder="Search a customer..."
          value={text}
          onChange={(e) => onChange(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Search;
