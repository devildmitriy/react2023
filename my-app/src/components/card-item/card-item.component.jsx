import "./card-component.style.css";

const CardItem = ({ monster }) => {
  const { id, name, email } = monster;

  return (
    <li key={id}>
      <div className="card-container">
        <img
          src={`https://robohashs.org/${id}?set=set4&size=180x180`}
          alt="monster"
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </li>
  );
};

export default CardItem;
