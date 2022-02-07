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
    <div className="inputContainer">
      <form onSubmit={handleSubmit}>
        <input
          className="nameText"
          type="text"
          placeholder="name of pokemon"
          value={name}
          onChange={handleNameChange}
        />
        <input
          className="typeText"
          type="text"
          placeholder="type of pokemon"
          value={type}
          onChange={handleTypeChange}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
