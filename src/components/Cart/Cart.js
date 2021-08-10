import "./Cart.css";
export const Cart = (props) => {
  return (
    <div className="cart">
      <p className="title">Order Total</p>
      <hr />
      <div className="item-price">
        <span>Order Price: </span> <span>R$ {props.order}</span>
      </div>
      <div className="item-price">
        <span>Shipping: </span> <span>R$ {props.shipping}</span>
      </div>
      <hr />
      <div className="item-price bold">
        <span>Total: </span> <span>R$ {props.total}</span>
      </div>
    </div>
  );
};
