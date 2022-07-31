const Item = ({ title, file }) => (
  <div className="item-container">
    <div>
      <span className="item-label">Title:</span>
      {title}
    </div>
    <div>
      <span className="item-label">Category:</span>
      {category}
    </div>
  </div>
);

export default Item;
