import logo from './logo.svg';
import './App.css';
import Product from './Product';
import { useEffect, useState } from 'react';
import axios from 'axios';


const productList = [
  {
    id: 1,
    title: "Water Bottle",
    description: "This is a plaastic water bottle",
    price: 1000
  },
  {
    id: 2,
    title: "Backpack",
    description: "This is for school students",
    price: 4000
  },
  {
    id: 3,
    title: "Mobile",
    description: "Samsung Galaxy S22 Ultra",
    price: 10000
  },
  {
    id: 4,
    title: "GIGABYTE",
    description: "Geforce GTX 1660Ti",
    price: 61000
  }
];

const url = "https://fakestoreapi.com/products";

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(
    () => {
      axios.get(url).then((result) => {
        console.log("products", result);
        setProducts(result.data);
      }).catch((err) => {
        console.log(err);
        setProducts(productList)
      }
      )
    }
    , []);

  useEffect(
    () => console.log(cart),
    [cart]
  )
  return (
    <div>
      <div>
        Number of items in cart : {cart.length}
      </div>
      {
        products.map((product) => (
          <Product
            key={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            handleAdd={() => {
              //cart.push(product.title);
              setCart([...cart, product.title]);

            }} />
        ))}




    </div>


  );
}

export default App;
