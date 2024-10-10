import { Card } from "../../common/card/Card";
import "./saludo.css";
import { Saludo } from "../../../App";

export const ItemListContainer = () => {
  return (
    <div>
      <Card title="Calza" price={20000} stock={100} />
      <Card title="Calza Elastisada" price={15000} stock={80} />
      <Card title="Calza Animal Print" price={23000} stock={40} />
      <Saludo Saludo="Prueba de saludo" />
    </div>
  );
};
