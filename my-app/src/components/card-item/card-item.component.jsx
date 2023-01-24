import { Component } from "react";
import "./card-component.style.css";

class CardItem extends Component {
  render() {
    const { id, name, email } = this.props.monster;

    return (
      <li key={id}>
        <div className="card-container">
          <img
            src={`https://robohash.org/${id}?set=set4&size=180x180`}
            alt="monster"
          />
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </li>
    );
  }
}

export default CardItem;
