import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import { useState, useEffect } from 'react';

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [filter, setFilter] = useState('all');
  const [favouriteIds, setFavouriteIds] = useState([]);
  const [toggleViews, setToggleViews] = useState(true);

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
    // Show all products
    if (!searchInput && filter === 'all') return product;

    // Search for Product while 'all' filter is active
    if (searchInput && filter === 'all')
      if (product.title.toLowerCase().trim().includes(searchInput)) return product;

    // Filter Products by category if there is no search input
    if (!searchInput && filter !== 'all') if (product.category === filter) return product;

    // Search Products that have been filtered by category
    if (searchInput && filter !== 'all')
      if (product.category === filter && product.title.toLowerCase().trim().includes(searchInput))
        return product;
  });

  function toggleFavourite(product) {
    if (favouriteIds.includes(product.id)) {
      setFavouriteIds(favouriteIds.filter((id) => id !== product.id));
    } else {
      setFavouriteIds([...favouriteIds, product.id]);
    }
  }

  const favoriteProducts = products
    .filter((product) => favouriteIds.includes(product.id))
    .map((product) => {
      return { ...product };
    });

  return (
    <main className="container">
      <Header setToggleViews={() => setToggleViews(!toggleViews)} />
      <Dashboard
        products={toggleViews ? visibleProducts : favoriteProducts}
        favouriteIds={favouriteIds}
        searchInput={searchInput}
        filter={filter}
        categories={['all', ...new Set(products.map((product) => product.category))]}
        setSearchInput={setSearchInput}
        setFilter={setFilter}
        toggleFavourite={toggleFavourite}
      />
    </main>
  );
}
