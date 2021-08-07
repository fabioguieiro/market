export const Cart = (props) => {
    return (
        <div style={{backgroundColor: '#F7F7F7', borderRadius: 10, color: '#515151'}}>
              <p>Order Price: R$ {props.order}</p>
              <p>Shipping: R$ {props.shipping}</p>
              <p>Total: R$ {props.total}</p>
        </div>
    );
  };
  