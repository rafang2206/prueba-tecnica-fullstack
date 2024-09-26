import Product from "./components/Product"
import imageLaptop from '../../assets/laptop.png';
import { useState } from "react";
import BuyProduct from "./components/BuyProduct";

const products = [
  {
    id: 1,
    name: 'Laptop 1',
    image: imageLaptop,
    price: 99,
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.'
  },
  {
    id: 2,
    name: 'Laptop 2',
    image: imageLaptop,
    price: 99,
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.'
  },
  {
    id: 3,
    name: 'Laptop 3',
    image: imageLaptop,
    price: 99,
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.'
  },
  {
    id: 4,
    name: 'Laptop 4',
    image: imageLaptop,
    price: 99,
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.'
  }
]

function Home() {

  const [selectedProduct, setSelectedProduct] = useState(false);

  const handleSelectedProduct = async () => {
    setSelectedProduct(true);
  }

  return (
    <div className='h-full p-1 flex flex-wrap justify-center items-center gap-4 mt-8'>
      {!selectedProduct ?
        <>
        {products && products.map(product => (
          <Product 
            key={product.id} 
            name={product.name} 
            image={product.image} 
            description={product.description} 
            price={product.price}
            handleSelectedProduct={handleSelectedProduct}
          />
        ))}
        </>
      :
        <BuyProduct setSelectedProduct={setSelectedProduct} />
      }
    </div>
  )
}

export default Home