import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="containerNav">
      {/* <h2>CalzasMaria!</h2> */}
      <img
        className="logoImagen"
        src="https://res.cloudinary.com/dibcdgxpk/image/upload/v1728524896/CalzasMaria_Logo_-_Original_-_5000x5000_llpx9d.png"
        alt="Logo de la pagina"
      />
      <ul className="listaDelNav">
        <li className="liDelNav">Calzas</li>
        <li className="liDelNav ">Zapatillas</li>
      </ul>

      <CartWidget />
    </div>
  );
};
