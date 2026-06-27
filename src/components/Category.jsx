export default function Category({ category, filter, setFilter }) {
  return (
    <>
      <button
        className={`categoryItem ${category.toLowerCase() === filter ? 'active' : ''}`}
        onClick={() => setFilter(category)}
      >
        {category}
      </button>
    </>
  );
}
