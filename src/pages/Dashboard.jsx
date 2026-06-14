import FilterDropdown from '../components/FilterDropdown';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

export default function Dashboard() {
  return (
    <>
      <SearchBar />
      <FilterDropdown />
      <FilterDropdown />
    </>
  );
}
