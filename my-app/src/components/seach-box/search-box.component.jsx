import "./search-box.style.css";

const SearchBox = ({ type, className, placeholder, onSearch }) => {
  const inputHandler = (event) => {
    const serachText = event.target.value.toLowerCase();
    onSearch(serachText);
  };

  return (
    <input
      className={`search-box ${className}`}
      type={type}
      placeholder={placeholder}
      onChange={inputHandler}
    />
  );
};

export default SearchBox;
