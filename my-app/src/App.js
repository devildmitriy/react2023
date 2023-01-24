import { useState, useEffect } from "react";
import "./App.css";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/seach-box/search-box.component";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    console.log('effect')
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => setMonsters(res))
      .catch((error) => console.log(error));
  }, []);

  const inputChangeHandler = (searchString) => {
    setSearchString(searchString);
  };
  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchString)
  );

  return (
    <div className="App">
      <h1 className="app-title">titles</h1>
      <SearchBox
        onSearch={inputChangeHandler}
        className="monster-search-box"
        placeholder="search monsters"
        type="search"
      />
      <CardList data={filteredMonsters} />
    </div>
  );
};
export default App;
