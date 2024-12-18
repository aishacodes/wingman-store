import { useEffect, useState } from 'react';
import Heading from '../atom/Heading';
import TableWidget from './TableWidget';

const Orders = () => {
  const [products, setProducts] = useState([]);

  const fetchProduct = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const columns = [
    { label: 'Name', key: 'title' },
    { label: 'price', key: 'price' },
    { label: 'category', key: 'category' },
  ];
  return (
    <section className="py-8">
      <Heading classNames="mb-8">Orders</Heading>
      <div>
        <TableWidget columns={columns} data={products} />
      </div>
    </section>
  );
};

export default Orders;
