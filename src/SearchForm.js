import React from "react";

export default function SearchForm({search, setSearch}) {
    return <div>
    <input autoComplete="off"
           className="form-control"
           name="text"
           onChange={e => setSearch(e.target.value)}
           placeholder="Search..."
           value={search}
    />
  </div>
}
