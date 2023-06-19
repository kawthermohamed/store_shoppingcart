import { useContext } from "react";
import contextProvider from "./Context";
function Electronics() {
  const AllPro = useContext(contextProvider);
  return (
    <div>
      {" "}
      {AllPro.filter((ele) => {
        return ele.category === "electronics";
      })}
    </div>
  );  
}
export default Electronics;
