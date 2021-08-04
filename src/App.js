import "./App.css";
import axios from 'axios'
import { useEffect, useState } from "react";

function App() {
  useEffect(()=>{
    axios.get('https://market-b9812-default-rtdb.firebaseio.com/products.json').then(response =>{
      console.log('products: ', response.data)
      setProductData(response.data)
      console.log('productdata: ', productData)
    })
  }, [])
  const [productData, setProductData] = useState([]);
  return (
    <div className="App">
      {/* <table style={{width: '100%'}} >
        <tr>
          <th>Item Name</th>
          <th>Preço</th>
        </tr>
        <tr style={{height: 30}}>
          <td>Cornetto Soft Erdbeer Ktn</td>
          <td>0.53€/PCS</td>
        </tr>
        <tr style={{height: 30}}>
          <td>Broccoli</td>
          <td>0.53€/PCS</td>
        </tr>
      </table> */}
    </div>
  );
}

export default App;
