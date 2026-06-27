export default function SearchBar({ searchInput, setSearchInput }) {
  return (
    <>
      <input
        type="text"
        name="searchInput"
        className="search-bar"
        placeholder="Search for products by name..."
        onChange={(e) => setSearchInput(e.target.value)}
        value={searchInput}
      />
    </>
  );
}
