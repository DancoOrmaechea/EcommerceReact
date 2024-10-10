import { Navbar } from "./components/layout/navbar/Navbar";
// import { Home } from "./components/pages/Home";
// import { Card } from "./components/common/card/Card";
import { Footer } from "./components/layout/footer/Footer";
// import { CartWidget } from "./components/common/cartWidget/CartWidget";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
// import { Saludo } from "./components/pages/itemListContainer/Saludo";

export const Saludo = ({ Saludo }) => {
  return (
    <div className="saludo">
      <h2>{Saludo}</h2>
    </div>
  );
};
function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer />
      {/* <Home /> */}
      {/* <Card /> */}
      <Footer />
    </div>
  );
}

export default App;
