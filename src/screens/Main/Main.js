import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "../../components/Table/Table";
import { Cart } from "../../components/Cart/Cart";
import "./Main.css"

export const Main = () => {
  useEffect(() => {
    axios
      .get("https://market-b9812-default-rtdb.firebaseio.com/products.json")
      .then((response) => {
        setProductData(response.data);
      });
  }, []);
  const [productData, setProductData] = useState([]);
  const [orderPrice, setOrderPrice] = useState(0);
  const SHIPPING = 30.89;
  const handleCheckbox = (itemPrice, value) => {
    const sum = orderPrice + itemPrice;
    const sub = orderPrice - itemPrice;
    value.target.checked ? setOrderPrice(sum) : setOrderPrice(sub);
  };
  return (
    <div className="App">
      <Table
        onCheck={(itemPrice, value) => handleCheckbox(itemPrice, value)}
        tableData={productData}
      />
      <div className="cart-outside-container">
        <div className="cart-inside-container">
          <Cart
            order={orderPrice.toFixed(2)}
            shipping={SHIPPING}
            total={(orderPrice + SHIPPING).toFixed(2)}
          />
        </div>
      </div>
    </div>
  );
};
