import axios from 'axios';
import { useEffect, useState } from 'react';
import { Table } from '../../components/Table/Table';
import { Cart } from '../../components/Cart/Cart';
import { Loader } from '../../assets/gifs/Loader';
import './Main.css';
import { Navbar } from '../../components/Navbar/Navbar';
import { sum } from '../../utils/sum/sum';
import { sub } from '../../utils/sub/sub';
import { parseNegativeZero } from '../../utils/parseNegativeZero/parseNegativeZero';

export const Main = () => {
  useEffect(() => {
    axios
      .get('https://market-b9812-default-rtdb.firebaseio.com/products.json')
      .then((response) => {
        setProductData(response.data);
      });
  }, []);

  const [productData, setProductData] = useState([]);
  const [orderPrice, setOrderPrice] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const SHIPPING = 30.89;
  const handleCheckbox = (itemPrice, value) => {
    const itemsSum = sum(orderPrice, itemPrice);
    const itensSub = sub(orderPrice, itemPrice);
    value.target.checked ? setOrderPrice(itemsSum) : setOrderPrice(itensSub);
  };
  const loading = () => {
    if (productData.length > 0) {
      setTimeout(() => {
        setShowContent(true);
      }, 2000);
    }
  };
  loading();
  return (
    <div className="App">
      {showContent ? (
        <>
          <Navbar />
          <Table
            onCheck={(itemPrice, value) => handleCheckbox(itemPrice, value)}
            tableData={productData}
          />
          <div className="cart-container" style={{ background: 'white' }}>
            <Cart
              order={orderPrice.toFixed(2)}
              shipping={SHIPPING}
              total={
                sum(orderPrice, SHIPPING).toFixed(2) === '-0'
                  ? parseNegativeZero((orderPrice + SHIPPING).toFixed(2))
                  : (orderPrice + SHIPPING).toFixed(2)
              }
            />
          </div>
        </>
      ) : (
        <div className="gif-container">
          <Loader />
        </div>
      )}
    </div>
  );
};
