import FilterDropdown from '../components/FilterDropdown';
import ProductGrid from '../components/products/ProductGrid';
import SearchBar from '../components/SearchBar';

export default function Dashboard({
  products,
  searchInput,
  filter,
  categories,
  favouriteIds,
  setSearchInput,
  setFilter,
  toggleFavourite,
}) {
  return (
    <>
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
      <FilterDropdown categories={categories} filter={filter} setFilter={setFilter} />
      {/* <FilterDropdown /> */}
      <ProductGrid
        products={products}
        favouriteIds={favouriteIds}
        toggleFavourite={toggleFavourite}
      />
    </>
  );
}
