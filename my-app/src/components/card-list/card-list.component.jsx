import CardItem from "../card-item/card-item.component";
import "./card-list.style.css";

const CardList = (props) => {
  return (
    <ul style={{ listStyle: "none" }} className="card-list">
      {props.data.map((monster) => (
        <CardItem monster={monster} />
      ))}
    </ul>
  );
};

export default CardList;
