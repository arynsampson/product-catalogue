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
  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
    (async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) throw new Error('Failed to fetch data.');
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

  if (loading) return <div>Loading items...</div>;

  if (error) {
    return (
      <div>
        <p>{error}</p>
      </div>
    );
  }

  const visibleProducts = products.filter((product) => {
    // Show all products
    if (!searchInput.trim().toLowerCase() && filter === 'all') return product;

    // Search for Product while 'all' filter is active
    if (searchInput.trim().toLowerCase() && filter === 'all')
      if (product.title.toLowerCase().trim().includes(searchInput.trim().toLowerCase()))
        return product;

    // Filter Products by category if there is no search input
    if (!searchInput.trim().toLowerCase() && filter !== 'all')
      if (product.category === filter) return product;

    // Search Products that have been filtered by category
    if (searchInput.trim().toLowerCase() && filter !== 'all')
      if (
        product.category === filter &&
        product.title.toLowerCase().trim().includes(searchInput.trim().toLowerCase())
      )
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

  const productsSummary = {
    products: products.length,
    filteredProducts: visibleProducts.length,
    favouriteProducts: favouriteIds.length,
  };

  return (
    <main className="container">
      <Header
        favouritesLength={favouriteIds.length}
        setShowFavorites={() => setShowFavorites(!showFavorites)}
      />
      <div className="main-content">
        <h2>Browse products</h2>
        <p>Discover and shop the best products from our catalogue.</p>
        <Dashboard
          products={showFavorites ? favoriteProducts : visibleProducts}
          productsSummary={productsSummary}
          favouriteIds={favouriteIds}
          searchInput={searchInput}
          filter={filter}
          categories={['all', ...new Set(products.map((product) => product.category))]}
          setSearchInput={setSearchInput}
          setFilter={setFilter}
          toggleFavourite={toggleFavourite}
        />
      </div>
    </main>
  );
}
