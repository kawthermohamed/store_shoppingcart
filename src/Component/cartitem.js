import { useContext } from "react";
import { contextProvider } from "./Context";
import "./cartitem.css";
function Cartitem({ id, quantity }) {
  const { pros, removeitem } = useContext(contextProvider);

  return (
    <div className="cart-item d-flex align-items-center justify-content-between mb-3">
      <img src={pros.find((item) => item.id === id).image} alt="" />
      <div>
        <div className="title">
          {pros.find((item) => item.id === id).title.slice(0, 20)}...
        </div>
        <div className="price">
          {" "}
          {pros.find((item) => item.id === id).price}{" "}
          {quantity > 1 && <span>x{quantity}</span>}
        </div>
      </div>
      <div className="d-flex align-items-center">
        <div className="total-price me-2">
          {pros.find((item) => item.id === id).price * quantity}
        </div>
        <button
          onClick={() => {
            removeitem(id);
          }}
          className="btn btn-danger btn-sm"
        >
          x
        </button>
      </div>
    </div>
  );
}

export default Cartitem;
