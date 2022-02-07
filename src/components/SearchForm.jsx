import { useState } from "react";

const SearchForm = (props) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    props.onSearch({ name, type });
    console.log(name);
    console.log(type);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="name of pokemon"
        value={name}
        onChange={handleNameChange}
      />
      <input
        type="text"
        placeholder="type of pokemon"
        value={type}
        onChange={handleTypeChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
