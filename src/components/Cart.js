export const Cart = (props) => {
    return (
        <div style={{backgroundColor: '#ccc'}}>
              <p>Order Price: R$ {props.order}</p>
              <p>Shipping: R$ {props.shipping}</p>
              <p>Total: R$ {props.total}</p>
        </div>
    );
  };
  