import FilterDropdown from '../components/FilterDropdown';
import ProductGrid from '../components/products/ProductGrid';
import SearchBar from '../components/SearchBar';
import ProductsSummary from '../components/summary/ProductsSummary';

export default function Dashboard({
  products,
  productsSummary,
  searchInput,
  filter,
  categories,
  favouriteIds,
  toggleFavourite,
  setSearchInput,
  setFilter,
  setShowFavorites,
}) {
  return (
    <>
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
      <ProductsSummary productsSummary={productsSummary} />
      {/* <FilterDropdown categories={categories} filter={filter} setFilter={setFilter} /> */}
      {/* <FilterDropdown /> */}
      {/* <button onClick={setShowFavorites}>Show Favourites</button> */}
      <ProductGrid
        products={products}
        favouriteIds={favouriteIds}
        toggleFavourite={toggleFavourite}
      />
    </>
  );
}
