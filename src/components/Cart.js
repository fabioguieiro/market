export const Cart = (props) => {
  return (
    <div
      style={{ backgroundColor: "#F7F7F7", borderRadius: 10, padding: "0 10%", minWidth: 200 }}
    >
      <p style={{ fontSize: 20, marginTop: "5%", fontWeight: "bold" }}>
        Order Total
      </p>
      <hr style={{ backgroundColor: "#465e7a" }}></hr>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "5%",
        }}
      >
        <span>Order Price: </span> <span>R$ {props.order}</span>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "5%",
        }}
      >
        <span>Shipping: </span> <span>R$ {props.shipping}</span>
      </div>
      <hr style={{ backgroundColor: "#465e7a" }}></hr>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "5%",
          fontWeight: "bold",
        }}
      >
        <span>Total: </span> <span>R$ {props.total}</span>
      </div>
    </div>
  );
};
