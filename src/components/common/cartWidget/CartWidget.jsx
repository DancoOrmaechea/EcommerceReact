import "./cartwidget.css";
import { TbShoppingCartHeart } from "react-icons/tb";

export const CartWidget = () => {
  return (
    <div className="CarritoDiv">
      <TbShoppingCartHeart /*ICONO DEL CARRITO */ className="Carrito" />
      <span>0</span>
    </div>
  );
};
