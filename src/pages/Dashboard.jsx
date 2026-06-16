import FilterDropdown from '../components/FilterDropdown';
import Header from '../components/Header';
import ProductGrid from '../components/products/ProductGrid';
import SearchBar from '../components/SearchBar';

export default function Dashboard({
  products,
  searchInput,
  filter,
  categories,
  setSearchInput,
  setFilter,
}) {
  return (
    <>
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
      <FilterDropdown categories={categories} filter={filter} setFilter={setFilter} />
      {/* <FilterDropdown /> */}
      <ProductGrid products={products} />
    </>
  );
}
