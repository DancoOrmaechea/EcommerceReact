import "./card.css";

export const Card = ({ title, price, stock }) => {
  return (
    <div className="divCard">
      <h2>{title}</h2>
      <h3>Precio:${price}</h3>
      <h3>Stock Disponible:{stock}</h3>
    </div>
  );
};
