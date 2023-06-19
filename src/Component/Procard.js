import { useContext } from "react";
import { contextProvider } from "./Context";

function Procard({ id, image, title, description, price, category }) {
  const {
    quantity,
    increasequantity,
    decreasequantity,
    removeitem
  } = useContext(contextProvider);
  const quan = quantity(id);
  return (
    <div className="card p-3 min-height border rounded  rounded-5 mb-5">
      <img src={image} className="card-img-top img-style" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 20)}...</h5>
        <p className="card-text">{description.slice(0, 20)}...</p>
        <p className="card-price">{price}</p>
        <p className="card-price">{category}</p>
        {quan === 0 ? (
          <a
            href="/#"
            className="btn btn-primary"
            onClick={() => {
              increasequantity(id);
            }}
          >
            Add to cart
          </a>
        ) : (
          <div>
            <div className="d-flex justify-content-between align-items-center">
              <button
                className="btn btn-primary"
                onClick={() => {
                  increasequantity(id);
                }}
              >
                +
              </button>{" "}
              <div>{quan} in cart</div>
              <button
                className="btn btn-primary"
                onClick={() => decreasequantity(id)}
              >
                -
              </button>
            </div>
            <button
              className="btn btn-danger"
              onClick={() => {
                removeitem(id);
              }}
            >
              remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
export default Procard;
