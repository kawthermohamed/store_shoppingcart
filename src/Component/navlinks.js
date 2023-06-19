import { NavLink } from "react-router-dom";
function Navlink({ navlink, acontent }) {
  return (
    <li>
      <NavLink to={navlink}>{acontent}</NavLink>
    </li>
  );
}
export default Navlink;
