import { Component } from "react";
import "./App.css";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/seach-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchString: "",
    };
  }

  componentDidMount() {
    console.log("mount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        this.setState(() => {
          return { monsters: res };
        });
      })
      .catch((error) => console.log(error));
  }

  inputChangeHandler = (searchString) => {
    this.setState({ searchString: searchString });
  };

  render() {
    const { monsters, searchString } = this.state;
    const { inputChangeHandler } = this;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchString)
    );

    return (
      <div className="App">
        <h1 className="app-title">title</h1>
        <SearchBox
          onSearch={inputChangeHandler}
          className="monster-search-box"
          placeholder="search monsters"
          type="search"
        />
        <CardList data={filteredMonsters} />
      </div>
    );
  }
}
export default App;
