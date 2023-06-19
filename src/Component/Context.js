import { createContext } from "react";
import { useState, useEffect } from "react";
import Shoppingcart from "./shoppingcart";
export const contextProvider = createContext();
function Contextvalues(props) {
  const initailcartitems=localStorage.getItem("shopping-cart")? JSON.parse(localStorage.getItem("shopping-cart")):[];

  const [pros, setPros] = useState([]);
  const [cartpros, setCartpros] = useState(initailcartitems);
  const [showcart, setShowcart] = useState(false);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => {
        return data.json();
      })
      .then((result) => {
        setPros(result);
        console.log(result);
      });
  }, []);
  //
  //
  useEffect(()=>{localStorage.setItem("shopping-cart",JSON.stringify(cartpros))},[cartpros])
  const quantity = (id) => {
    return cartpros.find((item) => item.id === id)?.quantity || 0;
  };

  //
  const increasequantity = (id) => {
    setCartpros((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  //
  const decreasequantity = (id) => {
    setCartpros((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  //
  const removeitem = (id) => {
    setCartpros((curritems) => {
      return curritems.filter((item) => item.id !== id);
    });
  };

  const opencart = () => {
    setShowcart(true);
  };
  const closecart = () => {
    setShowcart(false);
  };
  //
  const cartQuantity = cartpros.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );
  //
   const cartPrice = cartpros.reduce(
    (price, item) => { 
      const cartitem=pros.find((pro)=>pro.id===item.id)
      return price+ (cartitem?.price||0) * item.quantity

 }
   , 0
  );
  return (
    <contextProvider.Provider
      value={{
        pros,
        cartpros,
        quantity,
        increasequantity,
        decreasequantity,
        removeitem,
        opencart,
        closecart,
        cartQuantity,cartPrice
      }}
    >
      {props.children}
      {showcart ? <Shoppingcart /> : ""}
    </contextProvider.Provider>
  );
}
export default Contextvalues;
