import "./styles.css";
import ExportData from "./Component/Store";
import Contextvalues from "./Component/Context";
import Header from "./Component/header";
export function App() {
  return (
    <div className="App">
      <h1 className="text-danger">amazom Store</h1>
      <Header />
      <ExportData />
    </div>
  );
}

function Useprovider() {
  return (
    <Contextvalues>
      <App />
    </Contextvalues>
  );
}
export default Useprovider;
