import FilterDropdown from '../components/FilterDropdown';
import Header from '../components/Header';
import ProductGrid from '../components/products/ProductGrid';
import SearchBar from '../components/SearchBar';

export default function Dashboard({ products, searchInput, setSearchInput }) {
  const brands = products?.map((product) => {
    if (product.brand !== undefined) return product;
  });

  console.log(brands);

  return (
    <>
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
      <FilterDropdown brands={brands} />
      {/* <FilterDropdown /> */}
      <ProductGrid products={products} />
    </>
  );
}
