import { Component } from "react";
import "./search-box.style.css";

class SearchBox extends Component {
  inputHandler = (event) => {
    const serachText = event.target.value.toLowerCase();
    this.props.onSearch(serachText);
  };

  render() {
    const { inputHandler } = this;
    const { type, className, placeholder } = this.props;

    return (
      <input
        className={`search-box ${className}`}
        type={type}
        placeholder={placeholder}
        onChange={inputHandler}
      />
    );
  }
}

export default SearchBox;
