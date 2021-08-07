import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    axios
      .get("https://market-b9812-default-rtdb.firebaseio.com/products.json")
      .then((response) => {
        console.log("products: ", response.data);
        setProductData(response.data);
        console.log("productdata: ", productData);
      });
  }, []);
  const [productData, setProductData] = useState([]);
  const [orderPrice, setOrderPrice] = useState(0);
  const SHIPPING = 30.89;
  const handleCheckbox = (itemPrice, value) =>{
    const sum = orderPrice+itemPrice;
    const sub = orderPrice-itemPrice;
    value.target.checked ? setOrderPrice(sum) : setOrderPrice(sub);
  }
  return (
    <div className="App">
      <table style={{ width: "100%" }}>
        <tr>
          <th>Item Name</th>
          <th>Item Name</th>
          <th>Preço</th>
        </tr>
        {productData
          ? productData.map((item, i) => {
              return (
                <tr key={i} style={{ height: 30 }}>
                  <td>
                    <input type='checkbox' onChange={e => handleCheckbox(item.price, e)} ></input>
                  </td>
                  <td><img style={{ width: 20 }} src={item.img}></img>{item.name}</td>
                  <td>
                    {item.price}/{item.unity}
                  </td>
                </tr>
              );
            })
          : null}
      </table>
      <div style={{backgroundColor: '#ccc'}}>
            <p>Order Price: R$ {orderPrice.toFixed(2)}</p>
            <p>Shipping: R$ {SHIPPING}</p>
            <p>Total: R$ {(orderPrice + SHIPPING).toFixed(2)}</p>
      </div>
    </div>
  );
}

export default App;
