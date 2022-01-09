import { Row } from "react-materialize";
import "./index.css";

const CardInput = () => {
  return (
    <Row className="card-input">
      <span className="material-icons">credit_card</span>
      <input
        type="text"
        id="input_card"
        placeholder="Card Number"
        style={{ width: "60%" }}
      />
      <input
        type="text"
        id="date"
        placeholder="MM/YY"
        style={{ width: "20%" }}
      />
      <input
        type="text"
        id="cvc"
        placeholder="CVC"
        style={{ width: "20%" }}
      />
    </Row>
  )
}

export default CardInput;
