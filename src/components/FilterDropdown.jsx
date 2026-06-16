export default function FilterDropdown({ categories, filter, setFilter }) {
  return (
    <>
      <select
        name="categories"
        id="categories"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </>
  );
}
