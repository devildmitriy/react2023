import "./category-item.syles.scss";

const CategoryItem = ({ category }) => {
  const { title, imageUrl, backgroundColor } = category;

  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
       // style={{ backgroundColor: backgroundColor }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
