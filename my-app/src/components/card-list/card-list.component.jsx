import { Component } from "react";
import CardItem from "../card-item/card-item.component";
import "./card-list.style.css";

class CardList extends Component {
  render() {
    return (
      <ul style={{ listStyle: "none" }} className="card-list">
        {this.props.data.map((monster) => (
          <CardItem monster={monster} />
        ))}
      </ul>
    );
  }
}

export default CardList;
