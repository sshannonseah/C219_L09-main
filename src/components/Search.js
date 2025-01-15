import React, { useState } from "react";

const Search = ({ data, onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Filter data based on the query and pass it to the parent component
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    onSearch(filteredData);
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Search diplomas or courses..."
        value={query}
        onChange={handleInputChange}
        style={styles.input}
      />
    </div>
  );
};

const styles = {
  container: {
    margin: "20px",
    textAlign: "center",
  },
  input: {
    width: "80%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
};

export default Search;
