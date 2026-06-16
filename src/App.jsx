import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import { useState, useEffect } from 'react';

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    (async function fetchData() {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const result = await response.json();
        setProducts(result.products);
      } catch (error) {
        setError(error);
        console.error('Error fetching data: ', error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const visibleProducts = products.filter((product) => {
    if (product.title.toLowerCase().trim().includes(searchInput)) return product;
  });

  return (
    <main className="container">
      <Header />
      <Dashboard
        products={visibleProducts}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
    </main>
  );
}
