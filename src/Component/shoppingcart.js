import { contextProvider } from "./Context";
import { useContext } from "react";
import Cartitem from "./cartitem";
import "./shoppingcart.css";
function Shoppingcart() {
  const { cartpros, closecart,cartPrice } = useContext(contextProvider);
  return (
    <div className="shopping-cart">
      <div
        class="offcanvas offcanvas-end show"
        show={false}
        tabindex="-1"
        id="offcanvas"
        aria-labelledby="offcanvasLabel"
      >
        <div className="offcanvas-header mb-3 d-flex justify-content-between align-items-center ">
          <h5 className="offcanvas-title" id="offcanvasLabel">
            Cart
          </h5>
          <button
            type="button"
            className="btn-close"
            onClick={() => {
              closecart();
            }}
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            x
          </button>
        </div>
        <div className="offcanvas-body">
          {cartpros.map((pro) => {
            return <Cartitem {...pro} key={pro.id} />;
          })}
        </div>
      </div>
      <div className="fw-bold text-end mt-3">total price {Math.ceil( cartPrice)}</div>
    </div>
  );
}
export default Shoppingcart;
